# DESIGN.md — Effective HTML 가이드 디자인 명세

> https://www.effectivehtml.com/docs (Fumadocs 기반 Next.js 문서 사이트)를 React + Vite 정적 사이트로 재구현하기 위한 디자인 명세.
> 이 문서의 모든 수치는 원본 사이트의 실제 CSS에서 측정한 값이며, 임의로 추가하거나 변경하지 않습니다.

---

## 1. 개요 / 디자인 톤

**잉크와 웜 페이퍼 에디토리얼(ink & warm paper editorial)** 톤.

- 깊은 먹색(`--ink:#141413`) 위에 크림색 종이 팔레트(`--paper` 계열)가 얹히는 인쇄물 감성.
- 강조색은 코발트(`--cobalt:#1649d8`) 하나로 절제하되, 라이트↔다크 전환 시 primary가 cobalt↔lilac으로 스왑됩니다.
- 장식은 최소화하고, 미세한 도트 텍스처·얇은 룰(rule)·작은 라벨 텍스트(`--text-caption`/`--text-label`)로 편집 디자인의 밀도를 만듭니다.
- 라운딩은 작게(0.35rem~0.55rem), 모션은 짧고 표현력 있게(`.16s`~`.42s`, 커스텀 베지어).

디자인 원칙:

1. **측정값 불변** — 이 문서에 없는 색·간격·폰트 크기를 새로 만들지 않습니다.
2. **토큰 단일 출처** — 모든 컴포넌트는 CSS 커스텀 프로퍼티만 참조하며 하드코딩을 금지합니다.
3. **한국어 우선, 고유명사 원문 유지** — 본문은 한국어, 고유명사(Effective HTML, GitHub, Anthropic 등)와 `SKILL.md` 코드블록은 원문을 유지합니다.

### 문서 페이지 (10개)

| 경로 | 한국어 제목 |
|---|---|
| `/docs` | Effective HTML 가이드 |
| `/docs/skill-exhibit` | 스킬 활용 사례 |
| `/docs/why-html` | 왜 HTML인가? |
| `/docs/designing-artifacts` | 아티팩트 디자인하기 |
| `/docs/choosing-fidelity` | 충실도 선택하기 |
| `/docs/wireframes` | 와이어프레임 |
| `/docs/prototypes` | 프로토타입 |
| `/docs/diagrams` | 다이어그램 |
| `/docs/decks` | 덱 |
| `/docs/plans` | 플랜 |

---

## 2. 컬러 토큰

### 2.1 브랜드 토큰 (`:root`)

| 토큰 | 값 |
|---|---|
| `--ink` | `#141413` |
| `--ink-soft` | `#2a2926` |
| `--paper` | `#f3e6d2` |
| `--paper-bright` | `#fff9ef` |
| `--paper-deep` | `#eadcc7` |
| `--paper-muted` | `#ded1be` |
| `--paper-edge` | `#d6b995` |
| `--cobalt` | `#1649d8` |
| `--lilac` | `#a884e8` |
| `--green` | `#1bae61` |
| `--pink` | `#f09aa8` |
| `--coral` | `#e8744f` |
| `--copy-on-paper` | `#575149` |
| `--copy-on-ink` | `#cfc2b2` |
| `--strong-on-ink` | `#d9cdbd` |
| `--muted` | `#6e675e` |
| `--muted-on-ink` | `#a99c8c` |
| `--line` | `#b9ae9d` |
| `--rule-on-ink` | `#f3e6d238` |
| `--rule-on-paper` | `#1414133d` |
| `--rule-on-paper-strong` | `#1414136b` |
| `--shadow` | `#00000057` |
| `--content-max` | `90rem` |

### 2.2 Fumadocs 매핑 — 라이트

