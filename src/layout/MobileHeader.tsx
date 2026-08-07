import { useEffect, useState } from 'react'
import { PanelLeft, Search } from './icons'
import { SidebarNavContent, Wordmark } from './Sidebar'

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <>
      <div className="nd-drawer-overlay" data-open="true" onClick={onClose} />
      <div className="nd-drawer" data-open="true" role="dialog" aria-modal="true" aria-label="문서 내비게이션">
        <div className="nd-sidebar-content">
          <SidebarNavContent onNavigate={onClose} />
        </div>
      </div>
    </>
  )
}

export default function MobileHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <header className="nd-mobile-header">
        <button
          type="button"
          className="nd-icon-btn"
          aria-label="사이드바 열기"
          onClick={() => setDrawerOpen(true)}
        >
          <PanelLeft size={20} />
        </button>
        <Wordmark />
        <button type="button" className="nd-icon-btn" aria-label="검색">
          <Search size={20} />
        </button>
      </header>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
