import DocsShell from '../layout/DocsShell'
import { GuideChapterEvidence } from '../components/GuideChapterEvidence'
import { GuideHandoff } from '../components/GuideHandoff'
import { GuideNext } from '../components/GuideNext'
import { PAGE_BY_SLUG, PREV_NEXT, TOC } from '../data/pages'
import { CHAPTER_EVIDENCE, GUIDE_NEXT, HANDOFF } from '../data/evidence'

const page = PAGE_BY_SLUG.diagrams
const nav = PREV_NEXT.diagrams
const evidence = CHAPTER_EVIDENCE.diagrams
const visual = evidence.visual

export default function DiagramsPage() {
  return (
    <DocsShell
      title={page.title}
      description={page.description}
      markdown={page.markdown}
      toc={TOC.diagrams}
      prev={nav.prev}
      next={nav.next}
    >
      <p>
        다이어그램은 관계를 더 쉽게 보이게 합니다. HTML 다이어그램은 시퀀스를 애니메이션으로
        보여주거나, 세부 정보를 드러내거나, 큰 시스템 속 경로를 선택하게 할 수도 있습니다.
      </p>
      <GuideChapterEvidence
        kind="image"
        eyebrow={evidence.eyebrow}
        title={evidence.title}
        accent={evidence.accent}
        checks={evidence.checks}
        href={visual.kind === 'image' ? visual.href : ''}
        image={visual.kind === 'image' ? visual.image : ''}
        imageAlt={visual.kind === 'image' ? visual.imageAlt : ''}
        imageWidth={visual.kind === 'image' ? visual.imageWidth : 0}
        imageHeight={visual.kind === 'image' ? visual.imageHeight : 0}
        external={visual.kind === 'image' ? visual.external : false}
      />
      <h2 id="common-diagram-types" className="group-heading">
        <a data-card href="#common-diagram-types">흔한 다이어그램 유형</a>
      </h2>
      <ul>
        <li>순서와 인계가 중요할 때 <strong>시퀀스</strong>를 사용하세요.</li>
        <li>전환과 조건이 중요할 때 <strong>상태 모델</strong>을 사용하세요.</li>
        <li>소유권이나 중첩이 중요할 때 <strong>위계</strong>를 사용하세요.</li>
        <li>물질이나 정보가 시스템을 통과할 때 <strong>흐름</strong>을 사용하세요.</li>
        <li>경계와 의존성이 중요할 때 <strong>아키텍처 뷰</strong>를 사용하세요.</li>
        <li>시간에 따른 변화가 중요할 때 <strong>타임라인</strong>을 사용하세요.</li>
      </ul>
      <p>모든 주제를 일반적인 왼쪽에서 오른쪽 프로세스로 억지로 맞추지 마세요.</p>
      <h2 id="keep-it-readable" className="group-heading">
        <a data-card href="#keep-it-readable">읽기 쉽게 유지하기</a>
      </h2>
      <p>
        작은 세트의 도형, 선, 색, 라벨을 일관되게 사용하세요. 밀도 높은 설명은 다이어그램 밖에 두고,
        실제 보는 크기에서도 라벨과 경로가 읽히는지 확인하세요.
      </p>
      <GuideHandoff cards={HANDOFF.diagrams} />
      <GuideNext {...GUIDE_NEXT.diagrams} />
    </DocsShell>
  )
}
