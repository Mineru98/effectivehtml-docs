# Issue 4 — Fresh Visual QA Pass B (CJK precision)

Verdict: **REVISE**

Scope: read-only inspection of all 11 current PNG captures in this directory against the current `SkillResultPage.tsx`, `skill-result.css`, `SkillExhibitPage.tsx`, and `skill-exhibit.css` source. PNG signatures, dimensions, and source/capture freshness were checked before visual review. `prototype-succeeded-focus-mobile.png` is byte-identical to `prototype-succeeded-mobile.png` (the image-diff command reports `diffPixels: 0`), so the required focused-state ring is not evidenced.

## manualQa

### surfaceEvidence

| Scenario | Criterion | Surface | Exact invocation | Verdict | Artifact refs |
|---|---|---|---|---|---|
| PB-01 | Issue #4 responsive result/exhibit views | Exhibit desktop | `view_image(detail=original, path=.../exhibit-desktop.png)` | PASS | `png-exhibit-desktop` |
| PB-02 | Issue #4 responsive result/exhibit views | Exhibit mobile (390×844) | `view_image(detail=original, path=.../exhibit-mobile.png)` | PASS | `png-exhibit-mobile` |
| PB-03 | Issue #4 six distinct skill outputs | HTML result desktop | `view_image(detail=original, path=.../result-html-desktop.png)` | PASS | `png-result-html` |
| PB-04 | Issue #4 six distinct skill outputs | Design direction result desktop | `view_image(detail=original, path=.../result-direction-desktop.png)` | PASS | `png-result-direction` |
| PB-05 | Issue #4 six distinct skill outputs | Wireframe result desktop | `view_image(detail=original, path=.../result-wireframe-desktop.png)` | PASS | `png-result-wireframe` |
| PB-06 | Issue #4 six distinct skill outputs | Plan result desktop | `view_image(detail=original, path=.../result-plan-desktop.png)` | PASS | `png-result-plan` |
| PB-07 | Issue #4 six distinct skill outputs | Diagram result desktop | `view_image(detail=original, path=.../result-diagram-desktop.png)` | PASS | `png-result-diagram` |
| PB-08 | Issue #4 prototype error state | Prototype failed mobile (390×844) | `view_image(detail=original, path=.../prototype-failed-mobile.png)` | PASS | `png-prototype-failed` |
| PB-09 | Issue #4 prototype retry state | Prototype ready mobile (390×844) | `view_image(detail=original, path=.../prototype-ready-mobile.png)` | PASS | `png-prototype-ready` |
| PB-10 | Issue #4 prototype success state | Prototype succeeded mobile (390×844) | `view_image(detail=original, path=.../prototype-succeeded-mobile.png)` | PASS | `png-prototype-succeeded` |
| PB-11 | Issue #4 keyboard-accessible focus evidence | Prototype succeeded focus mobile (390×844) | `view_image(detail=original, path=.../prototype-succeeded-focus-mobile.png)`; `node .../visual-qa.mjs image-diff prototype-succeeded-mobile.png prototype-succeeded-focus-mobile.png` | REVISE | `png-prototype-succeeded`, `png-prototype-focus`, `src-result-css` |

### adversarialCases

