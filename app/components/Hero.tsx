import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      {/* Floating decorations — parallax handled by useKineticAnimations */}
      <span className="deco glyph-serif d1" data-speed="0.4">{"{"}</span>
      <span className="deco glyph-serif d2" data-speed="0.4">{"}"}</span>
      <span className="deco glyph-mono d3" data-speed="0.6">;</span>
      <span className="deco glyph-mono d4" data-speed="0.7">&lt;/&gt;</span>
      <span className="deco glyph-mono d5" data-speed="0.5">// hello, world.</span>
      <span className="deco glyph-mono d6" data-speed="0.55">() =&gt; {"{ }"}</span>
      <span className="deco glyph-serif d7" data-speed="0.45">
        <em style={{ fontSize: "inherit", verticalAlign: 0 }}>+</em>
      </span>
      <span className="deco glyph-mono d8" data-speed="0.3">№ 01 — Hello</span>

      <div className="container hero-inner">
        <span className="hero-tag">
          <span className="dot" />
          Software developer
          <em>·</em>
          Bologna → Wellington
        </span>

        <h1 className="massive">
          <span className="line">Jacopo</span>
          <span className="line">
            <em className="first">J</em>op<span className="dot">.</span>
          </span>
        </h1>

        <div className="hero-sub">
          <span className="role">
            I build software <em>by hand</em>.
          </span>
          <span className="meta">
            <b>Wellington, NZ</b> · 2026
            <br />
            Open to roles, full-time.
          </span>
        </div>

        <Link href="#services" className="scroll-cue">
          <span>Keep scrolling</span>
          <span className="arr" />
        </Link>
      </div>
    </section>
  );
}
