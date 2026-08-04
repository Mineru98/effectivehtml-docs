import { useEffect, useState } from 'react'
import { TextAlignStart } from './icons'

export interface TocItem {
  id: string
  title: string
}

export function useActiveAnchor(items: TocItem[]): string | null {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (items.length === 0) {
      setActive(null)
      return
    }
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
    if (headings.length === 0) return

    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        const first = headings.find((h) => visible.has(h.id))
        if (first) setActive(first.id)
      },
      { rootMargin: '0px 0px -66% 0px' },
    )
    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [items])

  return active
}

function TocAnchor({ item, active, onClick }: { item: TocItem; active: boolean; onClick?: () => void }) {
  return (
    <a href={`#${item.id}`} className={`nd-toc-anchor${active ? ' active' : ''}`} onClick={onClick}>
      <svg className="nd-toc-rail" width="17" aria-hidden>
        <line
          x1="8.5"
          y1="6"
          x2="8.5"
          y2="100%"
          strokeWidth="1"
          stroke="currentColor"
          strokeOpacity="0.1"
        />
      </svg>
      {item.title}
    </a>
  )
}

export function TocAnchorList({
  items,
  active,
  onNavigate,
}: {
  items: TocItem[]
  active: string | null
  onNavigate?: () => void
}) {
  return (
    <>
      {items.map((item) => (
        <TocAnchor key={item.id} item={item} active={active === item.id} onClick={onNavigate} />
      ))}
    </>
  )
}

export default function Toc({ items }: { items: TocItem[] }) {
  const active = useActiveAnchor(items)

  return (
    <div className="nd-toc">
      <h3>
        <TextAlignStart size={16} />
        이 페이지에서
      </h3>
      <div className="nd-toc-scroll">
        <TocAnchorList items={items} active={active} />
      </div>
    </div>
  )
}
