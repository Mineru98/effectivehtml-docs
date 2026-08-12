export interface PageMeta {
  slug: string
  path: string
  navTitle: string
  title: string
  description: string
  markdown: string
}

export interface TocItem {
  id: string
  title: string
}

export interface PageLink {
  href: string
  title: string
  description: string
}

export const PAGES: PageMeta[] = [
  {
    slug: 'guide',
    path: '/docs',
    navTitle: 'Effective HTML 가이드',
    title: 'Effective HTML 가이드',
    description: '에이전트로 만드는 와이어프레임, 목업, 프로토타입, 다이어그램, 덱 및 기타 HTML 아티팩트를 위한 짧은 가이드.',
    markdown: '# Effective HTML 가이드\n\n> 에이전트로 만드는 와이어프레임, 목업, 프로토타입, 다이어그램, 덱 및 기타 HTML 아티팩트를 위한 짧은 가이드.\n\n에이전트는 와이어프레임, 목업, 프로토타입, 다이어그램, 덱, 작은 인터페이스를 만들 수 있습니다. 긴 프롬프트나 Markdown 파일보다 이해하기 쉬울 때가 있습니다.\n\n이 문서는 그런 사용 방식을 짧게 안내합니다. 스킬을 설치하거나 고정된 프로세스를 따를 필요는 없습니다. 예시를 참고해 필요한 아티팩트를 에이전트에게 요청하세요.\n\n이 가이드는 다음을 참고합니다.\n\n## 예시 둘러보기\n\n[카탈로그](https://www.effectivehtml.com/catalog)에서 라이브 HTML 아티팩트, SVG, 예시, 스킬을 둘러보세요. 가이드의 나머지에서는 [HTML이 도움이 되는 이유](/docs/why-html), [와이어프레임](/docs/wireframes), [프로토타입](/docs/prototypes), [다이어그램](/docs/diagrams), [덱](/docs/decks), [플랜](/docs/plans)을 짧게 살펴봅니다.\n',
  },
  {
    slug: 'skill-exhibit',
    path: '/docs/skill-exhibit',
    navTitle: '스킬 활용 사례',
    title: '스킬 활용 사례',
    description: '질문에서 시작해 적합한 Effective HTML 스킬과 다음 작업을 고르는 여섯 가지 사례입니다.',
    markdown: '# 스킬 활용 사례\n\n> 질문을 먼저 정하고, 가장 좁은 전문 스킬을 고르세요. 시각적 방향이 열려 있을 때만 design-artifact를 조합합니다.\n\n## 먼저 질문을 고르세요\n\nhtml은 일반 요청을 전문 스킬로 라우팅합니다. 구조를 비교할 때는 wireframe, 흐름과 상태를 시험할 때는 prototype, 실행 순서를 보존할 때는 plan, 관계를 설명할 때는 diagram을 선택합니다.\n\n## 여섯 가지 스킬 릴레이\n\n각 카드는 한 가지 실제 작업 질문과 그에 맞는 스킬 순서를 보여 줍니다.',
  },
  {
    slug: 'why-html',
    path: '/docs/why-html',
    navTitle: '왜 HTML인가?',
    title: '왜 HTML인가?',
    description: '아이디어를 보거나 직접 써보는 것이 읽기보다 명확할 때 HTML 아티팩트를 사용하세요.',
    markdown: '# 왜 HTML인가?\n\n> 아이디어를 보거나 직접 써보는 것이 읽기보다 명확할 때 HTML 아티팩트를 사용하세요.\n\n에이전트는 종종 산문으로 답하며, 그때가 맞는 경우도 있습니다. 디자인을 비교하거나, 플로우를 시도하거나, 시스템을 살펴보거나, 동작 방식을 보여줄 때는 HTML이 더 이해하기 쉬울 수 있습니다.\n\n## HTML이 더하는 것\n\nHTML은 설명, 레이아웃, 상태, 상호작용을 한 파일에 담을 수 있습니다. 브라우저에서 열고, 실제 크기로 테스트하고, 클릭해 보고, 주석을 달고, 기술·비기술 협업자와 공유할 수 있습니다.\n\n그래서 와이어프레임, 목업, 프로토타입, 다이어그램, 시각 설명, 리포트, 프레젠테이션, 작은 목적형 도구에 HTML이 유용합니다.\n\n## 마크다운으로 충분할 때\n\n노트, 짧은 플랜, 선형 설명에는 보통 마크다운이 더 단순합니다. 아이디어를 보거나 써보는 것이 도움이 될 때 HTML을 사용하세요.\n',
  },
  {
    slug: 'designing-artifacts',
    path: '/docs/designing-artifacts',
    navTitle: '아티팩트 디자인하기',
    title: '아티팩트 디자인하기',
    description: 'design-artifact 스킬로 팔레트, 타이포, 레이아웃, 테마, 시각적 레지스터를 의도적으로 결정하세요.',
    markdown: '# 아티팩트 디자인하기\n\n> design-artifact 스킬로 팔레트, 타이포, 레이아웃, 테마, 시각적 레지스터를 의도적으로 결정하세요.\n\n[`design-artifact`](https://github.com/plannotator/effective-html/blob/main/skills/design-artifact/SKILL.md)는 HTML 페이지, 리포트, 플랜, 랜딩 페이지, 데모, 덱, 작은 도구를 위한 크리에이티브 디렉션을 제공합니다. 단독으로 쓰거나 더 구체적인 Effective HTML 스킬과 함께 사용할 수 있습니다.\n\n이 스킬은 사용자의 지시와 프로젝트의 기존 디자인 시스템을 우선합니다. 시각 방향이 열려 있을 때는 브리프에 맞게 처리 수준을 정하고, 주제를 기준으로 결정하며, 하우스 스타일을 강요하지 않고 실무형·에디토리얼 아티팩트에 같은 정성을 기울입니다.\n\n## 스킬이 다루는 것\n\n프로세스는 색, 타이포, 레이아웃에 대한 짧은 계획으로 시작합니다. 기본 원칙은 기존 자료, 실제 콘텐츠, 타이포그래피, 뉴트럴, 테마, 간격, 반응형 오버플로, CSS 구조, 인터페이스 카피, 의미 있는 시각 장치, 상호작용, 접근성, 검증을 다룹니다. 에디토리얼 작업에는 추가 독창성 점검과 하나의 의도적인 미적 베팅이 들어갑니다.\n\n## 정식 스킬 복사하기\n\n아래 블록은 저장소 원본을 그대로 옮긴 것입니다. 저장소나 에이전트 스킬 디렉터리에 `skills/design-artifact/SKILL.md`로 저장하세요.\n\n````md title="skills/design-artifact/SKILL.md"\n---\nname: design-artifact\ndescription: Design principles and creative direction for building HTML artifacts — pages, reports, plans, landing pages, demos, decks, and small tools. Use when creating or restyling any visual HTML deliverable and deciding its palette, type pairing, layout, theming, or overall register, or when the output must not look generically AI-generated.\n---\n\nTake the perspective of the creative director at a boutique agency with a reputation for range — every commission gets its own visual identity, scaled to whatever level of treatment the brief actually merits. Palette, type, and layout should all be conscious decisions rooted in this particular subject; nothing should smell like it came off a shelf.\n\n## Begin by sizing up the brief\n\nThe question is never *whether* to design — it\'s what register to design in. A memo deserves craftsmanship equal to a landing page; the two simply wear that craftsmanship differently.\n\nMuch of what comes in wants a workmanlike register: plans, briefs, demos. Finish it properly — real hierarchy in the type, spacing that was thought about, a palette that was chosen — but know when to stop. Hardly any page benefits from a towering, theatrical hero. Ornament sparingly and with taste.\n\nThen there\'s work that earns the editorial register: landing pages, games, apps and tools someone will hold onto or pass along.\n\nWhen in doubt, remember that nobody ever regretted a well-composed page, whereas an identity pushed too hard sometimes backfires.\n\nEverything in the fundamentals section applies universally. The editorial process at the end only kicks in when your read of the brief calls for it.\n\n## Fundamentals for every artifact\n\n**Defer to prior art.** Before anything else, hunt for an established design system — a AGENTS.md or CLAUDE.md and/or DESIGN.md, QUALITY.md, PRODUCT.md etc, a tokens or theme file, styling on existing components. Found one? Apply it. The guidance below exists to plug holes, never to overrule. Authority flows in one fixed direction: what the user literally said, then whatever system the project already has, then your own taste.\n\n**Anchor everything to the subject.** Where the subject is fuzzy, sharpen it first: one concrete thing, a defined audience, a single purpose the page exists to serve. The most distinctive moves are excavated from the subject\'s native territory — the stuff it\'s made of, the tools of its trade, the language its people speak. Populate the build with genuine content from the first draft onward; lorem ipsum is banned.\n\n**Put two typefaces in conversation.** Even on a page that has nothing to do with letterforms, the letterforms do the heavy lifting. Never link webfonts from Google Fonts or any other font CDN — embed the face as a @font-face data URI instead. Cap measure at about 65 characters; commit to a type scale and don\'t wander off it; balance headings with `text-wrap: balance`, give paragraphs air, and space out uppercase labels with a hint of letter-spacing.\n\n**Neutrals are choices too.** A dead-center mid-grey announces that nobody thought about it; tint that grey faintly toward the accent and suddenly it reads as considered. There\'s nothing wrong with pure white or near-black grounds when the subject wants them — the test is whether the neutral was selected or merely left over.\n\n**Both themes, equal care.** Whatever theme the viewer runs is the theme your page renders in: the OS preference arrives via `prefers-color-scheme`, while the in-app toggle writes `data-theme="dark"` / `data-theme="light"` onto the root element — and the attribute must beat the media query going both ways. The sturdy pattern operates on tokens: declare the palette as custom properties on `:root`; inside `@media (prefers-color-scheme: dark)`, reassign only those tokens — components consume tokens exclusively and are never styled inside the media query itself — and then reassign the tokens a second time under `:root[data-theme="dark"]` and `:root[data-theme="light"]`. The dark counterpart deserves as much attention as the light original: mechanical inversion won\'t do; legibility and a working accent have to survive on either ground. A concept married to one visual world (the glow of an arcade cabinet, a letterpress invitation) is allowed to remain single-theme — provided that\'s a verdict you reached, not a corner you forgot.\n\n**Spacing belongs to the layout, not the elements.** Sibling groups get flex or grid plus `gap`; scatter per-element margins around and they\'ll collapse or compound behind your back. Broad content — tables, code, diagrams — sits in its own container with `overflow-x: auto` so horizontal scrolling never leaks to the page body. Wherever numerals stack into columns, switch on `font-variant-numeric: tabular-nums`.\n\n**Dodge the telltale AI aesthetic.** Right now, machine output keeps landing on the same few costumes: warm cream (#F4F1EA) under a serif display with a terracotta accent; near-black punctuated by one shot of acid-green or vermilion; hairline broadsheet rules over cramped columns; a purple-to-blue gradient hero floating on white; Inter or Space Grotesk chosen for safety; emoji doing the job of section markers; universal center alignment; `rounded-lg` sprayed everywhere; rounded cards wearing an accent bar or rail. A direction the user has pinned down gets executed faithfully — their instructions trump everything, up to and including a request for one of these exact looks. Absent instructions, that freedom is yours; don\'t blow it on a cliché.\n\n**Engineer it soundly.** Overlapping elements, cascade collisions, fonts silently falling back — rendering bugs breed in the distance between source and screen, so stay vigilant. Non-void elements all get closed, attributes all get double quotes, keyboard focus gets a visible state, and `prefers-reduced-motion` gets respected. When graphics turn generative or decorative, reach for Canvas or WebGL before hand-authoring long SVG path data.\n\n**Mind the cascade.** Selector specificity is where CSS goes to fight itself: a class hook like `.section` and an element hook like `.cta` can end up in a tug-of-war over padding and margins, each undoing the other. Architect the cascade so your spacing can\'t be quietly sabotaged.\n\n**Copy is a material.** Treat the words as load-bearing, not garnish. Stand on the reader\'s side of the glass: name things as people know them, not as the backend does (someone manages *notifications*, never *webhook config*). Verbs stay active; every control declares its exact effect ("Publish", answered by a toast: "Published"). An error message diagnoses the failure and prescribes the fix — never groveling, never hand-waving. Precision outperforms wit.\n\n**Make structure mean something.** Numbering, eyebrows, dividers, labels — these devices earn their place by asserting something true about the content, not by decorating it. Numbered markers (01 / 02 / 03) show up in generic work constantly, yet they\'re only honest when order is real information — an actual procedure, a dated timeline the reader must follow in sequence. Before deploying a device like that, ask whether it\'s telling the truth.\n\n**Interfaces are not documents.** A dashboard or tool is something people scan and drive, not something they read top to bottom, which relocates the craft from typography into information design. Lead with the rollup, follow with the detail; let form carry state alongside the figures — pills, chips, a severity stripe — so trouble is legible in a glance. Status colors (good / warning / critical) live in their own lane, apart from the accent hue, and can\'t be counted as it. Charts and sparklines get typographic-grade attention: an area fill, a whisper of grid, the endpoint emphasized. If it can be clicked, it should look clickable.\n\n## Process\n\nCode comes second. First, rough out a short design plan — a tight token system spanning color, type, and layout:\n- **Color**: 4–6 hex values, each with a name.\n- **Type**: faces covering 2+ roles — a display face with character, deployed with restraint; a body face that partners it; a utility face for captions or data if the work needs one.\n- **Layout**: the organizing idea, captured in a sentence or two.\n\nBuild only after that, executing the plan and tracing every color and type decision back to it.\n\n## When the request is editorial\n\nNow the posture shifts: picture a client who has already thrown out every proposal that felt canned and is paying specifically for conviction. Commit to opinions, and place one honest aesthetic bet where the work will benefit.\n\nAudit the design plan against the subject before a line of code exists: any element that could pass for the stock answer to any similar brief gets reworked, with a note on what moved and the reasoning. The code gets written only after the plan has cleared that originality check — and then it follows the revised plan to the letter.\n\n**Principles**\n\n- Treat the hero as an argument: open on the single most characteristic artifact of the subject\'s world — headline, image, live demo, interactive moment.\n- The page\'s personality lives in its type. Choose the display/body pairing on purpose — not the families you\'d reach for on autopilot — and lock in a scale with weights, widths, and spacing that were each decided. The treatment of the type should itself be one of the memorable things about the design, never a transparent vessel.\n- Motion is a budget to allocate. Ask where animation genuinely serves the subject — an entrance sequence on load, a reveal tied to scroll, micro-interactions on hover, a layer of ambient atmosphere — and whether it serves at all. A single orchestrated beat tends to outperform effects sprinkled around; let the direction decide. Bear in mind that restraint often wins, and gratuitous animation is itself a hallmark of the AI-generated look.\n- Scale the execution to the ambition. Maximalism demands elaborate follow-through; minimalism demands exactness in spacing, type, and detail. Elegance means delivering the chosen vision completely.\n- Concentrate the daring in one location and hush everything around it. Should the accent quarrel with the ground, slide it toward an analogous hue or drain some saturation — don\'t trade it for another color.\n\n## After the artifact ships\n\nOnce the artifact is finished and delivered, ask the user whether they\'d like to share it as a public page. If — and only if — they say yes, publish the file with the `tot` CLI (tot.page) and hand back the URL it prints:\n\n```bash\ntot path/to/artifact.html\n```\n\nIf `tot` is not installed (`command -v tot` fails), tell the user and offer to install it. Install only on their explicit go-ahead:\n\n```bash\nnpm install -g @plannotator/tot\n```\n\nNever publish or install without the user\'s explicit consent — a shared page is publicly accessible to anyone who has the link.\n````\n',
  },
  {
    slug: 'choosing-fidelity',
    path: '/docs/choosing-fidelity',
    navTitle: '충실도 선택하기',
    title: '충실도 선택하기',
    description: '와이어프레임, 목업, 프로토타입, 다이어그램, 플랜의 차이를 이해하세요.',
    markdown: '# 충실도 선택하기\n\n> 와이어프레임, 목업, 프로토타입, 다이어그램, 플랜의 차이를 이해하세요.\n\n와이어프레임, 목업, 프로토타입은 같은 제품을 서로 다른 디테일 수준으로 보여줄 수 있습니다. 논의하거나 시도해야 할 것을 보여주는 형태를 선택하세요.\n\n## 와이어프레임\n\n와이어프레임은 대략적인 레이아웃, 위계, 내비게이션, 반응형 구조를 보여줍니다. 시각적 완성도보다 조직 방식이 중요할 때 유용합니다.\n\n## 목업\n\n목업은 제품이 어떻게 보일 수 있는지를 보여줍니다. 모든 컨트롤을 동작시키지 않고도 실제 디자인 시스템, 콘텐츠, 타이포, 색, 간격을 사용할 수 있습니다.\n\n## 프로토타입\n\n프로토타입은 플로우를 직접 써보게 합니다. 상태 변화, 검증, 로딩, 오류, 성공, 키보드 동작, 반응형 상호작용을 보여줄 수 있습니다.\n\n## 다이어그램\n\n다이어그램은 부분이 어떻게 연결되는지 보여줍니다. 아키텍처, 시퀀스, 상태, 위계, 소유권, 흐름에 사용하세요.\n\n## 플랜\n\n플랜은 작업을 순서대로 정리합니다. 보통 마크다운으로 충분합니다. 시각 비교, 타임라인, 의존성, 임베드된 예시가 필요할 때 HTML이 도움이 됩니다.\n',
  },
  {
    slug: 'wireframes',
    path: '/docs/wireframes',
    navTitle: '와이어프레임',
    title: '와이어프레임',
    description: 'HTML 와이어프레임으로 레이아웃, 위계, 내비게이션, 반응형 구조를 비교하세요.',
    markdown: '# 와이어프레임\n\n> HTML 와이어프레임으로 레이아웃, 위계, 내비게이션, 반응형 구조를 비교하세요.\n\n와이어프레임은 완성된 디자인 없이 페이지나 플로우가 어떻게 조직되는지 보여줍니다. 에이전트는 같은 브리프를 여러 HTML 와이어프레임으로 만들어 데스크톱과 모바일 크기로 열어볼 수 있게 합니다.\n\n## 와이어프레임이 보여줄 수 있는 것\n\n* 콘텐츠 위계와 밀도\n* 내비게이션과 페이지 구조\n* 반응형 레이아웃\n* 같은 콘텐츠를 조직하는 여러 방식\n* 컨트롤의 순서와 그룹화\n\n## 구조에 집중하기\n\n현실적인 콘텐츠, 명확한 경계, 절제된 팔레트를 사용해 색·타이포·브랜딩을 논의하기 전에 레이아웃과 구조를 비교할 수 있게 하세요.\n',
  },
  {
    slug: 'prototypes',
    path: '/docs/prototypes',
    navTitle: '프로토타입',
    title: '프로토타입',
    description: '인터랙티브 HTML 프로토타입으로 제품 플로우, 동작, 상태를 시도해 보세요.',
    markdown: '# 프로토타입\n\n> 인터랙티브 HTML 프로토타입으로 제품 플로우, 동작, 상태를 시도해 보세요.\n\n프로토타입은 실제 제품을 만들거나 바꾸기 전에 앱의 일부를 써보게 합니다. 에이전트는 현실적인 콘텐츠와 플로우를 보여줄 만큼의 동작을 담은 독립 HTML 프로토타입을 만들 수 있습니다.\n\n## 프로토타입이 보여줄 수 있는 것\n\n* 다단계 플로우\n* 로딩, 빈 상태, 오류, 성공 상태\n* 검증과 피드백\n* 키보드와 모바일 동작\n* 뷰 또는 모드 간 전환\n\n## 전체 제품일 필요는 없습니다\n\n유용한 프로토타입은 중요한 한 경로와 그 주변 상태를 다룰 수 있습니다. 백엔드, 모든 화면, 모든 엣지 케이스가 필요하지 않습니다. 어떤 부분이 동작하고 어떤 부분이 시각적인지만 명확하면 됩니다.\n',
  },
  {
    slug: 'diagrams',
    path: '/docs/diagrams',
    navTitle: '다이어그램',
    title: '다이어그램',
    description: 'HTML 다이어그램으로 아키텍처, 시퀀스, 상태, 위계, 흐름을 설명하세요.',
    markdown: '# 다이어그램\n\n> HTML 다이어그램으로 아키텍처, 시퀀스, 상태, 위계, 흐름을 설명하세요.\n\n다이어그램은 관계를 더 쉽게 보이게 합니다. HTML 다이어그램은 시퀀스를 애니메이션으로 보여주거나, 세부 정보를 드러내거나, 큰 시스템 속 경로를 선택하게 할 수도 있습니다.\n\n## 흔한 다이어그램 유형\n\n* 순서와 인계가 중요할 때 **시퀀스**를 사용하세요.\n* 전환과 조건이 중요할 때 **상태 모델**을 사용하세요.\n* 소유권이나 중첩이 중요할 때 **위계**를 사용하세요.\n* 물질이나 정보가 시스템을 통과할 때 **흐름**을 사용하세요.\n* 경계와 의존성이 중요할 때 **아키텍처 뷰**를 사용하세요.\n* 시간에 따른 변화가 중요할 때 **타임라인**을 사용하세요.\n\n모든 주제를 일반적인 왼쪽에서 오른쪽 프로세스로 억지로 맞추지 마세요.\n\n## 읽기 쉽게 유지하기\n\n작은 세트의 도형, 선, 색, 라벨을 일관되게 사용하세요. 밀도 높은 설명은 다이어그램 밖에 두고, 실제 보는 크기에서도 라벨과 경로가 읽히는지 확인하세요.\n',
  },
  {
    slug: 'decks',
    path: '/docs/decks',
    navTitle: '덱',
    title: '덱',
    description: '상호작용, 애니메이션, 키보드 내비게이션, 쉬운 공유가 가능한 브라우저 네이티브 슬라이드 덱을 만드세요.',
    markdown: '# 덱\n\n> 상호작용, 애니메이션, 키보드 내비게이션, 쉬운 공유가 가능한 브라우저 네이티브 슬라이드 덱을 만드세요.\n\n브라우저 네이티브 덱은 HTML로 만든 슬라이드 프레젠테이션입니다. 상호작용, 애니메이션, 라이브 예시, 링크를 담으면서도 열고 공유하기 쉽습니다.\n\n## HTML이 더하는 것\n\nHTML 덱은 입력에 반응하고, 시퀀스를 드러내고, 작은 데모를 실행하거나, 라이브 데이터를 보여줄 수 있습니다. 다른 웹 아티팩트와 같은 도구로 검사하고 수정할 수도 있습니다.\n\n## 프레젠테이션으로 쓸 수 있게\n\n덱은 여전히 읽기 쉬운 슬라이드, 안정적인 화살표 키 내비게이션, 보이는 진행 표시, 화면에 맞는 레이아웃이 필요합니다. 모든 슬라이드를 반응형 웹페이지처럼 다루기보다 고정 16:9 스테이지가 보통 더 단순합니다.\n\n## 도움이 될 때만 모션 사용\n\n애니메이션은 순서, 비교, 변화에 유용합니다. 슬라이드를 이해하는 데 필수가 되어서는 안 되며, 덱은 reduced-motion 설정을 존중해야 합니다.\n',
  },
  {
    slug: 'plans',
    path: '/docs/plans',
    navTitle: '플랜',
    title: '플랜',
    description: '타임라인, 비교, 의존성, 임베드된 예시가 작업을 설명하는 데 도움이 될 때 HTML 플랜을 사용하세요.',
    markdown: '# 플랜\n\n> 타임라인, 비교, 의존성, 임베드된 예시가 작업을 설명하는 데 도움이 될 때 HTML 플랜을 사용하세요.\n\n플랜은 보통 마크다운으로 읽고 편집하기 가장 쉽습니다. 선형 문서에 자연스럽게 맞지 않는 시각 정보가 있을 때 HTML이 도움이 됩니다.\n\n## HTML이 도움이 될 때\n\nHTML 플랜에는 다음을 담을 수 있습니다.\n\n* 나란히 비교하는 대안\n* 겹치는 작업이 있는 타임라인\n* 의존성\n* 다이어그램이나 동작 예시\n* 단계에 붙은 펼칠 수 있는 세부 정보\n\n플랜이 단지 작업 나열이라면 단순하게 마크다운을 사용하세요.\n\n## 원본에 연결된 상태 유지\n\n플랜은 주어진 요구사항, 범위, 의존성, 점검 항목, 미해결 질문을 보존해야 합니다. 플랜이 완성된 것처럼 보이려고 빠진 제품·기술 세부 사항을 지어내서는 안 됩니다.\n',
  },
]

