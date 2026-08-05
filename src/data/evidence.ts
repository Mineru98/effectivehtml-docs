// artifact image/href paths under /assets/ are local copies downloaded from the original site.

export type GuideSourceItem = {
  href: string
  title: string
  subtitle: string
}

export const SOURCES_ITEMS: GuideSourceItem[] = [
  {
    href: 'https://claude.com/blog/using-claude-code-the-unreasonable-effectiveness-of-html',
    title: 'The unreasonable effectiveness of HTML',
    subtitle: 'Thariq Shihipar · Anthropic',
  },
  {
    href: 'https://thariqs.github.io/html-effectiveness/',
    title: 'HTML effectiveness examples',
    subtitle: '검토 가능한 HTML 아티팩트 20선',
  },
  {
    href: 'https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck',
    title: 'Understanding is the new bottleneck',
    subtitle: 'Geoffrey Litt',
  },
  {
    href: 'https://github.com/zarazhangrui/frontend-slides',
    title: 'Frontend Slides',
    subtitle: 'GitHub 저장소',
  },
  {
    href: 'https://github.com/nicobailon/visual-explainer',
    title: 'Visual Explainer',
    subtitle: 'Nico Bailon · 시각 HTML 에이전트 스킬',
  },
]

export type EvidenceCheck = { label: string; value: string }

export type ChapterEvidenceImage = {
  kind: 'image'
  href: string
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  external?: boolean
}

export type ChapterEvidenceIframe = {
  kind: 'iframe'
  src: string
}

export type ChapterEvidenceData = {
  eyebrow: string
  title: string
  accent: string
  checks: EvidenceCheck[]
  visual: ChapterEvidenceImage | ChapterEvidenceIframe
}

export const CHAPTER_EVIDENCE: Record<string, ChapterEvidenceData> = {
  wireframes: {
    accent: '#1649d8',
    eyebrow: '단일 아티팩트 증거',
    title: '표면이 완성되기 전에 구조를 판단할 수 있는가?',
    checks: [
      { label: '위계', value: '출시 결정과 차단 요소가 페이지를 지배합니다.' },
      { label: '경계', value: '주요 액션과 보조 액션이 시각적으로 분리되어 있습니다.' },
      { label: '리플로', value: '좁은 뷰포트에서도 같은 콘텐츠 순서가 유지됩니다.' },
    ],
    visual: {
      kind: 'image',
      href: '/assets/examples/release-readiness/wireframe.html',
      image: '/assets/examples/release-readiness/wireframe-desktop.png',
      imageAlt: '현실적인 인터페이스 구조를 가진 release readiness 와이어프레임',
      imageWidth: 1440,
      imageHeight: 1000,
    },
  },
  prototypes: {
    accent: '#1bae61',
    eyebrow: '라이브 행동 증거',
    title: '결정을 뒤집을 수 있는 상태를 직접 검증하세요.',
    checks: [
      { label: '경로', value: '차단 요소 하나를 해결하고 출시를 준비합니다.' },
      { label: '상태', value: '차단, 대기, 실패, 복구, 준비 상태를 조작할 수 있습니다.' },
      { label: '경계', value: '프로토타입은 백엔드를 주장하지 않고 동작을 보여줍니다.' },
    ],
    visual: {
      kind: 'iframe',
      src: '/assets/examples/release-readiness/prototype.html',
    },
  },
  diagrams: {
    accent: '#e8744f',
    eyebrow: '애니메이션 관계 증거',
    title: '전체 시스템을 평평하게 만들지 않고 한 요청을 추적하세요.',
    checks: [
      { label: '경계', value: '한 요청 경로를 강조하면서도 아키텍처가 보입니다.' },
      { label: '순서', value: '순서와 인계는 기하와 모션이 전달합니다.' },
      { label: '예외', value: '라이브 아티팩트는 리뷰어가 다른 경로를 선택하게 합니다.' },
    ],
    visual: {
      kind: 'image',
      href: 'https://www.effectivehtml.com/catalog/featured/workspaces-architecture.html',
      image: '/assets/catalog/featured/workspaces-architecture-sequence.svg',
      imageAlt: '선택 가능한 요청 경로를 추적하는 애니메이션 아키텍처 시놉시스',
      imageWidth: 1440,
      imageHeight: 892,
      external: true,
    },
  },
  plans: {
    accent: '#f09aa8',
    eyebrow: '선택적 시각 증거',
    title: '플랜에 유용한 두 번째 차원이 생길 때만 HTML을 사용하세요.',
    checks: [
      { label: '마크다운 유지', value: '순서가 선형이고 원본 약속이 이미 명확합니다.' },
      { label: 'HTML 사용', value: '겹침, 의존성, 대안, 첨부 증거가 판단을 바꿉니다.' },
      { label: '중단', value: '장식적인 인터페이스 없이도 실행 가능하고 추적 가능합니다.' },
    ],
    visual: {
      kind: 'image',
      href: 'https://thariqs.github.io/html-effectiveness/16-implementation-plan.html',
      image: '/assets/catalog/effective-svg/static/16-implementation-plan.svg',
      imageAlt: '마일스톤과 증거를 공간적으로 배치한 구현 플랜',
      imageWidth: 165,
      imageHeight: 202,
      external: true,
    },
  },
}

