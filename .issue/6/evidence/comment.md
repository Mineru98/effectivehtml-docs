## 작업 요약

여섯 스킬 사례에 바로 복사할 수 있는 프롬프트와 복사 상태를 추가했습니다.
각 카드에는 같은 스킬의 실제 실행 결과 화면을 WebP 캡처로 넣고, 결과 화면으로 이동하는 링크를 연결했습니다.

## 변경 전후

| 전 | 후 |
| --- | --- |
| ![스킬 사례 데스크톱 - 전](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/6/evidence/before/skill-exhibit-desktop.webp) | ![스킬 사례 데스크톱 - 후](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/6/evidence/after/skill-exhibit-desktop.webp) |
| ![스킬 사례 모바일 - 전](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/6/evidence/before/skill-exhibit-mobile.webp) | ![스킬 사례 모바일 - 후](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/6/evidence/after/skill-exhibit-mobile.webp) |

빨간 박스는 여섯 사례의 프롬프트·복사 버튼·대응 결과 캡처 영역입니다.

## 변경 파일

- `src/pages/SkillExhibitPage.tsx` — 프롬프트 복사 동작과 스킬별 결과 캡처 연결
- `src/pages/skill-exhibit.css` — 프롬프트·결과 캡처·키보드 포커스 및 반응형 레이아웃
- `public/assets/skill-results/*.webp` — 여섯 실제 결과 화면 캡처

## 검증

- `npm run build` 통과
- 375px·768px·1280px에서 여섯 카드와 한국어 줄바꿈을 시각 검토
- 브라우저에서 프롬프트 복사 후 `복사됨` 상태와 프로토타입 재시도 상태 전환 확인

## 남은 이슈

- 없음
