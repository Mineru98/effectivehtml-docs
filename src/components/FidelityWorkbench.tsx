import { useCallback, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import "./guide.css";
import { newTabProps } from "../lib/links";
import { BalancedText } from "./BalancedText";
import { ArrowUpRight } from "./icons";

export type FidelityTab = {
  id: string;
  label: string;
  accent: string;
  title: string;
  decision: string;
  evidence: string;
  stop: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  href: string;
  external?: boolean;
};

const LEDGER_LABELS = ["결정", "근거", "중단 시점"] as const;

export function FidelityWorkbench({ tabs }: { tabs: FidelityTab[] }) {
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? "wireframe");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const index = tabs.findIndex((t) => t.id === activeId);
      let next = -1;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      if (next < 0) return;
      event.preventDefault();
      setActiveId(tabs[next].id);
      tabRefs.current[next]?.focus();
    },
    [tabs, activeId]
  );

  if (!active) return null;

  const style = { "--evidence-accent": active.accent } as CSSProperties;
  const ledgerValues = [active.decision, active.evidence, active.stop];

  return (
    <section className="fw-workbench" style={style}>
      <div className="fw-tabs" role="tablist" aria-label="충실도 단계" onKeyDown={onKeyDown}>
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`fw-tab-${tab.id}`}
            aria-selected={tab.id === active.id}
            aria-controls={`fw-panel-${tab.id}`}
            tabIndex={tab.id === active.id ? 0 : -1}
            onClick={() => setActiveId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className="fw-panel"
        role="tabpanel"
        id={`fw-panel-${active.id}`}
        aria-labelledby={`fw-tab-${active.id}`}
      >
        <a
          className="fw-preview"
          href={active.href}
          aria-label={active.imageAlt}
          {...newTabProps(active.href, active.external)}
        >
          <img
            key={active.image}
            src={active.image}
            alt={active.imageAlt}
            width={active.imageWidth}
            height={active.imageHeight}
          />
          <span>
            아티팩트 열기
            <ArrowUpRight />
          </span>
        </a>
        <div className="fw-ledger">
          <h2>
            <BalancedText breakSentences={false}>{active.title}</BalancedText>
          </h2>
          <dl>
            {LEDGER_LABELS.map((label, i) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>
                  <BalancedText breakSentences={false}>{ledgerValues[i]}</BalancedText>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