| 토큰 | 값 |
|---|---|
| `--color-fd-background` | `var(--paper-bright)` |
| `--color-fd-foreground` | `var(--ink)` |
| `--color-fd-muted` | `#eee2d0` |
| `--color-fd-muted-foreground` | `#625b52` |
| `--color-fd-popover` | `var(--paper-bright)` |
| `--color-fd-popover-foreground` | `var(--ink)` |
| `--color-fd-card` | `var(--paper)` |
| `--color-fd-card-foreground` | `var(--ink)` |
| `--color-fd-primary` | `var(--cobalt)` |
| `--color-fd-primary-foreground` | `var(--paper-bright)` |
| `--color-fd-secondary` | `#eee2d0` |
| `--color-fd-secondary-foreground` | `var(--ink)` |
| `--color-fd-accent` | `#e2d3bd` |
| `--color-fd-accent-foreground` | `var(--ink)` |
| `--color-fd-ring` | `var(--cobalt)` |
| `--color-fd-border` | `#1414132e` |
| `--color-fd-overlay` | `#14141375` |

### 2.3 Fumadocs 매핑 — 다크 (`.dark`)

| 토큰 | 값 |
|---|---|
| `--color-fd-background` | `var(--ink)` |
| `--color-fd-foreground` | `var(--paper-bright)` |
| `--color-fd-muted` | `var(--ink-soft)` |
| `--color-fd-muted-foreground` | `#c9bcaa` |
| `--color-fd-popover` | `var(--ink-soft)` |
| `--color-fd-popover-foreground` | `var(--paper-bright)` |
| `--color-fd-card` | `#211f1d` |
| `--color-fd-card-foreground` | `var(--paper-bright)` |
| `--color-fd-border` | `#f3e6d233` |
| `--color-fd-primary` | `var(--lilac)` |
| `--color-fd-primary-foreground` | `var(--ink)` |
| `--color-fd-secondary` | `#2f2d29` |
| `--color-fd-secondary-foreground` | `var(--paper-bright)` |
| `--color-fd-accent` | `#393631` |
| `--color-fd-accent-foreground` | `var(--paper-bright)` |
| `--color-fd-ring` | `var(--lilac)` |

다크 전용 추가 규칙:

- `.dark #nd-sidebar`의 도트 텍스처 색: `#f3e6d217`
- `.dark .prose` 링크: `--tw-prose-links: var(--lilac)`

핵심 전환 규칙: 라이트에서 cobalt인 요소(primary, ring, 링크)는 다크에서 lilac으로 바뀝니다. 배경은 paper-bright↔ink로 반전됩니다.

---

## 3. 타이포그래피

### 3.1 폰트 패밀리

| 용도 | 패밀리 | 비고 |
|---|---|---|
| 디스플레이 | `"Inter Tight Variable"` | 가중치 축 100–900, 실사용 720 / 760 / 780 / 790 |
| 본문 | `"Inter Variable"` | prose 전체 |
| 한글 폴백 | `Pretendard Variable` | 라틴 폰트 뒤에 체인 |

폴백 체인 예시:

```css
font-family: "Inter Tight Variable", "Pretendard Variable", sans-serif;  /* 디스플레이 */
font-family: "Inter Variable", "Pretendard Variable", sans-serif;        /* 본문 */
```

### 3.2 스케일과 세부 수치

- 워드마크: 가중치 **760**, `letter-spacing: -.025em`
- `#nd-docs-layout h1/h2/h3`: `letter-spacing: -.035em`
- 아티클 h1: `1.75em` (28px), `font-semibold`
- prose 본문: `1rem` / 라인하이트 `1.75rem`, `max-width: 72ch`
- prose 링크: cobalt, 밑줄 두께 `1.5px`, `text-underline-offset: 3.5px`, 가중치 500 (다크에서는 lilac)
- prose `strong`: 디스플레이 폰트로 전환하며 가중치 **500** (본문 폰트에서 700이 아님)
- 텍스트 크기 토큰: `--text-caption:.68rem` / `--text-label-compact:.76rem` / `--text-label:.84rem`
- 라운딩 토큰: `--radius-sheet:.35rem` / `--radius-control:.38rem` / `--radius-panel:.5rem` / `--radius-frame:.55rem`

### 3.3 한글 폴백 원칙

