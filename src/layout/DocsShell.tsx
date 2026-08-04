import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import MobileHeader from './MobileHeader'
import Sidebar from './Sidebar'
import Toc, { type TocItem } from './Toc'
import TocPopover from './TocPopover'
import { Check, ChevronLeft, ChevronRight, Copy, PanelLeft, Search } from './icons'

export interface PageLink {
  href: string
  title: string
  description: string
}

export interface DocsShellProps {
  title: string
  description: string
  markdown: string
  toc: TocItem[]
  prev?: PageLink
  next?: PageLink
  children: ReactNode
}

function CopyMarkdownButton({ markdown }: { markdown: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(markdown)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = markdown
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      textarea.remove()
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button type="button" className="nd-copy-markdown" onClick={copy}>
      {copied ? <Check /> : <Copy />}
      {copied ? '복사됨' : '마크다운 복사'}
    </button>
  )
}

function PageCard({ card, kind }: { card: PageLink; kind: 'prev' | 'next' }) {
  return (
    <Link to={card.href} className={`nd-page-card ${kind}`}>
      <span className="nd-page-card-label">
        {kind === 'prev' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        {card.title}
      </span>
      <p>{card.description}</p>
    </Link>
  )
}

export default function DocsShell({
  title,
  description,
  markdown,
  toc,
  prev,
  next,
  children,
}: DocsShellProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div id="nd-docs-layout" data-sidebar-collapsed={collapsed || undefined}>
      <MobileHeader />
      <Sidebar collapsed={collapsed} onToggleCollapsed={() => setCollapsed((v) => !v)} />
      <div className="nd-sidebar-panel" style={{ display: collapsed ? undefined : 'none' }}>
        <button
          type="button"
          className="nd-icon-btn"
          aria-label="사이드바 펼치기"
          onClick={() => setCollapsed(false)}
        >
          <PanelLeft size={20} />
        </button>
        <button type="button" className="nd-icon-btn" aria-label="검색">
          <Search size={20} />
        </button>
      </div>
      <TocPopover title={title} items={toc} />
      <Toc items={toc} />
      <article id="nd-page">
        <h1 className="nd-page-title">{title}</h1>
        <p className="nd-page-description">{description}</p>
        <div className="nd-page-actions">
          <CopyMarkdownButton markdown={markdown} />
        </div>
        <div className="prose flex-1">{children}</div>
        {(prev || next) && (
          <footer className="nd-page-footer">
            {prev && <PageCard card={prev} kind="prev" />}
            {next && <PageCard card={next} kind="next" />}
          </footer>
        )}
      </article>
    </div>
  )
}
