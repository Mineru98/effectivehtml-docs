import { Link } from 'react-router-dom'
import DocsShell from '../layout/DocsShell'
import { PAGE_BY_SLUG, PREV_NEXT, TOC } from '../data/pages'
import './skill-exhibit.css'

const page = PAGE_BY_SLUG['skill-exhibit']
const nav = PREV_NEXT['skill-exhibit']

const EXHIBITS = [
  {
    name: 'html',
    label: '시작점',
    question: '결제 화면을 어떻게 만들어야 할까?',
    answer: '요청의 표현이 아니라, 지금 검토할 질문을 기준으로 가장 좁은 전문 스킬을 고릅니다.',
    prompt: '결제 화면을 검토 가능한 HTML 아티팩트로 만들어 줘. 먼저 어떤 질문을 검토해야 하는지 정해 줘.',
    next: '구조·흐름·계획·관계 중 하나가 분명해지면 전문 스킬로 넘깁니다.',
    tone: 'cobalt',
  },
  {
    name: 'design-artifact',
    label: '조합하는 방향',
    question: '이 서비스에 맞는 톤과 구성은 무엇일까?',
    answer: '산출물 유형을 대체하지 않고, 팔레트·타입·레이아웃 같은 시각 결정을 기존 디자인 시스템에 맞춰 정렬합니다.',
    prompt: '승인 화면을 위한 시각 방향을 정해 줘. 현재 프로젝트의 토큰을 우선하고, 디자인 플랜을 먼저 보여 줘.',
    next: '선택한 전문 스킬의 구조·상태·관계 규칙이 항상 우선합니다.',
    tone: 'lilac',
  },
  {
    name: 'html-wireframe',
    label: '구조를 비교할 때',
    question: '결제 화면의 CTA와 정보 위계를 두 방식으로 비교할까?',
    answer: '브랜드 완성도보다 정보의 순서, 밀도, 내비게이션과 모바일 재배치를 검토할 때 사용합니다.',
    prompt: '결제 화면을 두 가지 저충실도 와이어프레임으로 만들어 줘. CTA 위치와 정보 밀도가 실제로 다르게 보이게 해 줘.',
    next: '상태 변화나 오류 복구까지 시험해야 하면 prototype으로 넘어갑니다.',
    tone: 'green',
  },
  {
    name: 'html-prototype',
    label: '흐름을 시험할 때',
    question: '결제 실패 후 재시도가 실제로 이해되는가?',
    answer: '한 가지 신뢰할 수 있는 플로우에 입력, 오류, 복구, 성공, 키보드 조작 같은 도달 가능한 상태를 담습니다.',
    prompt: '결제 실패 후 재시도하는 프로토타입을 만들어 줘. 로딩·오류·성공 상태와 키보드 흐름을 실제로 확인할 수 있게 해 줘.',
    next: '목업은 이 스킬의 정적 모드입니다. 제품 전체를 흉내 낼 필요는 없습니다.',
    tone: 'coral',
  },
  {
    name: 'html-plan',
    label: '약속을 보존할 때',
    question: '배포 순서와 승인 기준을 한 페이지에서 검토할까?',
    answer: '주어진 요구사항의 순서, 책임, 의존성, 점검 기준을 보존한 실행 가능한 계획으로 재구성합니다.',
    prompt: '아래 배포 계획을 한 장의 HTML 계획으로 정리해 줘. 원문에 없는 일정이나 진행률은 만들지 말아 줘.',
    next: '선형 목록으로 충분하면 Markdown을 유지하는 편이 더 낫습니다.',
    tone: 'pink',
  },
  {
    name: 'html-diagram',
    label: '관계를 설명할 때',
    question: '서비스와 큐가 어떻게 연결되는지 빠르게 보여 줄까?',
    answer: '독자가 답해야 할 질문에 따라 토폴로지, 시퀀스, 상태, 계층, 타임라인 같은 가장 작은 시각 모델을 고릅니다.',
    prompt: '주문 서비스와 큐의 연결을 설명하는 HTML 다이어그램을 만들어 줘. 연결 관계가 한눈에 읽히게 해 줘.',
    next: '관계가 아니라 화면 구조를 검토한다면 wireframe이 더 직접적입니다.',
    tone: 'ink',
  },
] as const

export default function SkillExhibitPage() {
  return (
    <DocsShell title={page.title} description={page.description} markdown={page.markdown} toc={TOC['skill-exhibit']} prev={nav.prev} next={nav.next}>
      <p>
        Effective HTML의 기본 흐름은 단순합니다. 먼저 <code>html</code>로 검토 질문을 고르고, 시각적 방향이 아직 열려 있을 때만 <code>design-artifact</code>를 함께 사용한 뒤, 한 가지 전문 스킬이 산출물의 완성 기준을 맡습니다.
      </p>
      <section className="skill-exhibit-intro" aria-label="스킬 선택 흐름">
        <span>질문</span><b>→</b><code>html</code><b>→</b><code>전문 스킬</code>
        <span className="skill-exhibit-optional"><b>+</b><code>design-artifact</code><span>필요할 때</span></span>
      </section>
      <h2 id="choose-question" className="group-heading"><a data-card href="#choose-question">먼저 질문을 고르세요</a></h2>
      <p>
        “무엇을 어디에 둘까?”라면 와이어프레임, “이 흐름이 실제로 작동할까?”라면 프로토타입, “무엇을 어떤 순서로 할까?”라면 플랜, “무엇이 어떻게 연결될까?”라면 다이어그램이 맞습니다. 하나의 산출물 안에 여러 질문이 섞여 있으면 <code>html</code>이 가장 가까운 참조를 읽어 조합합니다.
      </p>
      <h2 id="skill-relay" className="group-heading"><a data-card href="#skill-relay">여섯 가지 스킬 릴레이</a></h2>
      <div className="skill-exhibit-grid">
        {EXHIBITS.map((exhibit) => (
          <article className={`skill-exhibit-card tone-${exhibit.tone}`} key={exhibit.name}>
            <header><span>{exhibit.label}</span><code>{exhibit.name}</code></header>
            <h3>{exhibit.question}</h3>
            <p>{exhibit.answer}</p>
            <div className="skill-exhibit-prompt"><span>예시 요청</span><code>{exhibit.prompt}</code></div>
            <Link className="skill-exhibit-run" to={`/docs/skill-results?skill=${exhibit.name}`}>실행 결과 보기</Link>
            <footer>{exhibit.next}</footer>
          </article>
        ))}
      </div>
      <p className="skill-exhibit-note">
        모든 결과물은 실제 콘텐츠, 의미론적 HTML, 반응형 레이아웃, 보이는 키보드 포커스, reduced motion 대응을 갖추고 브라우저에서 확인해야 합니다. <Link to="/docs/choosing-fidelity">충실도 선택하기</Link>에서 와이어프레임·목업·프로토타입의 차이도 이어서 살펴보세요.
      </p>
    </DocsShell>
  )
}
