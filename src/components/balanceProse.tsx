import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { BalancedText } from "./BalancedText";

// 본문 텍스트를 담는 태그. 문장 단위로 나누고 균형을 잡습니다.
const BALANCED_TAGS = new Set(["p", "li", "dd", "blockquote"]);

// 제목. 문장이 하나뿐이라 줄바꿈 없이 균형만 잡습니다.
const HEADING_TAGS = new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);

// 본문을 감싸기만 하는 태그. 안쪽으로 계속 내려갑니다. 여기 없는 태그(코드 블록의
// pre·code 등)는 그대로 두어 공백과 줄바꿈이 보존됩니다.
const CONTAINER_TAGS = new Set(["div", "section", "article", "ul", "ol", "dl", "figure"]);

type WithChildren = { children?: ReactNode };

function balanced(element: ReactElement<WithChildren>, breakSentences: boolean) {
  return cloneElement(
    element,
    undefined,
    <BalancedText breakSentences={breakSentences}>{element.props.children}</BalancedText>
  );
}

// 제목은 보통 앵커 링크가 텍스트를 감싸고 있습니다. Balancer는 텍스트나 인라인
// 노드를 직접 감싸야 하므로, 링크 바깥이 아니라 안쪽에서 균형을 잡습니다.
function balanceHeading(children: ReactNode): ReactNode {
  return Children.map(children, (child) => {
    if (typeof child === "string") return <BalancedText breakSentences={false}>{child}</BalancedText>;
    if (isValidElement(child) && child.type === "a") {
      return balanced(child as ReactElement<WithChildren>, false);
    }
    return child;
  });
}

/**
 * 페이지 본문을 훑어 문단·목록 항목의 텍스트에 문장 단위 줄바꿈과 균형 잡기를,
 * 제목에는 균형 잡기를 적용합니다. 컴포넌트는 아직 렌더링 전이라 내부를 알 수
 * 없으므로 그대로 통과시킵니다. 각 컴포넌트는 자기 자리에서 직접 BalancedText를
 * 사용합니다.
 */
export function balanceProse(node: ReactNode): ReactNode {
  return Children.map(node, (child) => {
    if (!isValidElement(child) || typeof child.type !== "string") return child;

    const element = child as ReactElement<WithChildren>;
    const children = element.props.children;
    if (children === undefined || children === null) return child;

    if (BALANCED_TAGS.has(child.type)) return balanced(element, true);
    if (HEADING_TAGS.has(child.type)) {
      return cloneElement(element, undefined, balanceHeading(children));
    }
    if (CONTAINER_TAGS.has(child.type)) {
      return cloneElement(element, undefined, balanceProse(children));
    }

    return child;
  });
}
