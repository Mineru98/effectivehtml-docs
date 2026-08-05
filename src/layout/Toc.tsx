import { useEffect, useRef, useState } from 'react'
import { TextAlignStart } from './icons'

export interface TocItem {
  id: string
  title: string
}

interface AnchorState {
  id: string
  active: boolean
  /** 뷰포트에 들어온 항목이 하나도 없어 최근접 항목으로 대신 켜둔 상태 */
  fallback: boolean
  /** active가 마지막으로 바뀐 시각 */
  t: number
}

export interface TocState {
  states: AnchorState[]
  activeId: string | null
}

const SVG_NS = 'http://www.w3.org/2000/svg'
/** 레일 선의 x 좌표. 앵커의 padding-inline-start(20px) 안쪽에 맞춰져 있습니다. */
const LINE_X = 8.5

function initialStates(items: TocItem[]): AnchorState[] {
  return items.map((item) => ({ id: item.id, active: false, fallback: false, t: 0 }))
}

/**
 * 헤딩이 뷰포트에 얼마나 들어왔는지를 threshold 0.9로 관측합니다. 단일 항목만 고르지 않고
 * 화면에 걸쳐 있는 구간 전체를 활성으로 유지해, TOC 게이지가 구간 단위로 차오르게 합니다.
 */
export function useToc(items: TocItem[]): TocState {
  const [states, setStates] = useState<AnchorState[]>(() => initialStates(items))
  const statesRef = useRef(states)

  useEffect(() => {
    const next = initialStates(items)
    statesRef.current = next
    setStates(next)
    if (items.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.length === 0) return

        let hasActive = false
        const updated = statesRef.current.map((state) => {
          const entry = entries.find((e) => e.target.id === state.id)
          // 이번 콜백에 포함되지 않은 항목은 이전 상태를 이어갑니다.
          const active = entry ? entry.isIntersecting : state.active && !state.fallback
          const out =
            state.active === active ? state : { ...state, active, fallback: false, t: Date.now() }
          if (active) hasActive = true
          return out
        })

        const rootBounds = entries[0].rootBounds
        if (!hasActive && rootBounds) {
          const viewTop = rootBounds.top
          let min = Number.MAX_VALUE
          let idx = -1
          for (let i = 0; i < updated.length; i++) {
            const el = document.getElementById(updated[i].id)
            if (!el) continue
            const d = Math.abs(viewTop - el.getBoundingClientRect().top)
            if (d < min) {
              idx = i
              min = d
            }
          }
          if (idx !== -1) {
            updated[idx] = { ...updated[idx], active: true, fallback: true, t: Date.now() }
          }
        }

        statesRef.current = updated
        setStates(updated)
      },
      { threshold: 0.9 },
    )

    for (const item of items) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [items])

  let latest: AnchorState | null = null
  for (const state of states) {
    if (!state.active) continue
    if (!latest || state.t > latest.t) latest = state
  }

  return { states, activeId: latest ? latest.id : null }
}

interface ThumbGeometry {
  width: number
  height: number
  d: string
  /** 항목별 [top, bottom] (컨테이너 기준 픽셀) */
  positions: [number, number][]
  /** 항목별 [시작, 끝] path 길이 — dot의 offset-distance 값 */
  lengths: [number, number][]
}

/**
 * path를 실제 길이 좌표로 환산합니다. 항목 사이 곡선 구간은 y가 단조롭지 않으므로
 * 길이를 직접 계산하지 않고 1px씩 전진하며 해당 y에 도달하는 지점을 찾습니다.
 */
function measureLengths(d: string, positions: [number, number][]): [number, number][] {
  const svg = document.createElementNS(SVG_NS, 'svg')
  svg.setAttribute('width', '0')
  svg.setAttribute('height', '0')
  svg.style.position = 'absolute'
  svg.style.visibility = 'hidden'
  svg.style.pointerEvents = 'none'
  const path = document.createElementNS(SVG_NS, 'path')
  path.setAttribute('d', d)
  svg.appendChild(path)
  document.body.appendChild(svg)

  try {
    const total = path.getTotalLength()
    const out: [number, number][] = []
    for (let i = 0; i < positions.length; i++) {
      const [top, bottom] = positions[i]
      let l = i > 0 ? out[i - 1][1] + (top - positions[i - 1][1]) : top
      while (l < total && path.getPointAtLength(l).y < top) l++
      out.push([l, l + bottom - top])
    }
    return out
  } finally {
    svg.remove()
  }
}

