export default function StatsStrip() {
  return (
    <section className="stats-strip">
      <div className="container">
        <div className="stats-grid">
          <div className="stat reveal">
            <span className="n">
              6<em>+</em>
            </span>
            <span className="l">
              Years of CS · <em>Bologna</em>
            </span>
          </div>
          <div className="stat reveal">
            <span className="n">95</span>
            <span className="l">
              <em>Commits</em> · thesis
            </span>
          </div>
          <div className="stat reveal">
            <span className="n">87</span>
            <span className="l">Pages · group project</span>
          </div>
          <div className="stat reveal">
            <span className="n">∞</span>
            <span className="l">
              <em>Cups</em> of coffee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
