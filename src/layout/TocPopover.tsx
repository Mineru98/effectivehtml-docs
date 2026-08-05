import { useEffect, useState } from 'react'
import { ChevronDown } from './icons'
import { TocAnchorList, useToc, type TocItem } from './Toc'

const CIRCUMFERENCE = 47.12388980384689

export default function TocPopover({ title, items }: { title: string; items: TocItem[] }) {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const { states, activeId } = useToc(items)

  useEffect(() => {
    let raf = 0
    const update = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, el.scrollTop / max)) : 0)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="nd-toc-popover" data-open={open}>
      <button
        type="button"
        className="nd-toc-popover-btn"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
          <circle cx="9" cy="9" r="7.5" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
          <circle
            cx="9"
            cy="9"
            r="7.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
            transform="rotate(-90 9 9)"
          />
        </svg>
        <span className="nd-toc-title">
          {activeId ? (items.find((i) => i.id === activeId)?.title ?? title) : title}
        </span>
        <ChevronDown size={16} className="nd-chevron" />
      </button>
      <div className="nd-toc-popover-list">
        <TocAnchorList items={items} states={states} onNavigate={() => setOpen(false)} />
      </div>
    </div>
  )
}