1. **폰트 추가만 하고 수치는 유지** — `Pretendard Variable`을 폴백 체인에 추가하는 것 외에 원본 크기·행간·두께를 바꾸지 않습니다.
2. **한글 자간 완화** — 라틴용 음수 자간(`-.035em`, `-.025em`)은 한글 렌더링에서 과도하게 조밀해 보이므로, 한국어 텍스트가 포함된 헤딩/워드마크에서는 `letter-spacing`을 완화합니다(0에 가깝게 조정하되, 라틴 전용 요소는 측정값 유지).
3. **가중치 대응** — Inter Tight의 720/760/780/790은 Pretendard Variable의 가변 가중치에서 가장 가까운 값으로 매핑합니다.
4. **혼용 시 기준선** — 한영 혼용 행에서 폰트가 분기되어도 `line-height`는 원본 값(`1.75rem`)을 그대로 사용합니다.

---

## 4. 레이아웃 그리드

### 4.1 5컬럼 CSS 그리드

명명된 그리드 영역:

```
┌──────────┬──────────┬──────────────────┬──────────┬──────────┐
│ sidebar  │ sidebar  │ header           │ toc      │ toc      │
│ sidebar  │ sidebar  │ toc-popover      │ toc      │ toc      │
│ sidebar  │ sidebar  │ main             │ toc      │ toc      │
└──────────┴──────────┴──────────────────┴──────────┴──────────┘
```

```css
grid-template-areas:
  "sidebar sidebar header header toc toc" /* 개념도 — 실측은 아래와 동일 구조 */
  "sidebar sidebar toc-popover toc toc"
  "sidebar sidebar main toc toc";
grid-template-columns:
  minmax(min-content, 1fr)
  var(--fd-sidebar-col)
  minmax(0, calc(97rem - sidebar - toc))
  var(--fd-toc-width)
  minmax(min-content, 1fr);
```

### 4.2 컬럼 폭

- 사이드바: **268px** (≥768px, md)
- TOC: **268px** (≥1280px, xl)
- 브레이크포인트 미만에서는 각 폭 토큰이 **0px**로 줄어듭니다. 조건부 렌더링을 하지 않고 항상 DOM에 존재합니다.
- 아티클: `max-width: 900px`, `margin-inline: auto`
- 아티클 패딩: `px-4 py-6` → md: `px-6 pt-8` → xl: `px-8 pt-14`
- `--content-max: 90rem`

### 4.3 스티키 오프셋

- 모바일 헤더 높이: **3.5rem** (md 미만)
- TOC 팝오버 바 높이: **2.75rem** (xl 미만) — 사이트 오버라이드 값으로, Fumadocs 기본 2.5rem을 덮어씁니다.
- 스티키 행: `--fd-docs-row-1` = 배너 0, `row-2` = row-1 + 헤더, `row-3` = row-2 + 팝오버

```css
--effective-docs-sticky-offset:
  calc(var(--fd-header-height, 3.5rem) + var(--fd-toc-popover-height, 2.5rem) + 1rem);
```

---

## 5. 컴포넌트별 스펙

### 5.1 공통: 액센트 팔레트

`FidelityWorkbench` / `GuideChapterEvidence`의 탭·챕터별 액센트:

| 키 | 색 |
|---|---|
| wireframe | `#1649d8` |
| mockup | `#a884e8` |
| prototype | `#1bae61` |
| diagram | `#e8744f` |
| plan | `#f09aa8` |

why-html의 medium comparison은 `--lilac`을 사용합니다.

### 5.2 GuideSources

- 5개 출처 카드, 2열 그리드
- 카드 배경/보더는 `--color-fd-card` / `--color-fd-border` 계열
- 카탈로그 별 아이콘: `--green`, 크기 `--text-label`

### 5.3 GuideChapterEvidence

- 페이지별 액센트: wireframes `#1649d8`, prototypes `#1bae61`, diagrams `#e8744f`, plans `#f09aa8`
- why-html 특수형 `mediumComparison`: Markdown 명세 vs HTML 스펙시멘 2열 비교, 액센트 `--lilac`
- prototypes는 iframe으로 실제 프로토타입 HTML을 임베드
- 카드 라운딩 `--radius-panel`, 내부 패널은 `--radius-frame` 계열 사용

### 5.4 FidelityWorkbench

- 5탭 인터랙티브 워크벤치 (wireframe / mockup / prototype / diagram / plan)
- 탭별 액센트는 5.1 표를 그대로 사용
- 키보드 내비게이션: **roving tabindex** (활성 탭만 `tabIndex=0`, 화살표 키로 이동)
- 탭 전환 모션은 `--duration-fold:.42s` + `--ease-fold:cubic-bezier(.645,.045,.355,1)`