export type MediumComparisonData = {
  eyebrow: string
  title: string
  mdEyebrow: string
  mdTitle: string
  mdBody: string
  mdList: string[]
  htmlLabel: string
  imageHref: string
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  verdict: string
  accent?: string
  checks?: EvidenceCheck[]
}

export const WHY_HTML_COMPARISON: MediumComparisonData = {
  eyebrow: '증거 비교',
  title: '매체가 번역 작업을 줄일 때 제자리를 찾습니다.',
  mdEyebrow: 'Markdown · 선형적 약속',
  mdTitle: 'Release readiness',
  mdBody: '담당자를 확인하고, 차단 요소를 해소하고, 빌드를 검증한 뒤 출시합니다.',
  mdList: ['차단 검사 해소', '소유권 확인', '검증 실행'],
  htmlLabel: 'HTML · 공간적 증거',
  imageHref: '/assets/examples/release-readiness/wireframe.html',
  image: '/assets/examples/release-readiness/wireframe-desktop.png',
  imageAlt: '출시 위계와 반응형 구조를 보이게 하는 HTML 와이어프레임',
  imageWidth: 1440,
  imageHeight: 1000,
  verdict:
    '두 아티팩트 모두 맞을 수 있습니다. 위계, 너비, 상태, 상호작용을 보는 것이 리뷰를 바꿀 때만 HTML 버전을 사용하세요.',
  accent: 'var(--lilac)',
  checks: [],
}

export type FidelityTab = {
  id: string
  label: string
  accent: string
  title: string
  decision: string
  evidence: string
  stop: string
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  href: string
  external?: boolean
}

export const FIDELITY_TABS: FidelityTab[] = [
  {
    id: 'wireframe',
    label: '와이어프레임',
    accent: '#1649d8',
    title: '무엇이 어디에 속하는지 결정하세요.',
    decision: '위계, 내비게이션, 그룹화, 밀도, 반응형 순서.',
    evidence: '현실적인 콘텐츠를 담은 의도적으로 미완성된 구조.',
    stop: '완성도를 논하지 않고도 레이아웃을 판단할 수 있을 때.',
    image: '/assets/examples/release-readiness/wireframe-desktop.png',
    imageAlt: '인터페이스 구조를 비교하는 release readiness 와이어프레임',
    imageWidth: 1440,
    imageHeight: 1000,
    href: '/assets/examples/release-readiness/wireframe.html',
  },
  {
    id: 'mockup',
    label: '목업',
    accent: '#a884e8',
    title: '해결된 표면이 어떻게 느껴져야 하는지 결정하세요.',
    decision: '시각 위계, 브랜드 표현, 밀도, 타이포, 구성.',
    evidence: '모든 컨트롤이 동작하는 척하지 않는 세련된 제품 인터페이스 스터디.',
    stop: '동작을 추론하지 않고도 시각 방향을 평가할 수 있을 때.',
    image: '/assets/examples/product-studies/notion-project-space.png',
    imageAlt: '고충실도 연결 프로젝트 문서 인터페이스 스터디',
    imageWidth: 1440,
    imageHeight: 900,
    href: 'https://www.effectivehtml.com/examples/product-studies/notion-project-space.html',
    external: true,
  },
  {
    id: 'prototype',
    label: '프로토타입',
    accent: '#1bae61',
    title: '플로우가 신뢰할 수 있게 동작하는지 결정하세요.',
    decision: '상태 변화, 피드백, 검증, 복구, 키보드 동작.',
    evidence: '결정을 바꿀 수 있는 상태를 포함한 하나의 동작 경로.',
    stop: '제품을 만들지 않고도 핵심 동작을 검증할 수 있을 때.',
    image: '/assets/examples/release-readiness/prototype-desktop.png',
    imageAlt: '행동 상태를 보여주는 인터랙티브 release readiness 프로토타입',
    imageWidth: 1440,
    imageHeight: 1428,
    href: '/assets/examples/release-readiness/prototype.html',
  },
  {
    id: 'diagram',
    label: '다이어그램',
    accent: '#e8744f',
    title: '관계가 이해되는지 결정하세요.',
    decision: '시퀀스, 상태, 위계, 소유권, 토폴로지, 흐름.',
    evidence: '중요한 관계를 기하가 전달하는 시각 모델.',
    stop: '독자가 시스템 경계와 예외 경로를 식별할 수 있을 때.',
    image: '/assets/catalog/featured/workspaces-architecture-poster.jpg',
    imageAlt: '시스템 관계를 보여주는 아키텍처 요청 경로 탐색기',
    imageWidth: 1440,
    imageHeight: 892,
    href: 'https://www.effectivehtml.com/catalog/featured/workspaces-architecture.html',
    external: true,
  },
  {
    id: 'plan',
    label: '플랜',
    accent: '#f09aa8',
    title: '약속이 어떻게 순서 있는 작업이 되는지 결정하세요.',
    decision: '순서, 의존성, 범위, 검증, 미해결 질문.',
    evidence: '유용한 공간 구조만 담은 원본 기반 구현 순서.',
    stop: '작업이 실행 가능하고 추적 가능하며 HTML이 의식 이상의 가치를 더할 때.',
    image: '/assets/catalog/effective-svg/static/16-implementation-plan.svg',
    imageAlt: '마일스톤과 증거를 배치한 구현 플랜',
    imageWidth: 165,
    imageHeight: 202,
    href: 'https://thariqs.github.io/html-effectiveness/16-implementation-plan.html',
    external: true,
  },
]

