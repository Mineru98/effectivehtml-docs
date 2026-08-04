import "./guide.css";

export type GuideSourceItem = {
  href: string;
  title: string;
  subtitle: string;
};

export function GuideSources({ items }: { items: GuideSourceItem[] }) {
  return (
    <nav className="gs-sources" aria-label="이 가이드의 출처">
      {items.map((item) => (
        <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
          <span>
            <strong>{item.title}</strong>
            <small>{item.subtitle}</small>
          </span>
        </a>
      ))}
    </nav>
  );
}
