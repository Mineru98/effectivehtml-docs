## QA 캡처 결과

모든 영역은 최신 빌드에서 캡처했습니다. 아래 이미지는 사례 목록, 다섯 개의 정적 결과, 프로토타입의 실패·재시도 준비 상태를 포함합니다.

## 변경 전후

| 전 | 후 |
| --- | --- |
| ![실행 결과 화면 추가 전](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/4/evidence/before/result-html-desktop.webp) | ![html 실행 결과](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/4/evidence/after/result-html-desktop.webp) |

변경 전에는 실행 결과 경로가 비어 있었고, 변경 후에는 스킬별 결과물을 화면에서 비교해 볼 수 있습니다.

## 사례 목록

| 데스크톱 | 모바일 |
| --- | --- |
| ![스킬 사례 목록 데스크톱](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/4/evidence/after/exhibit-desktop.webp) | ![스킬 사례 목록 모바일](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/4/evidence/after/exhibit-mobile.webp) |

## 스킬별 실행 결과

| html | design-artifact |
| --- | --- |
| ![html 실행 결과](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/4/evidence/after/result-html-desktop.webp) | ![design-artifact 실행 결과](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/4/evidence/after/result-direction-desktop.webp) |

| wireframe | plan |
| --- | --- |
| ![wireframe 실행 결과](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/4/evidence/after/result-wireframe-desktop.webp) | ![plan 실행 결과](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/4/evidence/after/result-plan-desktop.webp) |

![diagram 실행 결과](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/4/evidence/after/result-diagram-desktop.webp)

## 프로토타입 상태 전환

| 실패 상태 | 다시 시도 후 준비 상태 |
| --- | --- |
| ![프로토타입 실패 상태](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/4/evidence/after/prototype-failed-mobile.webp) | ![프로토타입 재시도 준비 상태](https://raw.githubusercontent.com/Mineru98/effectivehtml-docs/main/.issue/4/evidence/after/prototype-ready-mobile.webp) |

## 검증

- `npm run build` 통과
- 여섯 개 실행 결과 링크와 프로토타입 상태 전환 확인
- 1440×900 데스크톱·390×844 모바일에서 가로 넘침 없음
- 독립 QA에서 토큰 사용, 실제 DOM 결과물, 한국어 줄바꿈, 캡처 유효성 확인
