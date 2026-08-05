import { useEffect, useState, type MouseEvent, type ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Provider as BalancerProvider } from 'react-wrap-balancer'
import MobileHeader from './MobileHeader'
import Sidebar from './Sidebar'
import Toc, { type TocItem } from './Toc'
import TocPopover from './TocPopover'
import { BalancedText } from '../components/BalancedText'
import { balanceProse } from '../components/balanceProse'
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
  const [columnChanged, setColumnChanged] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleSidebar = () => {
    setColumnChanged(true)
    setCollapsed((v) => !v)
  }

  useEffect(() => {
    document.title = `${title} · Effective HTML`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description)
  }, [title, description])

  // HashRouter는 `#` 뒤 전체를 라우트로 읽으므로, 섹션 앵커(`href="#id"`)를 그대로 두면
  // 클릭 시 현재 경로가 날아갑니다. 링크는 위임으로 가로채 `경로#id` 형태로 옮깁니다.
  useEffect(() => {
    if (!location.hash) return
    const el = document.getElementById(decodeURIComponent(location.hash.slice(1)))
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
  }, [location.pathname, location.hash])

  const onAnchorClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.defaultPrevented || event.button !== 0) return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const anchor = (event.target as HTMLElement).closest('a')
    const href = anchor?.getAttribute('href')
    if (!href || !href.startsWith('#') || href.length < 2) return
    // HashRouter에서 <Link>는 `#/docs/...`로 렌더링됩니다. 라우트 링크는 건드리지 않습니다.
    if (href.startsWith('#/')) return
    const id = decodeURIComponent(href.slice(1))
    if (!document.getElementById(id)) return
    event.preventDefault()
    navigate(`${location.pathname}#${id}`)
  }

  return (
    <BalancerProvider>
      <div
        id="nd-docs-layout"
        data-sidebar-collapsed={collapsed || undefined}
        data-column-changed={columnChanged || undefined}
        onClick={onAnchorClick}
      >
        <MobileHeader />
        <Sidebar collapsed={collapsed} onToggleCollapsed={toggleSidebar} />
        <div className="nd-sidebar-panel" aria-hidden={!collapsed}>
          <button
            type="button"
            className="nd-icon-btn"
            aria-label="사이드바 펼치기"
            onClick={toggleSidebar}
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
          <h1 className="nd-page-title">
            <BalancedText breakSentences={false}>{title}</BalancedText>
          </h1>
          <p className="nd-page-description">
            <BalancedText>{description}</BalancedText>
          </p>
          <div className="nd-page-actions">
            <CopyMarkdownButton markdown={markdown} />
          </div>
          <div className="prose flex-1">{balanceProse(children)}</div>
          {(prev || next) && (
            <footer className="nd-page-footer">
              {prev && <PageCard card={prev} kind="prev" />}
              {next && <PageCard card={next} kind="next" />}
            </footer>
          )}
        </article>
      </div>
    </BalancerProvider>
  )
}