export const PAGE_BY_SLUG: Record<string, PageMeta> = Object.fromEntries(
  PAGES.map((page) => [page.slug, page]),
)

export const PAGE_BY_PATH: Record<string, PageMeta> = Object.fromEntries(
  PAGES.map((page) => [page.path, page]),
)

export const TOC: Record<string, TocItem[]> = {
  'guide': [{ id: 'browse-examples', title: '예시 둘러보기' }],
  'skill-exhibit': [{ id: 'choose-question', title: '먼저 질문을 고르세요' }, { id: 'skill-relay', title: '여섯 가지 스킬 릴레이' }],
  'why-html': [{ id: 'what-html-adds', title: 'HTML이 더하는 것' }, { id: 'keep-markdown-when-it-is-enough', title: '마크다운으로 충분할 때' }],
  'designing-artifacts': [{ id: 'what-the-skill-covers', title: '스킬이 다루는 것' }, { id: 'copy-the-canonical-skill', title: '정식 스킬 복사하기' }],
  'choosing-fidelity': [{ id: 'wireframe', title: '와이어프레임' }, { id: 'mockup', title: '목업' }, { id: 'prototype', title: '프로토타입' }, { id: 'diagram', title: '다이어그램' }, { id: 'plan', title: '플랜' }],
  'wireframes': [{ id: 'what-a-wireframe-can-show', title: '와이어프레임이 보여줄 수 있는 것' }, { id: 'keep-the-focus-on-structure', title: '구조에 집중하기' }],
  'prototypes': [{ id: 'what-a-prototype-can-show', title: '프로토타입이 보여줄 수 있는 것' }, { id: 'it-does-not-need-to-be-the-whole-product', title: '전체 제품일 필요는 없습니다' }],
  'diagrams': [{ id: 'common-diagram-types', title: '흔한 다이어그램 유형' }, { id: 'keep-it-readable', title: '읽기 쉽게 유지하기' }],
  'decks': [{ id: 'what-html-adds', title: 'HTML이 더하는 것' }, { id: 'keep-it-usable-as-a-presentation', title: '프레젠테이션으로 쓸 수 있게' }, { id: 'use-motion-when-it-helps', title: '도움이 될 때만 모션 사용' }],
  'plans': [{ id: 'when-html-helps', title: 'HTML이 도움이 될 때' }, { id: 'keep-it-tied-to-the-source', title: '원본에 연결된 상태 유지' }],
}

