## 작업 요약

Effective HTML 스킬을 고르는 여섯 가지 실제 사례를 새 문서 페이지로 추가했습니다.
각 카드는 검토 질문, 알맞은 스킬, 요청 예시, 다음 단계로 구성했고 문서 탐색 흐름에도 연결했습니다.

## 변경 전후

| 전 | 후 |
| --- | --- |
| ![기존 문서 시작 화면](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/3/evidence/before/docs.webp) | ![스킬 활용 사례 데스크톱 화면](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/3/evidence/after/skill-exhibit-desktop.webp) |

새 URL을 추가한 작업이라 기존에는 동일 화면이 없었습니다. 후 화면의 빨간 박스는 새 스킬 사례 영역입니다.

모바일에서도 여섯 사례가 한 열로 자연스럽게 이어지고 가로 넘침이 없는지 확인했습니다.

![스킬 활용 사례 모바일 화면](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/3/evidence/after/skill-exhibit-mobile.webp)

## 변경 파일

- `src/pages/SkillExhibitPage.tsx` — 여섯 사례 카드와 스킬 선택 흐름 추가
- `src/pages/skill-exhibit.css` — 반응형 카드와 대비를 고려한 라벨 스타일 추가
- `src/App.tsx`, `src/layout/Sidebar.tsx`, `src/data/pages.ts` — 경로·사이드바·목차·문서 흐름 연결
- `DESIGN.md` — 새 문서 페이지와 디자인 규칙 기록

## 검증

- `npm run build` 통과
- 브라우저에서 새 페이지 이동과 예시 요청 복사 동작 확인
- 1440×900 데스크톱 및 390×844 모바일에서 독립 시각 QA 통과

## 남은 이슈

- 없음
