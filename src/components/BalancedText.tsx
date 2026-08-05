import { Children, Fragment, type ReactNode } from "react";
import Balancer from "react-wrap-balancer";

type Segment = { text: string; ends: boolean };

// 마침표가 곧 문장 끝은 아닙니다. 소수점(16.9), 이니셜(J. Doe), 약어(e.g.)는
// 뒤에 공백이 오더라도 줄을 넘기면 안 됩니다.
function isSentenceEnd(text: string, index: number) {
  const prev = text[index - 1];
  if (!prev) return false;
  if (/[0-9]/.test(prev)) return false;
  if (/[A-Za-z]/.test(prev) && !/[A-Za-z]/.test(text[index - 2] ?? "")) return false;
  return true;
}

function splitSentences(text: string): Segment[] {
  const segments: Segment[] = [];
  const mark = /[.!?]+["'”’)\]]*/g;
  let start = 0;
  let match: RegExpExecArray | null;

  while ((match = mark.exec(text)) !== null) {
    const end = match.index + match[0].length;
    const trailing = /^\s+/.exec(text.slice(end));
    // 문장 경계는 뒤에 공백이 오거나 문자열이 끝날 때만 인정합니다.
    if (end < text.length && !trailing) continue;
    if (!isSentenceEnd(text, match.index)) continue;
    segments.push({ text: text.slice(start, end), ends: true });
    start = end + (trailing?.[0].length ?? 0);
    mark.lastIndex = start;
  }

  if (start < text.length) segments.push({ text: text.slice(start), ends: false });
  return segments;
}

// 문장 사이 공백은 <br>이 대신하므로 각 묶음의 양 끝 공백은 덜어냅니다.
function trimEdges(group: ReactNode[]): ReactNode[] {
  const nodes = [...group];
  const last = nodes.length - 1;
  if (typeof nodes[0] === "string") nodes[0] = nodes[0].replace(/^\s+/, "");
  if (typeof nodes[last] === "string") nodes[last] = nodes[last].replace(/\s+$/, "");
  return nodes.filter((node) => node !== "");
}

function toGroups(children: ReactNode): ReactNode[][] {
  const groups: ReactNode[][] = [];
  let current: ReactNode[] = [];

  const flush = () => {
    const group = trimEdges(current);
    if (group.length > 0) groups.push(group);
    current = [];
  };

  Children.forEach(children, (child) => {
    if (typeof child !== "string") {
      if (child !== null && child !== undefined && child !== false) current.push(child);
      return;
    }
    for (const segment of splitSentences(child)) {
      current.push(segment.text);
      if (segment.ends) flush();
    }
  });
  flush();

  return groups;
}

export type BalancedTextProps = {
  children: ReactNode;
  /**
   * 문장이 끝날 때마다 줄을 넘길지 여부. 폭이 좁아 문장마다 한 줄을 주기 어려운
   * 자리에서는 끄고 균형 잡기만 사용합니다.
   */
  breakSentences?: boolean;
  /** 0이면 브라우저 기본 줄바꿈, 1이면 가장 촘촘한 균형. */
  ratio?: number;
};

/**
 * 문장 단위로 줄을 나누고 각 문장을 균형 잡힌 폭으로 감쌉니다. 문장이 두 줄 이상
 * 차지할 때 마지막 줄에 단어 하나만 남는 고아 줄을 막고, 문장이 바뀌는 지점은
 * 줄바꿈으로 드러납니다.
 */
export function BalancedText({ children, breakSentences = true, ratio }: BalancedTextProps) {
  const groups = breakSentences ? toGroups(children) : [[children]];

  return (
    <>
      {groups.map((group, i) => (
        <Fragment key={i}>
          {/* 좁은 화면에서는 .bt-break가 숨겨지고, 앞의 공백이 문장 사이를 잇습니다. */}
          {i > 0 ? <>{" "}<br className="bt-break" /></> : null}
          <Balancer ratio={ratio}>
            {group.map((node, j) => (
              <Fragment key={j}>{node}</Fragment>
            ))}
          </Balancer>
        </Fragment>
      ))}
    </>
  );
}
