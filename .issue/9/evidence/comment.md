## 작업 요약

skill-exhibit에서 상세로 들어간 뒤 브라우저 뒤로가기로 돌아올 때 View Transitions API가 실행되도록 바꿨습니다. HashRouter를 데이터 라우터(`createHashRouter` + `RouterProvider`)로 바꾸고, 목록↔상세 `Link`에 `viewTransition`을 켜 두었습니다. React Router는 원래 PUSH가 전환을 썼으면 POP(뒤로가기)에서도 `document.startViewTransition`을 다시 호출합니다.

## 변경 전후

| 전 | 후 |
| --- | --- |
| ![스킬 사례 목록 html 썸네일 - 전](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/9/evidence/before/exhibit.webp) | ![스킬 사례 목록 html 썸네일 - 후](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/9/evidence/after/exhibit.webp) |
| ![html 실행 결과 - 전](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/9/evidence/before/result-html.webp) | ![html 실행 결과 - 후](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/9/evidence/after/result-html.webp) |

빨간 박스가 공유 전환 쌍입니다. 목록 썸네일과 상세 캔버스에 같은 `view-transition-name`이 붙어, 뒤로가기 때 그 영역이 서로 이어집니다. 정지 화면 자체는 거의 같고, 전환은 뒤로가는 순간에만 보입니다.

<details>
<summary>html-diagram 상세와 모바일 목록</summary>

| 전 | 후 |
| --- | --- |
| ![html-diagram 실행 결과 - 전](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/9/evidence/before/result-diagram.webp) | ![html-diagram 실행 결과 - 후](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/9/evidence/after/result-diagram.webp) |
| ![스킬 사례 목록 모바일 - 전](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/9/evidence/before/exhibit-mobile.webp) | ![스킬 사례 목록 모바일 - 후](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/9/evidence/after/exhibit-mobile.webp) |

</details>

## 변경 파일

- `src/App.tsx` — `HashRouter`를 `createHashRouter` + `RouterProvider`로 교체. `ScrollToTop`은 레이아웃 라우트로 유지
- `src/pages/SkillExhibitPage.tsx` — 결과 링크에 `viewTransition`과 스킬별 `data-skill`
- `src/pages/SkillResultPage.tsx` — 목록 복귀 링크에 `viewTransition`
- `src/pages/skill-exhibit.css` / `src/pages/skill-result.css` — 스킬별 `view-transition-name`
- `src/styles/tokens.css` — `prefers-reduced-motion`에서 전환 애니메이션 제거

## 검증

- `npm run build` 통과 (`tsc -b && vite build`)
- Playwright Chromium에서 6개 skill 모두 목록→상세 PUSH 1회, 브라우저 뒤로가기 POP 1회 `document.startViewTransition` 호출 확인
- `#/docs`, `#/docs/why-html` 렌더링 유지
- `prefers-reduced-motion: reduce`에서도 목록 복귀 이동은 유지

## 남은 이슈

- 없음
- 전진 진입에도 같은 `viewTransition`이 붙습니다. 뒤로가기 POP를 켜려면 원래 PUSH를 기록해야 하는 React Router 제약입니다.
