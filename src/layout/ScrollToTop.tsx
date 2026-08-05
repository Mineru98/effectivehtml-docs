import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    // 섹션 앵커로 이동하는 경우는 DocsShell이 해당 위치로 스크롤합니다.
    if (hash) return
    // html에 scroll-behavior: smooth가 걸려 있어, 페이지 전환에서는 즉시 이동시킵니다.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
