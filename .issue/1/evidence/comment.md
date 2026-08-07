## 작업 요약

요구사항을 정정했습니다. 모바일 헤더에서 **사이드바 열기 버튼만 좌측**으로 옮기고, **검색 버튼은 우측**에 그대로 유지합니다.
워드마크는 두 버튼 사이의 남는 공간을 차지하며, 기존 버튼 동작과 접근성 레이블은 유지됩니다.

## 변경 전후 — 모바일 390×844

| 전 | 후 |
| --- | --- |
| ![모바일 헤더 변경 전 — 워드마크 왼쪽, 보조 버튼 오른쪽](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/1/evidence/before/mobile-header.webp) | ![모바일 헤더 변경 후 — 사이드바 버튼 왼쪽, 검색 버튼 오른쪽](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/1/evidence/after/mobile-header-split-actions.webp) |

빨간 박스는 변경 대상인 모바일 헤더입니다. 변경 후 사이드바 열기 아이콘은 워드마크 왼쪽에, 검색 아이콘은 헤더 오른쪽 끝에 있으며 겹침·잘림이 없습니다.

## 데스크톱 1440×900 확인

![데스크톱 레이아웃 — 모바일 헤더 미표시](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/1/evidence/after/desktop-header.webp)

데스크톱에서는 모바일 헤더가 숨겨지고 기존 사이드바·본문·목차 레이아웃이 정상적으로 표시됩니다.

## 변경 파일

- `src/layout/MobileHeader.tsx` — 사이드바 버튼 → 워드마크 → 검색 버튼 순서로 모바일 헤더 배치

## 검증

- `npm run build` 통과 (`tsc -b && vite build`)
- 모바일 390×844 실제 렌더: 사이드바 버튼 좌측, 검색 버튼 우측 확인
- 데스크톱 1440×900 실제 렌더 확인

## 남은 이슈

- 없음
