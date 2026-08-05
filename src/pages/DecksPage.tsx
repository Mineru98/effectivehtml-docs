import DocsShell from '../layout/DocsShell'
import { GuideHandoff } from '../components/GuideHandoff'
import { GuideNext } from '../components/GuideNext'
import { PAGE_BY_SLUG, PREV_NEXT, TOC } from '../data/pages'
import { GUIDE_NEXT, HANDOFF } from '../data/evidence'

const page = PAGE_BY_SLUG.decks
const nav = PREV_NEXT.decks

export default function DecksPage() {
  return (
    <DocsShell
      title={page.title}
      description={page.description}
      markdown={page.markdown}
      toc={TOC.decks}
      prev={nav.prev}
      next={nav.next}
    >
      <p>
        브라우저 네이티브 덱은 HTML로 만든 슬라이드 프레젠테이션입니다. 상호작용, 애니메이션, 라이브
        예시, 링크를 담으면서도 열고 공유하기 쉽습니다.
      </p>
      <h2 id="what-html-adds" className="group-heading">
        <a data-card href="#what-html-adds">HTML이 더하는 것</a>
      </h2>
      <p>
        HTML 덱은 입력에 반응하고, 시퀀스를 드러내고, 작은 데모를 실행하거나, 라이브 데이터를 보여줄
        수 있습니다. 다른 웹 아티팩트와 같은 도구로 검사하고 수정할 수도 있습니다.
      </p>
      <h2 id="keep-it-usable-as-a-presentation" className="group-heading">
        <a data-card href="#keep-it-usable-as-a-presentation">프레젠테이션으로 쓸 수 있게</a>
      </h2>
      <p>
        덱은 여전히 읽기 쉬운 슬라이드, 안정적인 화살표 키 내비게이션, 보이는 진행 표시, 화면에 맞는
        레이아웃이 필요합니다. 모든 슬라이드를 반응형 웹페이지처럼 다루기보다 고정 16:9 스테이지가
        보통 더 단순합니다.
      </p>
      <h2 id="use-motion-when-it-helps" className="group-heading">
        <a data-card href="#use-motion-when-it-helps">도움이 될 때만 모션 사용</a>
      </h2>
      <p>
        애니메이션은 순서, 비교, 변화에 유용합니다. 슬라이드를 이해하는 데 필수가 되어서는 안 되며,
        덱은 reduced-motion 설정을 존중해야 합니다.
      </p>
      <GuideHandoff cards={HANDOFF.decks} />
      <GuideNext {...GUIDE_NEXT.decks} />
    </DocsShell>
  )
}
