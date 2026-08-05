import { Link } from "react-router-dom";
import "./guide.css";
import { isStandaloneDocument } from "../lib/links";
import { BalancedText } from "./BalancedText";
import { ArrowRight } from "./icons";

export type GuideNextProps = {
  href: string;
  title: string;
  description: string;
};

export function GuideNext({ href, title, description }: GuideNextProps) {
  const inner = (
    <>
      <span>
        <strong>{title}</strong>
        <small>
          <BalancedText breakSentences={false}>{description}</BalancedText>
        </small>
      </span>
      <ArrowRight />
    </>
  );

  if (isStandaloneDocument(href)) {
    return (
      <a className="gn-next" href={href} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }

  return (
    <Link className="gn-next" to={href}>
      {inner}
    </Link>
  );
}
