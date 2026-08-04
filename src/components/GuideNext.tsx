import { Link } from "react-router-dom";
import "./guide.css";
import { ArrowRight } from "./icons";

export type GuideNextProps = {
  href: string;
  title: string;
  description: string;
};

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export function GuideNext({ href, title, description }: GuideNextProps) {
  const inner = (
    <>
      <span>
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
      <ArrowRight />
    </>
  );

  if (isExternal(href)) {
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
