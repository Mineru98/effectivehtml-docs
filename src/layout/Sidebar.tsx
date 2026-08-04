import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ExternalLink, GitHubMark, Moon, PanelLeft, Search, Sun } from './icons'

export const GITHUB_URL = 'https://github.com/plannotator/effective-html'
export const CATALOG_URL = 'https://www.effectivehtml.com/catalog'

export const DOC_LINKS: { to: string; label: string }[] = [
  { to: '/docs', label: 'Effective HTML 가이드' },
  { to: '/docs/why-html', label: '왜 HTML인가?' },
  { to: '/docs/designing-artifacts', label: '아티팩트 디자인하기' },
  { to: '/docs/choosing-fidelity', label: '충실도 선택하기' },
  { to: '/docs/wireframes', label: '와이어프레임' },
  { to: '/docs/prototypes', label: '프로토타입' },
  { to: '/docs/diagrams', label: '다이어그램' },
  { to: '/docs/decks', label: '덱' },
  { to: '/docs/plans', label: '플랜' },
]

export function Wordmark() {
  return (
    <Link to="/" className="docs-wordmark nd-wordmark">
      <span className="docs-wordmark-mark" aria-hidden />
      <span>Effective HTML</span>
    </Link>
  )
}

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', dark)
    root.style.colorScheme = dark ? 'dark' : 'light'
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      type="button"
      className="nd-theme-toggle"
      aria-label={dark ? '라이트 모드로 전환' : '다크 모드로 전환'}
      onClick={() => setDark((v) => !v)}
    >
      <Sun className="nd-icon-sun" />
      <Moon className="nd-icon-moon" />
    </button>
  )
}

export function SearchButton() {
  return (
    <button type="button" className="nd-sidebar-search" aria-label="검색">
      <Search size={16} />
      <span className="nd-search-label">검색</span>
      <kbd className="nd-kbd">⌘</kbd>
      <kbd className="nd-kbd">K</kbd>
    </button>
  )
}

export function SidebarNavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <ul className="nd-nav-list">
      <li className="nd-nav-separator">
        <ul className="nd-nav-list">
          <li>
            <a href={CATALOG_URL} className="nd-nav-link docs-catalog-link" target="_blank" rel="noreferrer">
              <span className="docs-catalog-star" aria-hidden>★</span>
              <span>Catalog</span>
            </a>
          </li>
          <li>
            <a href={GITHUB_URL} className="nd-nav-link" target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <ExternalLink size={14} className="nd-nav-external" />
            </a>
          </li>
        </ul>
      </li>
      {DOC_LINKS.map(({ to, label }) => (
        <li key={to}>
          <NavLink to={to} end={to === '/docs'} className="nd-nav-link" onClick={onNavigate}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export function SidebarFooter() {
  return (
    <div className="nd-sidebar-footer">
      <a href={GITHUB_URL} className="nd-github-link" target="_blank" rel="noreferrer" aria-label="GitHub 저장소">
        <GitHubMark size={20} />
      </a>
      <ThemeToggle />
    </div>
  )
}

export function SidebarNavContent({
  onCollapse,
  onNavigate,
}: {
  onCollapse?: () => void
  onNavigate?: () => void
}) {
  return (
    <>
      <div className="nd-sidebar-header">
        <Wordmark />
        {onCollapse && (
          <button type="button" className="nd-icon-btn" aria-label="사이드바 접기" onClick={onCollapse}>
            <PanelLeft size={20} />
          </button>
        )}
      </div>
      <SearchButton />
      <nav className="nd-sidebar-nav" aria-label="문서">
        <SidebarNavLinks onNavigate={onNavigate} />
      </nav>
      <SidebarFooter />
    </>
  )
}

export default function Sidebar({
  collapsed,
  onToggleCollapsed,
}: {
  collapsed: boolean
  onToggleCollapsed: () => void
}) {
  return (
    <div className="nd-sidebar-area">
      <aside id="nd-sidebar" style={{ transform: collapsed ? 'translateX(-100%)' : undefined }}>
        <div className="nd-sidebar-content">
          <SidebarNavContent onCollapse={onToggleCollapsed} />
        </div>
      </aside>
    </div>
  )
}
