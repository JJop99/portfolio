type MarqueeItem =
  | { text: string; serif: boolean; dot?: never }
  | { text: string; dot: true; serif?: never };

const items: MarqueeItem[] = [
  { text: "Software developer", serif: false },
  { text: "●", dot: true },
  { text: "Bologna 2024", serif: true },
  { text: "●", dot: true },
  { text: "Full-stack", serif: false },
  { text: "●", dot: true },
  { text: "Wellington, NZ", serif: true },
  { text: "●", dot: true },
  { text: "Master AI · VUW", serif: false },
  { text: "●", dot: true },
  { text: "by hand", serif: true },
  { text: "●", dot: true },
  { text: "Open to roles", serif: false },
  { text: "●", dot: true },
  { text: "Italian abroad", serif: true },
  { text: "●", dot: true },
];

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {/* duplicated for seamless loop */}
        {[...items, ...items].map((item, i) =>
          item.dot ? (
            <span key={i} className="marquee-dot">
              {item.text}
            </span>
          ) : (
            <span key={i} className={`marquee-item${item.serif ? " serif" : ""}`}>
              {item.text}
            </span>
          )
        )}
      </div>
    </div>
  );
}
