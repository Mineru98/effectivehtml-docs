import "./guide.css";
import { ArrowUpRight, FileCode2, Wrench } from "./icons";

export type HandoffCard = {
  kind: "artifact" | "source" | "skill";
  href: string;
  label: string;
  description: string;
};

const KIND_ICONS = {
  artifact: ArrowUpRight,
  source: FileCode2,
  skill: Wrench,
} as const;

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export function GuideHandoff({ cards }: { cards: HandoffCard[] }) {
  return (
    <nav className="gh-handoff" aria-label="이 레슨 적용하기">
      {cards.map((card) => {
        const LeadingIcon = KIND_ICONS[card.kind];
        const external = isExternal(card.href);
        return (
          <a
            key={card.href}
            href={card.href}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            <LeadingIcon />
            <span>
              <strong>{card.label}</strong>
              <small>{card.description}</small>
            </span>
            <ArrowUpRight />
          </a>
        );
      })}
    </nav>
  );
}