export const PREV_NEXT: Record<string, { prev?: PageLink; next?: PageLink }> = {
  'guide': { next: { href: '/docs/skill-exhibit', title: '스킬 활용 사례', description: '질문에서 시작해 적합한 Effective HTML 스킬과 다음 작업을 고르는 여섯 가지 사례입니다.' } },
  'skill-exhibit': { prev: { href: '/docs', title: 'Effective HTML 가이드', description: '에이전트로 만드는 와이어프레임, 목업, 프로토타입, 다이어그램, 덱 및 기타 HTML 아티팩트를 위한 짧은 가이드.' }, next: { href: '/docs/why-html', title: '왜 HTML인가?', description: '아이디어를 보거나 직접 써보는 것이 읽기보다 명확할 때 HTML 아티팩트를 사용하세요.' } },
  'why-html': { prev: { href: '/docs/skill-exhibit', title: '스킬 활용 사례', description: '질문에서 시작해 적합한 Effective HTML 스킬과 다음 작업을 고르는 여섯 가지 사례입니다.' }, next: { href: '/docs/designing-artifacts', title: '아티팩트 디자인하기', description: 'design-artifact 스킬로 팔레트, 타이포, 레이아웃, 테마, 시각적 레지스터를 의도적으로 결정하세요.' } },
  'designing-artifacts': { prev: { href: '/docs/why-html', title: '왜 HTML인가?', description: '아이디어를 보거나 직접 써보는 것이 읽기보다 명확할 때 HTML 아티팩트를 사용하세요.' }, next: { href: '/docs/choosing-fidelity', title: '충실도 선택하기', description: '와이어프레임, 목업, 프로토타입, 다이어그램, 플랜의 차이를 이해하세요.' } },
  'choosing-fidelity': { prev: { href: '/docs/designing-artifacts', title: '아티팩트 디자인하기', description: 'design-artifact 스킬로 팔레트, 타이포, 레이아웃, 테마, 시각적 레지스터를 의도적으로 결정하세요.' }, next: { href: '/docs/wireframes', title: '와이어프레임', description: 'HTML 와이어프레임으로 레이아웃, 위계, 내비게이션, 반응형 구조를 비교하세요.' } },
  'wireframes': { prev: { href: '/docs/choosing-fidelity', title: '충실도 선택하기', description: '와이어프레임, 목업, 프로토타입, 다이어그램, 플랜의 차이를 이해하세요.' }, next: { href: '/docs/prototypes', title: '프로토타입', description: '인터랙티브 HTML 프로토타입으로 제품 플로우, 동작, 상태를 시도해 보세요.' } },
  'prototypes': { prev: { href: '/docs/wireframes', title: '와이어프레임', description: 'HTML 와이어프레임으로 레이아웃, 위계, 내비게이션, 반응형 구조를 비교하세요.' }, next: { href: '/docs/diagrams', title: '다이어그램', description: 'HTML 다이어그램으로 아키텍처, 시퀀스, 상태, 위계, 흐름을 설명하세요.' } },
  'diagrams': { prev: { href: '/docs/prototypes', title: '프로토타입', description: '인터랙티브 HTML 프로토타입으로 제품 플로우, 동작, 상태를 시도해 보세요.' }, next: { href: '/docs/decks', title: '덱', description: '상호작용, 애니메이션, 키보드 내비게이션, 쉬운 공유가 가능한 브라우저 네이티브 슬라이드 덱을 만드세요.' } },
  'decks': { prev: { href: '/docs/diagrams', title: '다이어그램', description: 'HTML 다이어그램으로 아키텍처, 시퀀스, 상태, 위계, 흐름을 설명하세요.' }, next: { href: '/docs/plans', title: '플랜', description: '타임라인, 비교, 의존성, 임베드된 예시가 작업을 설명하는 데 도움이 될 때 HTML 플랜을 사용하세요.' } },
  'plans': { prev: { href: '/docs/decks', title: '덱', description: '상호작용, 애니메이션, 키보드 내비게이션, 쉬운 공유가 가능한 브라우저 네이티브 슬라이드 덱을 만드세요.' } },
}

export const NAV_LINKS: { href: string; label: string; external?: boolean }[] = [
  { href: 'https://www.effectivehtml.com/catalog', label: '카탈로그', external: true },
  { href: 'https://github.com/plannotator/effective-html', label: 'GitHub', external: true },
]
