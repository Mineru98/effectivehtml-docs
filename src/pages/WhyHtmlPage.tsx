import DocsShell from '../layout/DocsShell'
import { GuideChapterEvidence } from '../components/GuideChapterEvidence'
import { GuideHandoff } from '../components/GuideHandoff'
import { GuideNext } from '../components/GuideNext'
import { PAGE_BY_SLUG, PREV_NEXT, TOC } from '../data/pages'
import { GUIDE_NEXT, HANDOFF, WHY_HTML_COMPARISON } from '../data/evidence'

const page = PAGE_BY_SLUG['why-html']
const nav = PREV_NEXT['why-html']
const c = WHY_HTML_COMPARISON

export default function WhyHtmlPage() {
  return (
    <DocsShell
      title={page.title}
      description={page.description}
      markdown={page.markdown}
      toc={TOC['why-html']}
      prev={nav.prev}
      next={nav.next}
    >
      <p>
        에이전트는 종종 산문으로 답하며, 그때가 맞는 경우도 있습니다. 디자인을 비교하거나, 플로우를
        시도하거나, 시스템을 살펴보거나, 동작 방식을 보여줄 때는 HTML이 더 이해하기 쉬울 수 있습니다.
      </p>
      <GuideChapterEvidence
        variant="comparison"
        eyebrow={c.eyebrow}
        title={c.title}
        checks={c.checks ?? []}
        accent={c.accent}
        mdEyebrow={c.mdEyebrow}
        mdTitle={c.mdTitle}
        mdBody={c.mdBody}
        mdList={c.mdList}
        imageHref={c.imageHref}
        image={c.image}
        imageAlt={c.imageAlt}
        imageWidth={c.imageWidth}
        imageHeight={c.imageHeight}
        verdict={c.verdict}
      />
      <h2 id="what-html-adds" className="group-heading">
        <a data-card href="#what-html-adds">HTML이 더하는 것</a>
      </h2>
      <p>
        HTML은 설명, 레이아웃, 상태, 상호작용을 한 파일에 담을 수 있습니다. 브라우저에서 열고, 실제
        크기로 테스트하고, 클릭해 보고, 주석을 달고, 기술·비기술 협업자와 공유할 수 있습니다.
      </p>
      <p>
        그래서 와이어프레임, 목업, 프로토타입, 다이어그램, 시각 설명, 리포트, 프레젠테이션, 작은
        목적형 도구에 HTML이 유용합니다.
      </p>
      <h2 id="keep-markdown-when-it-is-enough" className="group-heading">
        <a data-card href="#keep-markdown-when-it-is-enough">마크다운으로 충분할 때</a>
      </h2>
      <p>
        노트, 짧은 플랜, 선형 설명에는 보통 마크다운이 더 단순합니다. 아이디어를 보거나 써보는 것이
        도움이 될 때 HTML을 사용하세요.
      </p>
      <GuideHandoff cards={HANDOFF['why-html']} />
      <GuideNext {...GUIDE_NEXT['why-html']} />
    </DocsShell>
  )
}
