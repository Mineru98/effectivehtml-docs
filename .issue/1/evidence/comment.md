## 작업 요약

모바일 헤더에서 검색·사이드바 열기 버튼을 워드마크보다 먼저 렌더하도록 순서를 바꿨습니다.
버튼의 접근성 레이블과 사이드바 열기 동작은 그대로 유지했습니다.

## 변경 전후 — 모바일 390×844

| 전 | 후 |
| --- | --- |
| ![모바일 헤더 변경 전 — 워드마크 왼쪽, 보조 버튼 오른쪽](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/1/evidence/before/mobile-header.webp) | ![모바일 헤더 변경 후 — 보조 버튼 왼쪽, 워드마크 오른쪽](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/1/evidence/after/mobile-header.webp) |

빨간 박스는 변경 대상인 모바일 헤더입니다. 변경 후 검색·사이드바 버튼이 좌측에, 워드마크가 그 오른쪽에 표시되며 겹침·잘림이 없습니다.

## 데스크톱 1440×900 확인

![데스크톱 레이아웃 — 모바일 헤더 미표시](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/1/evidence/after/desktop-header.webp)

데스크톱에서는 모바일 헤더가 숨겨지고 기존 사이드바·본문·목차 레이아웃이 정상적으로 표시됩니다.

## 변경 파일

- `src/layout/MobileHeader.tsx` — 모바일 헤더의 버튼과 워드마크 렌더 순서를 변경

## 검증

- `npm run build` 통과 (`tsc -b && vite build`)
- 모바일 390×844 실제 렌더 및 빨간 박스 증거 캡처 확인
- 데스크톱 1440×900 실제 렌더 확인

## 남은 이슈

- 없음
