import DocsShell from '../layout/DocsShell'
import { GuideChapterEvidence } from '../components/GuideChapterEvidence'
import { GuideHandoff } from '../components/GuideHandoff'
import { GuideNext } from '../components/GuideNext'
import { PAGE_BY_SLUG, PREV_NEXT, TOC } from '../data/pages'
import { CHAPTER_EVIDENCE, GUIDE_NEXT, HANDOFF } from '../data/evidence'

const page = PAGE_BY_SLUG.wireframes
const nav = PREV_NEXT.wireframes
const evidence = CHAPTER_EVIDENCE.wireframes

export default function WireframesPage() {
  return (
    <DocsShell
      title={page.title}
      description={page.description}
      markdown={page.markdown}
      toc={TOC.wireframes}
      prev={nav.prev}
      next={nav.next}
    >
      <p>
        와이어프레임은 완성된 디자인 없이 페이지나 플로우가 어떻게 조직되는지 보여줍니다. 에이전트는
        같은 브리프를 여러 HTML 와이어프레임으로 만들어 데스크톱과 모바일 크기로 열어볼 수 있게 합니다.
      </p>
      <GuideChapterEvidence
        kind="image"
        eyebrow={evidence.eyebrow}
        title={evidence.title}
        accent={evidence.accent}
        checks={evidence.checks}
        href={evidence.visual.kind === 'image' ? evidence.visual.href : ''}
        image={evidence.visual.kind === 'image' ? evidence.visual.image : ''}
        imageAlt={evidence.visual.kind === 'image' ? evidence.visual.imageAlt : ''}
        imageWidth={evidence.visual.kind === 'image' ? evidence.visual.imageWidth : 0}
        imageHeight={evidence.visual.kind === 'image' ? evidence.visual.imageHeight : 0}
        external={evidence.visual.kind === 'image' ? evidence.visual.external : false}
      />
      <h2 id="what-a-wireframe-can-show" className="group-heading">
        <a data-card href="#what-a-wireframe-can-show">와이어프레임이 보여줄 수 있는 것</a>
      </h2>
      <ul>
        <li>콘텐츠 위계와 밀도</li>
        <li>내비게이션과 페이지 구조</li>
        <li>반응형 레이아웃</li>
        <li>같은 콘텐츠를 조직하는 여러 방식</li>
        <li>컨트롤의 순서와 그룹화</li>
      </ul>
      <h2 id="keep-the-focus-on-structure" className="group-heading">
        <a data-card href="#keep-the-focus-on-structure">구조에 집중하기</a>
      </h2>
      <p>
        현실적인 콘텐츠, 명확한 경계, 절제된 팔레트를 사용해 색·타이포·브랜딩을 논의하기 전에
        레이아웃과 구조를 비교할 수 있게 하세요.
      </p>
      <GuideHandoff cards={HANDOFF.wireframes} />
      <GuideNext {...GUIDE_NEXT.wireframes} />
    </DocsShell>
  )
}
