export default function CTASection() {
  return (
    <section className="cta-section" id="contact">
      <span className="deco glyph-sans d-cta-1">&lt;/&gt;</span>
      <span className="deco glyph-serif d-cta-2">+</span>
      <div className="container">
        <h2 className="reveal">
          Let&apos;s build
          <br />
          something <em>people remember.</em>
        </h2>
        <p className="sub reveal">
          Computer engineer in <em>Wellington, NZ</em>.<br />
          Freelance builds and full-time roles — remote or on-site.
        </p>
        <a href="mailto:jacopo.jop@gmail.com" className="email reveal">
          jacopo.jop@gmail.com <span className="arr">→</span>
        </a>
      </div>
    </section>
  );
}