### 5.5 GuideHandoff

- 챕터 하단의 "핸드오프" 안내 블록
- `--color-fd-secondary` 배경 계열, `--radius-panel` 라운딩
- 라벨 텍스트는 `--text-label-compact` + `--color-fd-muted-foreground`

### 5.6 GuideNext

- 다음 페이지 카드 링크
- 카드 배경 `--color-fd-card`, 호버 시 `--color-fd-accent`로 전이, `--duration-fast:.16s`
- 라운딩 `--radius-panel`

### 5.7 CodeBlock

- shiki github-light / github-dark 듀얼 테마. 토큰 스팬이 `--shiki-light` / `--shiki-dark` 커스텀 프로퍼티를 인라인으로 들고, 현재 테마에 따라 `color: var(--shiki-*)`가 해석됩니다.
- 타이틀 바: 높이 **h-9.5 (2.375rem)**, 언어 아이콘 + `figcaption` + 클립보드 복사 버튼
- 스크롤 영역: `max-height: 600px`, `padding-block: 0.875rem`(py-3.5)
- `.line` 패딩 좌우 **1rem**, 빈 줄 높이 `1lh`

토큰 색상 (light / dark):

| 토큰 종류 | 라이트 | 다크 |
|---|---|---|
| plain | `#24292E` | `#E1E4E8` |
| blue | `#005CC5` | `#79B8FF` |
| orange | `#E36209` | `#FFAB70` |

- 볼드/이탤릭: `--shiki-*-font-weight` / `--shiki-*-font-style` 커스텀 프로퍼티로 전달됩니다. **원본 CSS는 `font-style`만 소비하고 `font-weight`는 소비하지 않습니다 — 이 동작을 그대로 유지합니다.**

### 5.8 사이드바 도트 텍스처 / 워드마크 마크

도트 텍스처:

```css
background-image: radial-gradient(circle, #14141314 .5px, #0000 .65px);
background-size: 5px 5px;
/* .dark 에서는 첫 번째 색을 #f3e6d217 로 교체 */
```

워드마크 마크 — **0.9rem 정사각형**, 서로 겹치지 않는 3개의 linear-gradient:

- cobalt 바: 좌측, 42% × 100%
- green 사각형: 우상단, 42% × 42%
- pink 사각형: 우하단, 42% × 42%

### 5.9 SkillExhibit

- 범용 `html`과 `design-artifact`, 목적별 전문 스킬을 하나의 선택 흐름과 2열 사례 카드로 전시한다.
- 카드는 `--color-fd-card`와 `--color-fd-border`를 사용하고, 전문 스킬별 밝은 액센트는 상단 레일에만 쓴다.
- 카드 라벨과 예시 요청 라벨은 본문 대비를 보장하기 위해 `--color-fd-primary`를 사용한다. 라이트에서는 cobalt, 다크에서는 lilac으로 전환된다.
- 카드 그리드는 기존 small 브레이크포인트인 **640px** 미만에서 한 열로 전환한다. 새 반응형 분기점을 만들지 않는다.

---

## 6. 반응형 브레이크포인트

| 브레이크포인트 | 의미 | 변화 |
|---|---|---|
| **768px** (md) | 사이드바 등장 | 미만: 사이드바 폭 0px + 모바일 헤더(3.5rem) 표시. 이상: 사이드바 268px, 모바일 헤더 숨김 |
| **1280px** (xl) | TOC 등장 | 미만: TOC 폭 0px + TOC 팝오버 바(2.75rem) 표시. 이상: TOC 268px, 팝오버 숨김 |
| **640px** (sm) | 소형 화면 조정 | 카드 그리드(GuideSources 등)가 2열 → 1열로 전환 |

원칙: 폭 토큰(`--fd-sidebar-col`, `--fd-toc-width`)을 0px로 줄이는 방식이며, 컴포넌트를 조건부 렌더링으로 DOM에서 제거하지 않습니다.

---

## 7. 모션 / 접근성 원칙

### 7.1 모션 토큰

