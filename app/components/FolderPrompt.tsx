import Link from "next/link";

export default function FolderPrompt() {
  return (
    <section className="folder-prompt">
      <div className="container">
        <p className="pre reveal">
          Curious? <em>Check out my</em>
        </p>
        <Link href="/projects" className="folder reveal">
          <div className="icon">
            <div className="back" />
            <div className="front">/work</div>
          </div>
          <span className="lbl">Open the work folder →</span>
          <span className="arrow">↓</span>
        </Link>
      </div>
    </section>
  );
}
