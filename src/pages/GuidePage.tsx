import { Link } from 'react-router-dom'
import DocsShell from '../layout/DocsShell'
import { GuideSources } from '../components/GuideSources'
import { PAGE_BY_SLUG, PREV_NEXT, TOC } from '../data/pages'
import { SOURCES_ITEMS } from '../data/evidence'

const page = PAGE_BY_SLUG.guide
const nav = PREV_NEXT.guide

export default function GuidePage() {
  return (
    <DocsShell
      title={page.title}
      description={page.description}
      markdown={page.markdown}
      toc={TOC.guide}
      prev={nav.prev}
      next={nav.next}
    >
      <p>
        에이전트는 와이어프레임, 목업, 프로토타입, 다이어그램, 덱, 작은 인터페이스를 만들 수 있습니다.
        긴 프롬프트나 Markdown 파일보다 이해하기 쉬울 때가 있습니다.
      </p>
      <p>
        이 문서는 그런 사용 방식을 짧게 안내합니다. 스킬을 설치하거나 고정된 프로세스를 따를 필요는
        없습니다. 예시를 참고해 필요한 아티팩트를 에이전트에게 요청하세요.
      </p>
      <p>이 가이드는 다음을 참고합니다.</p>
      <GuideSources items={SOURCES_ITEMS} />
      <h2 id="browse-examples" className="group-heading">
        <a data-card href="#browse-examples">예시 둘러보기</a>
      </h2>
      <p>
        <a href="https://www.effectivehtml.com/catalog" target="_blank" rel="noreferrer">
          카탈로그
        </a>
        에서 라이브 HTML 아티팩트, SVG, 예시, 스킬을 둘러보세요. 가이드의 나머지에서는{' '}
        <Link to="/docs/why-html">HTML이 도움이 되는 이유</Link>,{' '}
        <Link to="/docs/wireframes">와이어프레임</Link>, <Link to="/docs/prototypes">프로토타입</Link>,{' '}
        <Link to="/docs/diagrams">다이어그램</Link>, <Link to="/docs/decks">덱</Link>,{' '}
        <Link to="/docs/plans">플랜</Link>을 짧게 살펴봅니다.
      </p>
    </DocsShell>
  )
}
