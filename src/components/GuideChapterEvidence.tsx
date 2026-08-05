import type { CSSProperties } from "react";
import "./guide.css";
import { newTabProps } from "../lib/links";
import { BalancedText } from "./BalancedText";
import { ArrowUpRight } from "./icons";

export type EvidenceCheck = {
  label: string;
  value: string;
};

type EvidenceBase = {
  eyebrow: string;
  title: string;
  checks: [EvidenceCheck, EvidenceCheck, EvidenceCheck] | EvidenceCheck[];
  accent?: string;
};

export type EvidenceIframeProps = EvidenceBase & {
  variant?: "default";
  kind: "iframe";
  src: string;
};

export type EvidenceImageProps = EvidenceBase & {
  variant?: "default";
  kind: "image";
  href: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  external?: boolean;
};

export type EvidenceComparisonProps = EvidenceBase & {
  variant: "comparison";
  mdEyebrow: string;
  mdTitle: string;
  mdBody: string;
  mdList: string[];
  imageHref: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  verdict: string;
};

export type GuideChapterEvidenceProps =
  | EvidenceIframeProps
  | EvidenceImageProps
  | EvidenceComparisonProps;

export function GuideChapterEvidence(props: GuideChapterEvidenceProps) {
  const accent = props.variant === "comparison" ? props.accent ?? "var(--lilac)" : props.accent;
  const style = { "--evidence-accent": accent } as CSSProperties;

  return (
    <section className="ge-evidence" style={style}>
      <header>
        <span>{props.eyebrow}</span>
        <h2>
          <BalancedText breakSentences={false}>{props.title}</BalancedText>
        </h2>
      </header>
      {props.variant === "comparison" ? (
        <ComparisonBody {...props} />
      ) : (
        <DefaultBody {...props} />
      )}
    </section>
  );
}

function DefaultBody(props: EvidenceIframeProps | EvidenceImageProps) {
  const openHref = props.kind === "iframe" ? props.src : props.href;

  return (
    <div className="ge-body">
      <div className="ge-visual">
        {props.kind === "iframe" ? (
          <iframe src={props.src} title={props.title} loading="lazy" />
        ) : (
          <a href={props.href} aria-label={props.title} {...newTabProps(props.href, props.external)}>
            <img
              src={props.image}
              alt={props.imageAlt}
              width={props.imageWidth}
              height={props.imageHeight}
              loading="lazy"
            />
          </a>
        )}
        <a
          className="ge-open"
          href={openHref}
          {...newTabProps(openHref, props.kind === "image" && props.external)}
        >
          전체 아티팩트 열기
          <ArrowUpRight />
        </a>
      </div>
      <dl className="ge-checks">
        {props.checks.map((check) => (
          <div key={check.label}>
            <dt>{check.label}</dt>
            <dd>
              {/* 좁은 사이드 컬럼이라 문장마다 줄을 넘기면 조각납니다. */}
              <BalancedText breakSentences={false}>{check.value}</BalancedText>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function ComparisonBody(props: EvidenceComparisonProps) {
  return (
    <>
      <div className="ge-body ge-body--comparison">
        <div className="ge-md">
          <span>{props.mdEyebrow}</span>
          <strong>{props.mdTitle}</strong>
          <p>
            <BalancedText>{props.mdBody}</BalancedText>
          </p>
          <ol>
            {props.mdList.map((item) => (
              <li key={item}>
                <BalancedText breakSentences={false}>{item}</BalancedText>
              </li>
            ))}
          </ol>
        </div>
        <a
          className="ge-specimen"
          href={props.imageHref}
          aria-label={props.imageAlt}
          {...newTabProps(props.imageHref)}
        >
          <img
            src={props.image}
            alt={props.imageAlt}
            width={props.imageWidth}
            height={props.imageHeight}
            loading="lazy"
          />
          <span>
            HTML · 공간적 증거
            <ArrowUpRight />
          </span>
        </a>
      </div>
      <p className="ge-verdict">
        <BalancedText>{props.verdict}</BalancedText>
      </p>
    </>
  );
}
