import "./guide.css";
import { newTabProps } from "../lib/links";
import { BalancedText } from "./BalancedText";
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

export function GuideHandoff({ cards }: { cards: HandoffCard[] }) {
  return (
    <nav className="gh-handoff" aria-label="이 레슨 적용하기">
      {cards.map((card) => {
        const LeadingIcon = KIND_ICONS[card.kind];
        return (
          <a key={card.href} href={card.href} {...newTabProps(card.href)}>
            <LeadingIcon />
            <span>
              <strong>{card.label}</strong>
              <small>
                <BalancedText breakSentences={false}>{card.description}</BalancedText>
              </small>
            </span>
            <ArrowUpRight />
          </a>
        );
      })}
    </nav>
  );
}
