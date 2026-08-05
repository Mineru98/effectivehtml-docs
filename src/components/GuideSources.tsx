import "./guide.css";
import { newTabProps } from "../lib/links";
import { BalancedText } from "./BalancedText";

export type GuideSourceItem = {
  href: string;
  title: string;
  subtitle: string;
};

export function GuideSources({ items }: { items: GuideSourceItem[] }) {
  return (
    <nav className="gs-sources" aria-label="이 가이드의 출처">
      {items.map((item) => (
        <a key={item.href} href={item.href} {...newTabProps(item.href)}>
          <span>
            <strong>{item.title}</strong>
            <small>
              <BalancedText breakSentences={false}>{item.subtitle}</BalancedText>
            </small>
          </span>
        </a>
      ))}
    </nav>
  );
}