export type HandoffCard = {
  kind: 'artifact' | 'source' | 'skill'
  href: string
  label: string
  description: string
}

export const HANDOFF: Record<string, HandoffCard[]> = {
  'why-html': [
    {
      kind: 'artifact',
      href: 'https://www.effectivehtml.com/examples',
      label: '예시 열기',
      description: 'release-readiness 와이어프레임과 프로토타입을 살펴봅니다.',
    },
    {
      kind: 'source',
      href: 'https://github.com/plannotator/effective-html',
      label: '소스 살펴보기',
      description: '브리프, 상태, 구현을 확인합니다.',
    },
    {
      kind: 'skill',
      href: 'https://github.com/plannotator/effective-html/blob/main/skills/html/SKILL.md',
      label: 'HTML 스킬 읽기',
      description: 'HTML 아티팩트 제작 일반 가이드입니다.',
    },
  ],
  'choosing-fidelity': [
    {
      kind: 'artifact',
      href: 'https://www.effectivehtml.com/catalog?view=compact#catalog-collection',
      label: '아티팩트 카탈로그 열기',
      description: '실제 렌더링된 결과물을 비교합니다.',
    },
    {
      kind: 'source',
      href: 'https://github.com/plannotator/effective-html/tree/main/examples/release-readiness',
      label: '소스 살펴보기',
      description: '브리프, 상태, 구현을 확인합니다.',
    },
    {
      kind: 'skill',
      href: 'https://github.com/plannotator/effective-html/blob/main/skills/html/SKILL.md',
      label: 'HTML 스킬 사용하기',
      description: '실제 작업을 알맞은 아티팩트로 연결합니다.',
    },
  ],
  wireframes: [
    {
      kind: 'artifact',
      href: '/assets/examples/release-readiness/wireframe.html',
      label: '와이어프레임 열기',
      description: '데스크톱과 모바일 너비에서 열어봅니다.',
    },
    {
      kind: 'source',
      href: 'https://github.com/plannotator/effective-html/tree/main/examples/release-readiness',
      label: '소스 살펴보기',
      description: '브리프, 상태, 구현을 확인합니다.',
    },
    {
      kind: 'skill',
      href: 'https://github.com/plannotator/effective-html/blob/main/skills/html-wireframe/SKILL.md',
      label: '와이어프레임 스킬 사용하기',
      description: '브리프로 간단한 HTML 와이어프레임을 만듭니다.',
    },
  ],
  prototypes: [
    {
      kind: 'artifact',
      href: '/assets/examples/release-readiness/prototype.html',
      label: '라이브 프로토타입 열기',
      description: 'release-readiness 플로우를 직접 시도해봅니다.',
    },
    {
      kind: 'source',
      href: 'https://github.com/plannotator/effective-html/tree/main/examples/release-readiness',
      label: '소스 살펴보기',
      description: '브리프, 상태, 구현을 확인합니다.',
    },
    {
      kind: 'skill',
      href: 'https://github.com/plannotator/effective-html/blob/main/skills/html-prototype/SKILL.md',
      label: '프로토타입 스킬 사용하기',
      description: '브리프로 동작하는 HTML 프로토타입을 만듭니다.',
    },
  ],
  diagrams: [
    {
      kind: 'artifact',
      href: 'https://www.effectivehtml.com/catalog/featured/workspaces-architecture.html',
      label: '요청 경로 탐색기 열기',
      description: '요청을 선택하고 아키텍처를 지나는 경로를 봅니다.',
    },
    {
      kind: 'source',
      href: 'https://github.com/plannotator/effective-html/blob/main/public/catalog/featured/workspaces-architecture.html',
      label: '소스 살펴보기',
      description: '브리프, 상태, 구현을 확인합니다.',
    },
    {
      kind: 'skill',
      href: 'https://github.com/plannotator/effective-html/blob/main/skills/html-diagram/SKILL.md',
      label: '다이어그램 스킬 사용하기',
      description: '주제에 맞는 HTML 다이어그램을 만듭니다.',
    },
  ],
  decks: [
    {
      kind: 'artifact',
      href: 'https://thariqs.github.io/html-effectiveness/09-slide-deck.html',
      label: '슬라이드 덱 예시 열기',
      description: 'The unreasonable effectiveness of HTML의 간결한 브라우저 네이티브 프레젠테이션을 살펴봅니다.',
    },
    {
      kind: 'source',
      href: 'https://github.com/zarazhangrui/frontend-slides',
      label: 'Frontend Slides 살펴보기',
      description: '디자인, 내비게이션, 애니메이션, 내보내기 방식을 봅니다.',
    },
    {
      kind: 'skill',
      href: 'https://github.com/zarazhangrui/frontend-slides/blob/main/SKILL.md',
      label: '덱 스킬 읽기',
      description: 'HTML 프레젠테이션 제작 가이드를 읽습니다.',
    },
  ],
  plans: [
    {
      kind: 'artifact',
      href: 'https://thariqs.github.io/html-effectiveness/16-implementation-plan.html',
      label: 'HTML 플랜 레퍼런스 살펴보기',
      description: '구현 플랜이 시각적 그룹화를 활용하는 방식을 봅니다.',
    },
    {
      kind: 'source',
      href: 'https://github.com/plannotator/effective-svg',
      label: '소스 살펴보기',
      description: '브리프, 상태, 구현을 확인합니다.',
    },
    {
      kind: 'skill',
      href: 'https://github.com/plannotator/effective-html/blob/main/skills/html-plan/SKILL.md',
      label: '플랜 스킬 사용하기',
      description: '누락된 요구사항을 지어내지 않는 플랜을 만듭니다.',
    },
  ],
}

