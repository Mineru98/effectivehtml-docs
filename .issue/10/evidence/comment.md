## 작업 요약

한글 Effective HTML 가이드의 정적 HTML head에 Open Graph와 Twitter 카드 메타를 추가하고, 사용자가 선택한 한지+한글 라벨 배너를 공유 이미지로 연결했습니다.

페이지별 `document.title`과 description 갱신은 기존 동작을 유지합니다.

## 변경 전후

| 전 | 후 |
| --- | --- |
| ![정적 head의 OG·Twitter 메타 없음 - 전](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/10/evidence/before/index-head.webp) | ![정적 head의 OG·Twitter 메타 추가 - 후](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/10/evidence/after/index-head.webp) |
| ![OG 배너 경로 없음 - 전](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/10/evidence/before/og-banner.webp) | ![선택한 한지 배너 - 후](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/10/evidence/after/og-banner.webp) |

빨간 박스는 추가된 OG/Twitter 메타 블록과 선택한 공유 배너를 가리킵니다. before의 배너 URL은 기존 SPA fallback으로 이동하며, after는 `200 image/jpeg`로 실제 배너를 반환합니다.

## 변경 파일

- `index.html` — 사이트 공통 Open Graph·Twitter 메타와 절대 이미지 URL 추가
- `public/brand/effective-html-banner.jpg` — 사용자가 선택한 1408×704 한지+한글 라벨 배너 추가

## 검증

- `npm run build` 통과
- `dist/index.html`에서 `og:title`, `og:description`, `og:image`, `og:type`, `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`의 정확한 값 확인
- `dist/brand/effective-html-banner.jpg` 복사 확인
- 로컬 배너 URL `200` / `image/jpeg` 확인
- `#/docs`, `#/docs/why-html`의 기존 페이지별 title·description 갱신 확인

## 남은 이슈

- 없음