function measureThumb(container: HTMLElement, count: number): ThumbGeometry | null {
  if (container.clientHeight === 0 || count === 0) return null
  const anchors = container.querySelectorAll<HTMLElement>('.nd-toc-anchor')
  if (anchors.length !== count) return null

  const positions: [number, number][] = []
  let height = 0
  let d = ''

  anchors.forEach((el, i) => {
    const styles = getComputedStyle(el)
    const top = el.offsetTop + parseFloat(styles.paddingTop)
    const bottom = el.offsetTop + el.clientHeight - parseFloat(styles.paddingBottom)
    height = Math.max(height, bottom)
    if (i === 0) {
      d += `M${LINE_X} ${top} L${LINE_X} ${bottom}`
    } else {
      const prevBottom = positions[i - 1][1]
      d += ` C ${LINE_X} ${top - 4} ${LINE_X} ${prevBottom + 4} ${LINE_X} ${top} L${LINE_X} ${bottom}`
    }
    positions.push([top, bottom])
  })

  return { width: LINE_X + 8, height, d, positions, lengths: measureLengths(d, positions) }
}

function TocThumb({ geometry, states }: { geometry: ThumbGeometry; states: AnchorState[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const previousRef = useRef<{ startIdx: number; endIdx: number; isUp: boolean } | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let startIdx = -1
    let endIdx = -1
    for (let i = 0; i < states.length; i++) {
      if (!states[i].active) continue
      if (startIdx === -1) startIdx = i
      endIdx = i
    }
    if (startIdx === -1 || endIdx >= geometry.positions.length) return

    // 위로 스크롤 중이면 dot이 활성 구간의 머리를, 아래로 향하면 꼬리를 따라갑니다.
    const prev = previousRef.current
    const isUp = prev
      ? prev.startIdx > startIdx ||
        prev.endIdx > endIdx ||
        (prev.startIdx === startIdx && prev.endIdx === endIdx && prev.isUp)
      : false
    previousRef.current = { startIdx, endIdx, isUp }

    el.style.setProperty('--track-top', `${geometry.positions[startIdx][0]}px`)
    el.style.setProperty('--track-bottom', `${geometry.positions[endIdx][1]}px`)
    el.style.setProperty(
      '--offset-distance',
      `${isUp ? geometry.lengths[startIdx][0] : geometry.lengths[endIdx][1]}px`,
    )
    el.style.setProperty('--opacity', '1')
  }, [geometry, states])

  return (
    <div
      ref={ref}
      className="nd-toc-thumb"
      aria-hidden
      style={{ width: geometry.width, height: geometry.height }}
    >
      <svg
        viewBox={`0 0 ${geometry.width} ${geometry.height}`}
        width={geometry.width}
        height={geometry.height}
      >
        <path d={geometry.d} strokeWidth="1" fill="none" />
      </svg>
      <span className="nd-toc-thumb-dot" style={{ offsetPath: `path("${geometry.d}")` }} />
    </div>
  )
}

function TocAnchor({ item, active, onClick }: { item: TocItem; active: boolean; onClick?: () => void }) {
  return (
    <a href={`#${item.id}`} className={`nd-toc-anchor${active ? ' active' : ''}`} onClick={onClick}>
      <svg className="nd-toc-rail" width="17" aria-hidden>
        <line
          x1={LINE_X}
          y1="6"
          x2={LINE_X}
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
  states,
  onNavigate,
}: {
  items: TocItem[]
  states: AnchorState[]
  onNavigate?: () => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [geometry, setGeometry] = useState<ThumbGeometry | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const measure = () => setGeometry(measureThumb(container, items.length))
    // 팝오버는 닫혀 있을 때 높이가 0이라, 열리는 순간 다시 재어야 합니다.
    const observer = new ResizeObserver(measure)
    observer.observe(container)
    measure()
    return () => observer.disconnect()
  }, [items])

  return (
    <div className="nd-toc-list" ref={containerRef}>
      {geometry && <TocThumb geometry={geometry} states={states} />}
      {items.map((item, i) => (
        <TocAnchor
          key={item.id}
          item={item}
          active={states[i]?.active ?? false}
          onClick={onNavigate}
        />
      ))}
    </div>
  )
}

export default function Toc({ items }: { items: TocItem[] }) {
  const { states } = useToc(items)

  return (
    <div className="nd-toc">
      <h3>
        <TextAlignStart size={16} />
        이 페이지에서
      </h3>
      <div className="nd-toc-scroll">
        <TocAnchorList items={items} states={states} />
      </div>
    </div>
  )
}