export type GuideNextLink = {
  href: string
  title: string
  description: string
}

export const GUIDE_NEXT: Record<string, GuideNextLink> = {
  'why-html': {
    href: '/docs/choosing-fidelity',
    title: '와이어프레임, 목업, 프로토타입?',
    description: '일반적인 충실도 수준의 실질적인 차이를 확인하세요.',
  },
  'choosing-fidelity': {
    href: '/docs/wireframes',
    title: '와이어프레임',
    description: 'HTML 와이어프레임이 레이아웃과 반응형 구조를 비교하는 방식을 보세요.',
  },
  wireframes: {
    href: '/docs/prototypes',
    title: '프로토타입',
    description: '동작하는 HTML 플로우가 행동과 상태를 보여주는 방식을 보세요.',
  },
  prototypes: {
    href: '/docs/diagrams',
    title: '다이어그램',
    description: 'HTML이 아키텍처, 시퀀스, 상태, 흐름을 설명하는 방식을 보세요.',
  },
  diagrams: {
    href: '/docs/decks',
    title: '덱',
    description: '브라우저 네이티브 프레젠테이션이 슬라이드, 상호작용, 모션을 결합하는 방식을 보세요.',
  },
  decks: {
    href: '/docs/plans',
    title: '플랜',
    description: '플랜이 시각·인터랙티브 구조의 이점을 얻는 때를 보세요.',
  },
  plans: {
    href: 'https://www.effectivehtml.com/catalog?view=compact#catalog-collection',
    title: '카탈로그 둘러보기',
    description: 'HTML, SVG, 인터랙티브 예시를 엽니다.',
  },
  'designing-artifacts': {
    href: '/docs/choosing-fidelity',
    title: '충실도 선택하기',
    description: '와이어프레임, 프로토타입, 다이어그램, 플랜을 비교하세요.',
  },
}
