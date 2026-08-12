import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import './skill-result.css'

type Skill = 'html' | 'design-artifact' | 'html-wireframe' | 'html-prototype' | 'html-plan' | 'html-diagram'

const SKILLS: readonly Skill[] = ['html', 'design-artifact', 'html-wireframe', 'html-prototype', 'html-plan', 'html-diagram']

const TITLES: Record<Skill, string> = {
  html: '검토 질문 라우팅 결과',
  'design-artifact': '승인 화면의 시각 방향',
  'html-wireframe': '결제 CTA 위계 비교',
  'html-prototype': '결제 실패 재시도 흐름',
  'html-plan': '배포 순서와 승인 기준',
  'html-diagram': '주문 서비스와 큐의 관계',
}

function selectedSkill(value: string | null): Skill {
  return SKILLS.includes(value as Skill) ? value as Skill : 'html'
}

function HtmlResult() {
  return <><p className="result-kicker">입력: 결제 화면을 검토 가능한 HTML로</p><div className="result-route"><b>검토 질문</b><span>→</span><code>html-wireframe</code><span>→</span><strong>CTA·정보 위계 비교</strong></div><p>지금 필요한 것은 브랜드 완성도가 아니라, 고객이 결제 결정을 내리기 전 무엇을 먼저 읽는지 확인하는 일입니다.</p></>
}

function DirectionResult() {
  return <><div className="result-swatches"><i /><i /><i /><i /></div><dl className="result-spec"><div><dt>재료</dt><dd>웜 페이퍼와 얇은 룰</dd></div><div><dt>강조</dt><dd>승인 행동에만 cobalt</dd></div><div><dt>문자</dt><dd>압축된 제목, 편안한 본문</dd></div></dl></>
}

function WireframeResult() {
  return <div className="wireframe-pair"><section><small>안 A · 즉시 결제</small><div className="wire-line short" /><div className="wire-line" /><button type="button">결제 계속</button></section><section><small>안 B · 조건 확인</small><div className="wire-line" /><div className="wire-line short" /><button type="button">주문 검토</button></section></div>
}

function PrototypeResult() {
  const [status, setStatus] = useState<'failed' | 'ready'>('failed')
  return <section className={`prototype-state ${status}`} aria-live="polite"><small>{status === 'failed' ? '결제 실패' : '재시도 준비됨'}</small><h2>{status === 'failed' ? '카드를 승인하지 못했습니다.' : '다시 결제할 수 있습니다.'}</h2><p>{status === 'failed' ? <>한 번 더 시도하거나 다른 카드로 <span className="result-phrase">바꿀 수 있습니다.</span></> : <>입력 내용은 유지됩니다. 결제를 <span className="result-phrase">계속해 보세요.</span></>}</p><button type="button" onClick={() => setStatus(status === 'failed' ? 'ready' : 'failed')}>{status === 'failed' ? '다시 시도' : '실패 상태 보기'}</button></section>
}

function PlanResult() {
  return <ol className="result-plan"><li><b>1. 배포 준비</b><span>릴리스 담당자가 체크리스트를 확인</span></li><li><b>2. 승인</b><span>운영 책임자가 변경 범위를 승인</span></li><li><b>3. 배포 후 점검</b><span>오류율과 결제 완료를 확인</span></li></ol>
}

function DiagramResult() {
  return <div className="result-diagram" role="img" aria-label="주문 서비스가 큐를 거쳐 알림 서비스에 연결되는 흐름"><div>주문 서비스</div><span>→</span><div>배송 큐</div><span>→</span><div>알림 서비스</div></div>
}

function Result({ skill }: { skill: Skill }) {
  if (skill === 'html') return <HtmlResult />
  if (skill === 'design-artifact') return <DirectionResult />
  if (skill === 'html-wireframe') return <WireframeResult />
  if (skill === 'html-prototype') return <PrototypeResult />
  if (skill === 'html-plan') return <PlanResult />
  return <DiagramResult />
}

export default function SkillResultPage() {
  const [params] = useSearchParams()
  const skill = selectedSkill(params.get('skill'))
  useEffect(() => {
    document.title = `${TITLES[skill]} · Effective HTML`
  }, [skill])
  return (
    <main className="skill-result-page">
      <header><Link to="/docs/skill-exhibit">← 사례 목록으로</Link><p>실행 결과 · <code>{skill}</code></p><h1>{TITLES[skill]}</h1></header>
      <nav aria-label="실행 결과 선택">{SKILLS.map((item) => <Link aria-current={item === skill ? 'page' : undefined} key={item} to={`/docs/skill-results?skill=${item}`}>{item}</Link>)}</nav>
      <section className={`skill-result-canvas result-${skill}`}><Result skill={skill} /></section>
      <p className="result-caption">이 화면은 같은 요청을 해당 스킬의 검토 목표에 맞춰 실행했을 때 <span className="result-phrase">확인할 수 있는</span> 최소 결과물입니다.</p>
    </main>
  )
}
