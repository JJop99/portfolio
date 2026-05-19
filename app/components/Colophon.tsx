import Link from "next/link";

export default function Colophon() {
  return (
    <footer className="colophon">
      <div className="container">
        <div className="colophon-grid">
          <div>
            <h5>Colophon</h5>
            <p className="intro">
              A portfolio of someone who studied <em>too much</em>, moved{" "}
              <em>too far</em>, and is now looking for the next thing.
            </p>
          </div>
          <div>
            <h5>Site made with</h5>
            <ul className="made-with">
              <li>Next.js 16</li>
              <li>Tailwind v4</li>
              <li>Geist</li>
              <li>Instrument Serif</li>
              <li>JetBrains Mono</li>
            </ul>
          </div>
          <div>
            <h5>Navigation</h5>
            <ul>
              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>
              <li>
                <Link href="/projects">Work</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Elsewhere</h5>
            <ul>
              <li>
                <a href="https://github.com/JJop99" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Coming soon"
                  style={{ pointerEvents: "none", opacity: 0.5 }}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:jacopo.jop@gmail.com">Email</a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="CV not available yet"
                  style={{ pointerEvents: "none", opacity: 0.5 }}
                >
                  CV.pdf
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mega-wordmark">
          <h2 className="name">
            Jacopo
            <br />
            <em>J</em>op
          </h2>
        </div>

        <div className="micro-footer">
          <span>© MMXXVI · JACOPO JOP</span>
          <span>
            <em>Software developer · Wellington, NZ</em>
          </span>
          <span>VERSION 0.6 · STUDIO KINETIC</span>
        </div>
      </div>
    </footer>
  );
}
