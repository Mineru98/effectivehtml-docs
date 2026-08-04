import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import "./guide.css";
import { Clipboard, ClipboardCheck, Markdown } from "./icons";

export type CodeToken = {
  text: string;
  light: string;
  dark: string;
  italic?: boolean;
  bold?: boolean;
};

type ShikiStyle = CSSProperties & {
  "--shiki-light": string;
  "--shiki-dark": string;
  "--shiki-light-font-style"?: string;
  "--shiki-dark-font-style"?: string;
  "--shiki-light-font-weight"?: string;
  "--shiki-dark-font-weight"?: string;
};

const PLAIN = { light: "#24292E", dark: "#E1E4E8" };
const BLUE = { light: "#005CC5", dark: "#79B8FF" };
const ORANGE = { light: "#E36209", dark: "#FFAB70" };

function token(
  text: string,
  colors: { light: string; dark: string },
  opts?: { italic?: boolean; bold?: boolean }
): CodeToken {
  return { text, ...colors, ...opts };
}

function tokenizeLine(line: string): CodeToken[] {
  // 프런트매터 펜스 / ATX 헤딩 — blue + bold
  if (/^\s*(---|#{1,6}\s)/.test(line)) {
    return [token(line, BLUE, { bold: true })];
  }

  const tokens: CodeToken[] = [];
  // 리스트 마커 / URL / 볼드 / 이탤릭 순으로 최장 매칭
  const pattern =
    /^(\s*(?:-|\d+\.)\s)|^(https?:\/\/[^\s)\]]+)|^\]\(([^)\s]+)\)|^(\*\*[^*]+\*\*)|^(\*[^*\n]+\*)/;
  let rest = line;
  while (rest.length > 0) {
    const m = rest.match(pattern);
    if (m) {
      if (m[1] !== undefined) tokens.push(token(m[1], ORANGE));
      else if (m[2] !== undefined) tokens.push(token(m[2], BLUE));
      else if (m[3] !== undefined) {
        tokens.push(token("](", PLAIN));
        tokens.push(token(m[3], BLUE));
        tokens.push(token(")", PLAIN));
      } else if (m[4] !== undefined) tokens.push(token(m[4], PLAIN, { bold: true }));
      else if (m[5] !== undefined) tokens.push(token(m[5], PLAIN, { italic: true }));
      rest = rest.slice(m[0].length);
    } else {
      const next = rest.slice(1).search(pattern);
      const end = next === -1 ? rest.length : next + 1;
      tokens.push(token(rest.slice(0, end), PLAIN));
      rest = rest.slice(end);
    }
  }
  return tokens;
}

function renderTokens(tokens: CodeToken[]): ReactNode {
  return tokens.map((t, i) => (
    <span key={i} style={tokenStyle(t)}>
      {t.text}
    </span>
  ));
}

function tokenStyle(t: CodeToken): ShikiStyle {
  const style: ShikiStyle = {
    "--shiki-light": t.light,
    "--shiki-dark": t.dark,
  };
  if (t.italic) {
    style["--shiki-light-font-style"] = "italic";
    style["--shiki-dark-font-style"] = "italic";
  }
  // 원본은 font-weight 변수를 방출하지만 CSS가 소비하지 않습니다 — 동일하게 유지.
  if (t.bold) {
    style["--shiki-light-font-weight"] = "bold";
    style["--shiki-dark-font-weight"] = "bold";
  }
  return style;
}

export type CodeBlockProps = {
  title: string;
  lang: string;
  code: string;
};

export function CodeBlock({ title, lang, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.replace(/\n$/, "").split("\n");

  return (
    <figure className="cb-block not-prose" dir="ltr" data-lang={lang}>
      <figcaption className="cb-titlebar">
        <Markdown />
        <span className="cb-caption">{title}</span>
        <button
          type="button"
          className="cb-copy"
          aria-label={copied ? "복사됨" : "코드 복사"}
          onClick={copy}
        >
          {copied ? <ClipboardCheck /> : <Clipboard />}
        </button>
      </figcaption>
      <div className="cb-scroll" role="region" tabIndex={0} aria-label={title}>
        <div className="cb-shiki">
          <pre>
            <code>
              {lines.map((line, i) =>
                line.length === 0 ? (
                  <span key={i} className="line" />
                ) : (
                  <span key={i} className="line">
                    {renderTokens(tokenizeLine(line))}
                  </span>
                )
              )}
            </code>
          </pre>
        </div>
      </div>
    </figure>
  );
}