| Scenario | Criterion | Adversarial class | Expected behavior | Verdict | Artifact refs |
|---|---|---|---|---|---|
| ADV-01 | Issue #4 CJK precision | CJK semantic wrapping | Korean clauses and labels remain naturally grouped; no particle/ending, connective, or one-syllable orphan. | PASS | `png-exhibit-mobile`, `png-prototype-failed`, `png-prototype-ready`, `png-prototype-succeeded` |
| ADV-02 | Issue #4 responsive layout | Mobile clipping / horizontal overflow | 390px captures keep all visible controls and cards inside the viewport; no clipped baselines or horizontal spill. | PASS | `png-exhibit-mobile`, `png-prototype-failed`, `png-prototype-ready`, `png-prototype-succeeded` |
| ADV-03 | Issue #4 state reachability/clarity | State distinction | Failed, ready, and succeeded states visibly differ in label, heading, copy, action, and status rail. | PASS | `png-prototype-failed`, `png-prototype-ready`, `png-prototype-succeeded` |
| ADV-04 | Issue #4 keyboard completion criterion | Focus-ring capture | A keyboard-focused control must show the cobalt `:focus-visible` outline in the focused PNG. | REVISE | `png-prototype-succeeded`, `png-prototype-focus`, `src-result-css` |
| ADV-05 | Issue #4 evidence hygiene | Capture integrity / freshness | Every inspected PNG is a valid non-empty PNG at the declared viewport and newer than the source revision. | PASS | `png-exhibit-desktop`, `png-exhibit-mobile`, `png-result-html`, `png-result-direction`, `png-result-wireframe`, `png-result-plan`, `png-result-diagram`, `png-prototype-failed`, `png-prototype-ready`, `png-prototype-succeeded`, `png-prototype-focus`, `src-result-tsx`, `src-result-css`, `src-exhibit-tsx`, `src-exhibit-css` |

## artifactRefs

| ID | Kind | Description | Path |
|---|---|---|---|
| `png-exhibit-desktop` | screenshot | Exhibit desktop, 1440×900 | `.issue/4/evidence/after/exhibit-desktop.png` |
| `png-exhibit-mobile` | screenshot | Exhibit mobile, 390×844 | `.issue/4/evidence/after/exhibit-mobile.png` |
| `png-result-html` | screenshot | HTML result desktop, 1440×900 | `.issue/4/evidence/after/result-html-desktop.png` |
| `png-result-direction` | screenshot | Design direction result desktop, 1440×900 | `.issue/4/evidence/after/result-direction-desktop.png` |
| `png-result-wireframe` | screenshot | Wireframe result desktop, 1440×900 | `.issue/4/evidence/after/result-wireframe-desktop.png` |
| `png-result-plan` | screenshot | Plan result desktop, 1440×900 | `.issue/4/evidence/after/result-plan-desktop.png` |
| `png-result-diagram` | screenshot | Diagram result desktop, 1440×900 | `.issue/4/evidence/after/result-diagram-desktop.png` |
| `png-prototype-failed` | screenshot | Prototype failed state mobile, 390×844 | `.issue/4/evidence/after/prototype-failed-mobile.png` |
| `png-prototype-ready` | screenshot | Prototype retry-ready state mobile, 390×844 | `.issue/4/evidence/after/prototype-ready-mobile.png` |
| `png-prototype-succeeded` | screenshot | Prototype succeeded state mobile, 390×844 | `.issue/4/evidence/after/prototype-succeeded-mobile.png` |
| `png-prototype-focus` | screenshot | Claimed focused succeeded state mobile, 390×844; identical bytes to succeeded capture | `.issue/4/evidence/after/prototype-succeeded-focus-mobile.png` |
| `src-result-tsx` | source | Result page content/state source | `src/pages/SkillResultPage.tsx` |
| `src-result-css` | source | Result layout and `:focus-visible` rule | `src/pages/skill-result.css` |
| `src-exhibit-tsx` | source | Exhibit page content | `src/pages/SkillExhibitPage.tsx` |
| `src-exhibit-css` | source | Exhibit responsive/CJK styles | `src/pages/skill-exhibit.css` |

## Blocking findings

- **[evidence] PB-11 / ADV-04:** `prototype-succeeded-focus-mobile.png` and `prototype-succeeded-mobile.png` have identical SHA-256 and zero pixel diff. The screenshot therefore does not capture a keyboard-focused control or the expected ring from `src/pages/skill-result.css:4`. Recapture the focused state after keyboard focus (and retain the resulting PNG) before claiming PASS.

No product-level CJK wrapping, clipping, horizontal overflow, or state-clarity blockers were found in the other 10 captures.
