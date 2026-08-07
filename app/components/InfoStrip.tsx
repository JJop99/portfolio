export default function InfoStrip() {
  return (
    <div className="info-strip">
      <div className="info-strip-inner">
        <div className="left">
          <span className="i-dot" />
          <span>Open to roles · Full-time</span>
        </div>
        <div className="right">
          <span>
            <em>Bologna → Wellington, NZ</em>
          </span>
          <span style={{ color: "var(--ink-3)" }}>·</span>
          <span>
            <em>v0.6</em> · Studio Kinetic
          </span>
        </div>
      </div>
    </div>
  );
}
