import DocsShell from '../layout/DocsShell'
import { GuideChapterEvidence } from '../components/GuideChapterEvidence'
import { GuideHandoff } from '../components/GuideHandoff'
import { GuideNext } from '../components/GuideNext'
import { PAGE_BY_SLUG, PREV_NEXT, TOC } from '../data/pages'
import { CHAPTER_EVIDENCE, GUIDE_NEXT, HANDOFF } from '../data/evidence'

const page = PAGE_BY_SLUG.plans
const nav = PREV_NEXT.plans
const evidence = CHAPTER_EVIDENCE.plans
const visual = evidence.visual

export default function PlansPage() {
  return (
    <DocsShell
      title={page.title}
      description={page.description}
      markdown={page.markdown}
      toc={TOC.plans}
      prev={nav.prev}
      next={nav.next}
    >
      <p>
        플랜은 보통 마크다운으로 읽고 편집하기 가장 쉽습니다. 선형 문서에 자연스럽게 맞지 않는 시각
        정보가 있을 때 HTML이 도움이 됩니다.
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
      <h2 id="when-html-helps" className="group-heading">
        <a data-card href="#when-html-helps">HTML이 도움이 될 때</a>
      </h2>
      <p>HTML 플랜에는 다음을 담을 수 있습니다.</p>
      <ul>
        <li>나란히 비교하는 대안</li>
        <li>겹치는 작업이 있는 타임라인</li>
        <li>의존성</li>
        <li>다이어그램이나 동작 예시</li>
        <li>단계에 붙은 펼칠 수 있는 세부 정보</li>
      </ul>
      <p>플랜이 단지 작업 나열이라면 단순하게 마크다운을 사용하세요.</p>
      <h2 id="keep-it-tied-to-the-source" className="group-heading">
        <a data-card href="#keep-it-tied-to-the-source">원본에 연결된 상태 유지</a>
      </h2>
      <p>
        플랜은 주어진 요구사항, 범위, 의존성, 점검 항목, 미해결 질문을 보존해야 합니다. 플랜이 완성된
        것처럼 보이려고 빠진 제품·기술 세부 사항을 지어내서는 안 됩니다.
      </p>
      <GuideHandoff cards={HANDOFF.plans} />
      <GuideNext {...GUIDE_NEXT.plans} />
    </DocsShell>
  )
}
