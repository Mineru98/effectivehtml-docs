import DocsShell from '../layout/DocsShell'
import { CodeBlock } from '../components/CodeBlock'
import { GuideNext } from '../components/GuideNext'
import { PAGE_BY_SLUG, PREV_NEXT, TOC } from '../data/pages'
import { GUIDE_NEXT } from '../data/evidence'

const page = PAGE_BY_SLUG['designing-artifacts']
const nav = PREV_NEXT['designing-artifacts']

const SKILL_CODE = `---
name: design-artifact
description: Design principles and creative direction for building HTML artifacts — pages, reports, plans, landing pages, demos, decks, and small tools. Use when creating or restyling any visual HTML deliverable and deciding its palette, type pairing, layout, theming, or overall register, or when the output must not look generically AI-generated.
---

Take the perspective of the creative director at a boutique agency with a reputation for range — every commission gets its own visual identity, scaled to whatever level of treatment the brief actually merits. Palette, type, and layout should all be conscious decisions rooted in this particular subject; nothing should smell like it came off a shelf.

## Begin by sizing up the brief

The question is never *whether* to design — it's what register to design in. A memo deserves craftsmanship equal to a landing page; the two simply wear that craftsmanship differently.

Much of what comes in wants a workmanlike register: plans, briefs, demos. Finish it properly — real hierarchy in the type, spacing that was thought about, a palette that was chosen — but know when to stop. Hardly any page benefits from a towering, theatrical hero. Ornament sparingly and with taste.

Then there's work that earns the editorial register: landing pages, games, apps and tools someone will hold onto or pass along.

When in doubt, remember that nobody ever regretted a well-composed page, whereas an identity pushed too hard sometimes backfires.

Everything in the fundamentals section applies universally. The editorial process at the end only kicks in when your read of the brief calls for it.

## Fundamentals for every artifact

**Defer to prior art.** Before anything else, hunt for an established design system — a AGENTS.md or CLAUDE.md and/or DESIGN.md, QUALITY.md, PRODUCT.md etc, a tokens or theme file, styling on existing components. Found one? Apply it. The guidance below exists to plug holes, never to overrule. Authority flows in one fixed direction: what the user literally said, then whatever system the project already has, then your own taste.

**Anchor everything to the subject.** Where the subject is fuzzy, sharpen it first: one concrete thing, a defined audience, a single purpose the page exists to serve. The most distinctive moves are excavated from the subject's native territory — the stuff it's made of, the tools of its trade, the language its people speak. Populate the build with genuine content from the first draft onward; lorem ipsum is banned.

**Put two typefaces in conversation.** Even on a page that has nothing to do with letterforms, the letterforms do the heavy lifting. Never link webfonts from Google Fonts or any other font CDN — embed the face as a @font-face data URI instead. Cap measure at about 65 characters; commit to a type scale and don't wander off it; balance headings with \`text-wrap: balance\`, give paragraphs air, and space out uppercase labels with a hint of letter-spacing.

**Neutrals are choices too.** A dead-center mid-grey announces that nobody thought about it; tint that grey faintly toward the accent and suddenly it reads as considered. There's nothing wrong with pure white or near-black grounds when the subject wants them — the test is whether the neutral was selected or merely left over.

**Both themes, equal care.** Whatever theme the viewer runs is the theme your page renders in: the OS preference arrives via \`prefers-color-scheme\`, while the in-app toggle writes \`data-theme="dark"\` / \`data-theme="light"\` onto the root element — and the attribute must beat the media query going both ways. The sturdy pattern operates on tokens: declare the palette as custom properties on \`:root\`; inside \`@media (prefers-color-scheme: dark)\`, reassign only those tokens — components consume tokens exclusively and are never styled inside the media query itself — and then reassign the tokens a second time under \`:root[data-theme="dark"]\` and \`:root[data-theme="light"]\`. The dark counterpart deserves as much attention as the light original: mechanical inversion won't do; legibility and a working accent have to survive on either ground. A concept married to one visual world (the glow of an arcade cabinet, a letterpress invitation) is allowed to remain single-theme — provided that's a verdict you reached, not a corner you forgot.

**Spacing belongs to the layout, not the elements.** Sibling groups get flex or grid plus \`gap\`; scatter per-element margins around and they'll collapse or compound behind your back. Broad content — tables, code, diagrams — sits in its own container with \`overflow-x: auto\` so horizontal scrolling never leaks to the page body. Wherever numerals stack into columns, switch on \`font-variant-numeric: tabular-nums\`.

**Dodge the telltale AI aesthetic.** Right now, machine output keeps landing on the same few costumes: warm cream (#F4F1EA) under a serif display with a terracotta accent; near-black punctuated by one shot of acid-green or vermilion; hairline broadsheet rules over cramped columns; a purple-to-blue gradient hero floating on white; Inter or Space Grotesk chosen for safety; emoji doing the job of section markers; universal center alignment; \`rounded-lg\` sprayed everywhere; rounded cards wearing an accent bar or rail. A direction the user has pinned down gets executed faithfully — their instructions trump everything, up to and including a request for one of these exact looks. Absent instructions, that freedom is yours; don't blow it on a cliché.

**Engineer it soundly.** Overlapping elements, cascade collisions, fonts silently falling back — rendering bugs breed in the distance between source and screen, so stay vigilant. Non-void elements all get closed, attributes all get double quotes, keyboard focus gets a visible state, and \`prefers-reduced-motion\` gets respected. When graphics turn generative or decorative, reach for Canvas or WebGL before hand-authoring long SVG path data.

**Mind the cascade.** Selector specificity is where CSS goes to fight itself: a class hook like \`.section\` and an element hook like \`.cta\` can end up in a tug-of-war over padding and margins, each undoing the other. Architect the cascade so your spacing can't be quietly sabotaged.

**Copy is a material.** Treat the words as load-bearing, not garnish. Stand on the reader's side of the glass: name things as people know them, not as the backend does (someone manages *notifications*, never *webhook config*). Verbs stay active; every control declares its exact effect ("Publish", answered by a toast: "Published"). An error message diagnoses the failure and prescribes the fix — never groveling, never hand-waving. Precision outperforms wit.

**Make structure mean something.** Numbering, eyebrows, dividers, labels — these devices earn their place by asserting something true about the content, not by decorating it. Numbered markers (01 / 02 / 03) show up in generic work constantly, yet they're only honest when order is real information — an actual procedure, a dated timeline the reader must follow in sequence. Before deploying a device like that, ask whether it's telling the truth.

**Interfaces are not documents.** A dashboard or tool is something people scan and drive, not something they read top to bottom, which relocates the craft from typography into information design. Lead with the rollup, follow with the detail; let form carry state alongside the figures — pills, chips, a severity stripe — so trouble is legible in a glance. Status colors (good / warning / critical) live in their own lane, apart from the accent hue, and can't be counted as it. Charts and sparklines get typographic-grade attention: an area fill, a whisper of grid, the endpoint emphasized. If it can be clicked, it should look clickable.

## Process

Code comes second. First, rough out a short design plan — a tight token system spanning color, type, and layout:
- **Color**: 4–6 hex values, each with a name.
- **Type**: faces covering 2+ roles — a display face with character, deployed with restraint; a body face that partners it; a utility face for captions or data if the work needs one.
- **Layout**: the organizing idea, captured in a sentence or two.

Build only after that, executing the plan and tracing every color and type decision back to it.

## When the request is editorial

Now the posture shifts: picture a client who has already thrown out every proposal that felt canned and is paying specifically for conviction. Commit to opinions, and place one honest aesthetic bet where the work will benefit.

Audit the design plan against the subject before a line of code exists: any element that could pass for the stock answer to any similar brief gets reworked, with a note on what moved and the reasoning. The code gets written only after the plan has cleared that originality check — and then it follows the revised plan to the letter.

**Principles**

- Treat the hero as an argument: open on the single most characteristic artifact of the subject's world — headline, image, live demo, interactive moment.
- The page's personality lives in its type. Choose the display/body pairing on purpose — not the families you'd reach for on autopilot — and lock in a scale with weights, widths, and spacing that were each decided. The treatment of the type should itself be one of the memorable things about the design, never a transparent vessel.
- Motion is a budget to allocate. Ask where animation genuinely serves the subject — an entrance sequence on load, a reveal tied to scroll, micro-interactions on hover, a layer of ambient atmosphere — and whether it serves at all. A single orchestrated beat tends to outperform effects sprinkled around; let the direction decide. Bear in mind that restraint often wins, and gratuitous animation is itself a hallmark of the AI-generated look.
- Scale the execution to the ambition. Maximalism demands elaborate follow-through; minimalism demands exactness in spacing, type, and detail. Elegance means delivering the chosen vision completely.
- Concentrate the daring in one location and hush everything around it. Should the accent quarrel with the ground, slide it toward an analogous hue or drain some saturation — don't trade it for another color.

## After the artifact ships

Once the artifact is finished and delivered, ask the user whether they'd like to share it as a public page. If — and only if — they say yes, publish the file with the \`tot\` CLI (tot.page) and hand back the URL it prints:

\`\`\`bash
tot path/to/artifact.html
\`\`\`

If \`tot\` is not installed (\`command -v tot\` fails), tell the user and offer to install it. Install only on their explicit go-ahead:

\`\`\`bash
npm install -g @plannotator/tot
\`\`\`

Never publish or install without the user's explicit consent — a shared page is publicly accessible to anyone who has the link.`

