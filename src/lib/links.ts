const NEW_TAB_ATTRS = { target: "_blank", rel: "noreferrer" } as const;

export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

// 정적 HTML 아티팩트(/assets/**.html)는 SPA 밖의 독립 문서라서, 같은 탭에서 열면
// 문서로 돌아올 방법이 뒤로 가기밖에 남지 않습니다. 외부 링크와 동일하게 취급합니다.
export function isStandaloneDocument(href: string) {
  return isExternal(href) || /\.html([?#].*)?$/.test(href);
}

export function newTabProps(href: string, force?: boolean) {
  return force || isStandaloneDocument(href) ? NEW_TAB_ATTRS : {};
}
