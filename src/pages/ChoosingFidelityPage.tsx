import DocsShell from '../layout/DocsShell'
import { FidelityWorkbench } from '../components/FidelityWorkbench'
import { GuideHandoff } from '../components/GuideHandoff'
import { GuideNext } from '../components/GuideNext'
import { PAGE_BY_SLUG, PREV_NEXT, TOC } from '../data/pages'
import { FIDELITY_TABS, GUIDE_NEXT, HANDOFF } from '../data/evidence'

const page = PAGE_BY_SLUG['choosing-fidelity']
const nav = PREV_NEXT['choosing-fidelity']

export default function ChoosingFidelityPage() {
  return (
    <DocsShell
      title={page.title}
      description={page.description}
      markdown={page.markdown}
      toc={TOC['choosing-fidelity']}
      prev={nav.prev}
      next={nav.next}
    >
      <p>
        와이어프레임, 목업, 프로토타입은 같은 제품을 서로 다른 디테일 수준으로 보여줄 수 있습니다.
        논의하거나 시도해야 할 것을 보여주는 형태를 선택하세요.
      </p>
      <FidelityWorkbench tabs={FIDELITY_TABS} />
      <h2 id="wireframe" className="group-heading">
        <a data-card href="#wireframe">와이어프레임</a>
      </h2>
      <p>
        와이어프레임은 대략적인 레이아웃, 위계, 내비게이션, 반응형 구조를 보여줍니다. 시각적
        완성도보다 조직 방식이 중요할 때 유용합니다.
      </p>
      <h2 id="mockup" className="group-heading">
        <a data-card href="#mockup">목업</a>
      </h2>
      <p>
        목업은 제품이 어떻게 보일 수 있는지를 보여줍니다. 모든 컨트롤을 동작시키지 않고도 실제 디자인
        시스템, 콘텐츠, 타이포, 색, 간격을 사용할 수 있습니다.
      </p>
      <h2 id="prototype" className="group-heading">
        <a data-card href="#prototype">프로토타입</a>
      </h2>
      <p>
        프로토타입은 플로우를 직접 써보게 합니다. 상태 변화, 검증, 로딩, 오류, 성공, 키보드 동작,
        반응형 상호작용을 보여줄 수 있습니다.
      </p>
      <h2 id="diagram" className="group-heading">
        <a data-card href="#diagram">다이어그램</a>
      </h2>
      <p>
        다이어그램은 부분이 어떻게 연결되는지 보여줍니다. 아키텍처, 시퀀스, 상태, 위계, 소유권,
        흐름에 사용하세요.
      </p>
      <h2 id="plan" className="group-heading">
        <a data-card href="#plan">플랜</a>
      </h2>
      <p>
        플랜은 작업을 순서대로 정리합니다. 보통 마크다운으로 충분합니다. 시각 비교, 타임라인, 의존성,
        임베드된 예시가 필요할 때 HTML이 도움이 됩니다.
      </p>
      <GuideHandoff cards={HANDOFF['choosing-fidelity']} />
      <GuideNext {...GUIDE_NEXT['choosing-fidelity']} />
    </DocsShell>
  )
}