| 토큰 | 값 |
|---|---|
| `--duration-fast` | `.16s` |
| `--duration-fold` | `.42s` |
| `--ease-out-expressive` | `cubic-bezier(.16,1,.3,1)` |
| `--ease-fold` | `cubic-bezier(.645,.045,.355,1)` |

- 일반 호버/포커스 전이: `--duration-fast` + `--ease-out-expressive`
- 탭·폴딩 전이(FidelityWorkbench 등): `--duration-fold` + `--ease-fold`

### 7.2 접근성

1. **`prefers-reduced-motion` 존중** — 미디어 쿼리 `prefers-reduced-motion: reduce`에서 모든 전이/애니메이션의 duration을 사실상 0으로 줄입니다.
2. **focus-visible 링** — 키보드 포커스 시 `--color-fd-ring`(라이트 cobalt / 다크 lilac) 색의 아웃라인 링을 표시합니다. 마우스 클릭에는 표시하지 않습니다(`:focus-visible`만).
3. **roving tabindex** — 탭형 컴포넌트(FidelityWorkbench)는 활성 탭만 탭 순서에 두고 화살표 키로 이동합니다.
4. **명도 대비** — 본문은 `--copy-on-paper` / `--copy-on-ink` 쌍을 배경에 맞게 사용하고, 보조 텍스트는 `--muted` / `--muted-on-ink`를 사용해 대비를 유지합니다.
5. **시맨틱 구조 유지** — 사이드바 nav, 아티클 h1→h2 순서, TOC 앵커 링크 등 원본의 헤딩 계층과 랜드마크를 그대로 유지합니다.

---

## 8. 원본과의 의도적 차이

원본 대조 검증(9개 경로 전수)에서 확인된 URL 차이 2건입니다. 콘텐츠·레이아웃 차이가 아니라 **배포 구조에서 비롯된 필연적 차이**이며, 원본을 그대로 따르면 오히려 깨집니다.

### 8.1 카탈로그 링크는 절대 URL

| | 값 |
|---|---|
| 원본 | `/catalog` (사이트 내부 이동) |
| 구현 | `https://www.effectivehtml.com/catalog` + `target="_blank"` |

`/catalog`는 이번 재구현 범위(문서 9개 경로)에 포함되지 않아 앱에 라우트가 없습니다. 상대경로로 두면 404가 나므로 원본 사이트로 나가는 절대 URL을 사용합니다. `NAV_LINKS`의 GitHub 링크도 같은 이유로 절대 URL입니다.

### 8.2 예시 자산 경로에 `/assets` 접두사

| | 값 |
|---|---|
| 원본 | `/examples/release-readiness/wireframe.html` |
| 구현 | `/assets/examples/release-readiness/wireframe.html` |

정적 자산을 `public/assets/` 아래에 두는 Vite 컨벤션을 따르므로 서빙 경로에 `/assets` 접두사가 붙습니다. 가리키는 파일 자체는 원본과 동일합니다(`wireframe.html`, `prototype.html`, `wireframe-desktop.png`, `prototype-desktop.png`).

### 8.3 라우팅은 HashRouter

| | 값 |
|---|---|
| 원본 | `/docs/wireframes` (Next.js 서버 라우팅) |
| 구현 | `/#/docs/wireframes` (`HashRouter`) |

서버 설정 없이 어떤 정적 호스팅에도 그대로 올릴 수 있도록 해시 라우팅을 사용합니다. history fallback(모든 경로 → `index.html`)이 필요 없고, `/preview`의 iframe도 `#` 경로로 진입합니다.

섹션 앵커는 `#/docs/plans#when-html-helps` 형태로 **경로 뒤에 한 번 더** 붙습니다. `HashRouter`가 `#` 뒤 전체를 라우트로 읽기 때문에, `href="#id"`를 그대로 두면 클릭 시 경로가 날아갑니다. `DocsShell`이 레이아웃 루트에서 위임 클릭 핸들러로 이 링크들을 가로채 `경로#id`로 이동시키고, `location.hash` 변화에 따라 스크롤합니다(`prefers-reduced-motion` 존중). 각 페이지의 `href="#id"` 마크업 자체는 원본 그대로 유지됩니다.

> 이 세 건 외에는 섹션 구성·문단·불릿·TOC·prev/next·예시 임베드가 9개 경로 모두 원본과 1:1 대응합니다.
