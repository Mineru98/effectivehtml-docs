import DocsShell from '../layout/DocsShell'
import { GuideChapterEvidence } from '../components/GuideChapterEvidence'
import { GuideHandoff } from '../components/GuideHandoff'
import { GuideNext } from '../components/GuideNext'
import { PAGE_BY_SLUG, PREV_NEXT, TOC } from '../data/pages'
import { CHAPTER_EVIDENCE, GUIDE_NEXT, HANDOFF } from '../data/evidence'

const page = PAGE_BY_SLUG.prototypes
const nav = PREV_NEXT.prototypes
const evidence = CHAPTER_EVIDENCE.prototypes

export default function PrototypesPage() {
  return (
    <DocsShell
      title={page.title}
      description={page.description}
      markdown={page.markdown}
      toc={TOC.prototypes}
      prev={nav.prev}
      next={nav.next}
    >
      <p>
        프로토타입은 실제 제품을 만들거나 바꾸기 전에 앱의 일부를 써보게 합니다. 에이전트는 현실적인
        콘텐츠와 플로우를 보여줄 만큼의 동작을 담은 독립 HTML 프로토타입을 만들 수 있습니다.
      </p>
      <GuideChapterEvidence
        kind="iframe"
        eyebrow={evidence.eyebrow}
        title={evidence.title}
        accent={evidence.accent}
        checks={evidence.checks}
        src={evidence.visual.kind === 'iframe' ? evidence.visual.src : ''}
      />
      <h2 id="what-a-prototype-can-show" className="group-heading">
        <a data-card href="#what-a-prototype-can-show">프로토타입이 보여줄 수 있는 것</a>
      </h2>
      <ul>
        <li>다단계 플로우</li>
        <li>로딩, 빈 상태, 오류, 성공 상태</li>
        <li>검증과 피드백</li>
        <li>키보드와 모바일 동작</li>
        <li>뷰 또는 모드 간 전환</li>
      </ul>
      <h2 id="it-does-not-need-to-be-the-whole-product" className="group-heading">
        <a data-card href="#it-does-not-need-to-be-the-whole-product">전체 제품일 필요는 없습니다</a>
      </h2>
      <p>
        유용한 프로토타입은 중요한 한 경로와 그 주변 상태를 다룰 수 있습니다. 백엔드, 모든 화면, 모든
        엣지 케이스가 필요하지 않습니다. 어떤 부분이 동작하고 어떤 부분이 시각적인지만 명확하면 됩니다.
      </p>
      <GuideHandoff cards={HANDOFF.prototypes} />
      <GuideNext {...GUIDE_NEXT.prototypes} />
    </DocsShell>
  )
}