export default function DesigningArtifactsPage() {
  return (
    <DocsShell
      title={page.title}
      description={page.description}
      markdown={page.markdown}
      toc={TOC['designing-artifacts']}
      prev={nav.prev}
      next={nav.next}
    >
      <p>
        <a href="https://github.com/plannotator/effective-html/blob/main/skills/design-artifact/SKILL.md">
          <code>design-artifact</code>
        </a>
        는 HTML 페이지, 리포트, 플랜, 랜딩 페이지, 데모, 덱, 작은 도구를 위한 크리에이티브 디렉션을
        제공합니다. 단독으로 쓰거나 더 구체적인 Effective HTML 스킬과 함께 사용할 수 있습니다.
      </p>
      <p>
        이 스킬은 사용자의 지시와 프로젝트의 기존 디자인 시스템을 우선합니다. 시각 방향이 열려 있을
        때는 브리프에 맞게 처리 수준을 정하고, 주제를 기준으로 결정하며, 하우스 스타일을 강요하지 않고
        실무형·에디토리얼 아티팩트에 같은 정성을 기울입니다.
      </p>
      <h2 id="what-the-skill-covers" className="group-heading">
        <a data-card href="#what-the-skill-covers">스킬이 다루는 것</a>
      </h2>
      <p>
        프로세스는 색, 타이포, 레이아웃에 대한 짧은 계획으로 시작합니다. 기본 원칙은 기존 자료, 실제
        콘텐츠, 타이포그래피, 뉴트럴, 테마, 간격, 반응형 오버플로, CSS 구조, 인터페이스 카피, 의미 있는
        시각 장치, 상호작용, 접근성, 검증을 다룹니다. 에디토리얼 작업에는 추가 독창성 점검과 하나의
        의도적인 미적 베팅이 들어갑니다.
      </p>
      <h2 id="copy-the-canonical-skill" className="group-heading">
        <a data-card href="#copy-the-canonical-skill">정식 스킬 복사하기</a>
      </h2>
      <p>
        아래 블록은 저장소 원본을 그대로 옮긴 것입니다. 저장소나 에이전트 스킬 디렉터리에 
        <code>skills/design-artifact/SKILL.md</code>로 저장하세요.
      </p>
      <CodeBlock title="skills/design-artifact/SKILL.md" lang="md" code={SKILL_CODE} />
      <GuideNext {...GUIDE_NEXT['designing-artifacts']} />
    </DocsShell>
  )
}
