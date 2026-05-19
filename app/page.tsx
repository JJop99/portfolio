import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";
import { PROJECTS } from "@/lib/projects";

/* ── Navbar ─────────────────────────────────────────────────────────── */
function Navbar() {
  return (
    <header className="kit-header">
      <div className="kit-container">
        <div className="kit-top-row">
          <a className="kit-wordmark" href="#hero">
            Jacopo <em>J</em>op
          </a>
          <nav className="kit-nav">
            <a href="#about">About</a>
            <a href="#stack">Stack</a>
            <a href="#work">Work</a>
            <a href="#contact" className="cta">Get in touch</a>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}

/* ── SectionNum ─────────────────────────────────────────────────────── */
function SectionNum({ n, title, sub }: { n: string; title: string; sub: string }) {
  return (
    <div className="kit-s-num-block">
      <div className="num">
        <span className="n">{n}</span> · {title}
      </div>
      <div className="sub">{sub}</div>
    </div>
  );
}

/* ── Hero ───────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="kit-hero" id="hero">
      <div className="kit-container">
        <div className="kit-hero-meta">
          <span className="badge">№ 01 — Hello</span>
          <span>Software developer</span>
          <span className="dot">●</span>
          <span>Bologna → Wellington, NZ</span>
          <span className="dot">●</span>
          <span>Open to roles</span>
        </div>

        <h1>
          Software,<br />built <em>by hand</em>.
        </h1>

        <div className="kit-hero-grid">
          <p className="kit-hero-lead">
            I&apos;m <span className="place">Jacopo</span> — Computer Engineering,{" "}
            <em>Bologna</em>. Now in Wellington, building software across the stack
            and learning the applied AI craft.
          </p>
          <div className="kit-ks-list">
            <div className="kit-ks">
              <div className="k">Practice</div>
              <div className="v">Full-stack · AI</div>
            </div>
            <div className="kit-ks">
              <div className="k">Trained at</div>
              <div className="v">MSc Comp. Eng. · <em>Bologna</em></div>
            </div>
            <div className="kit-ks">
              <div className="k">Currently</div>
              <div className="v"><em>Wellington</em>, NZ</div>
            </div>
            <div className="kit-ks">
              <div className="k">Status</div>
              <div className="v">Open to opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── About ──────────────────────────────────────────────────────────── */
function About() {
  const cv: Array<[string, React.ReactNode]> = [
    ["2018–24", <><b>MSc Computer Engineering</b> · University of <em>Bologna</em></>],
    ["2022",    <><b>Internship</b> · Mumble S.R.L.</>],
    ["2023–24", <><b>Thesis</b> · SSR / CSR · Prof. Bellavista</>],
    ["2024",    <><b>Relocation</b> · Bologna → <em>Wellington</em></>],
    ["2025",    <><b>Freelance</b> · <em>Atena</em> S.r.l.</>],
    ["now",     <><b>Open to roles</b> · NZ · AI focus</>],
  ];

  return (
    <section className="kit-section" id="about">
      <div className="kit-container">
        <div className="kit-s-grid">
          <SectionNum n="02" title="About" sub="A note on the author" />
          <div>
            <h2 className="kit-s-title">
              Born in Italy, trained at <em>Bologna</em>,<br />
              currently at the bottom of the world.
            </h2>
            <div className="kit-about-cols">
              <div className="kit-prose">
                <p>
                  Six years of Computer Engineering taught me <em>how</em> systems
                  get built; two years of professional work taught me what they get
                  built for.
                </p>
                <p>
                  I&apos;m happiest at the seam between front-end and back-end —
                  where API contracts get drawn, where loading speed is won or lost,
                  where the decisions that survive ten years of maintenance get made.
                </p>
                <p>
                  Recently: neural networks, language models, the applied AI stack.
                  Looking for a team building something I&apos;d want to use.
                </p>
              </div>
              <div className="kit-cv-list">
                {cv.map(([y, t], i) => (
                  <div key={i} className="kit-cv-row">
                    <span className="y">{y}</span>
                    <span className="t">{t}</span>
                    <span className="arr">→</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Stack ──────────────────────────────────────────────────────────── */
function Stack() {
  const blocks = [
    { label: "Languages",        items: ["TypeScript", "JavaScript", "Python", "PHP", "HTML/CSS"] },
    { label: "Frameworks",       items: ["Next.js", "React", "Laravel", "Tailwind", "SASS"] },
    { label: "Tools / DevOps",   items: ["Docker", "AWS EC2", "Terraform", "Git", "MySQL"] },
    { label: "APIs / Libraries", items: ["REST", "Chart.js", "Material UI", "Axios", "Prisma"] },
  ];

  return (
    <section className="kit-section" id="stack">
      <div className="kit-container">
        <div className="kit-s-grid">
          <SectionNum n="03" title="Stack" sub="Operating envelope" />
          <div>
            <h2 className="kit-s-title">Tools of the <em>trade</em>.</h2>
            <div className="kit-stack">
              {blocks.map(({ label, items }) => (
                <div key={label} className="kit-stack-block">
                  <div className="label">{label}</div>
                  <div className="row">
                    {items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              ))}
              <div className="kit-stack-block acc" style={{ gridColumn: "span 2" }}>
                <div className="label">Currently studying</div>
                <div className="row">
                  <span>AI & ML</span>
                  <span>Neural networks</span>
                  <span>LLMs</span>
                  <span>Python AI stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Work ───────────────────────────────────────────────────────────── */
function Work() {
  const featured = PROJECTS.filter((p) => p.featured);
  const [first, ...rest] = featured;

  return (
    <section className="kit-section" id="work">
      <div className="kit-container">
        <div className="kit-s-grid">
          <SectionNum n="04" title="Work" sub="Selected projects" />
          <div>
            <h2 className="kit-s-title">A few things <em>built</em>.</h2>
            <div className="kit-work">

              {/* Large card — first featured */}
              {first && (
                <Link href={`/projects/${first.slug}`} className="kit-pj lg">
                  <div className="kit-pj-cover acc">
                    <p className="cover-h">{first.shortDescription}</p>
                    <div className="label">
                      № 01
                      <span className="yr">{first.context} · {first.period}</span>
                    </div>
                  </div>
                  <div className="kit-pj-body">
                    <div>
                      <span className="kit-pj-tag">{first.label ?? first.context} · {first.period}</span>
                      <h3>{first.title}</h3>
                      <p className="desc">{first.shortDescription}</p>
                    </div>
                    <div>
                      <div className="kit-pj-meta">
                        {first.tags.slice(0, 4).flatMap((t, i) =>
                          i === 0 ? [<span key={t}>{t}</span>] : [<span key={`d${i}`} className="dot">·</span>, <span key={t}>{t}</span>]
                        )}
                      </div>
                      <span className="kit-pj-cta">View project →</span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Medium cards — remaining featured */}
              {rest.map((p, i) => (
                <Link href={`/projects/${p.slug}`} key={p.slug} className="kit-pj md">
                  <div className="kit-pj-cover">
                    <p className="cover-h">{p.shortDescription}</p>
                    <div className="label">
                      № {String(i + 2).padStart(2, "0")}
                      <span className="yr">{p.context} · {p.period}</span>
                    </div>
                  </div>
                  <div className="kit-pj-body">
                    <span className="kit-pj-tag">{p.label ?? p.context} · {p.period}</span>
                    <h3>{p.title}</h3>
                    <p className="desc">{p.shortDescription}</p>
                    <div className="kit-pj-meta">
                      {p.tags.slice(0, 3).flatMap((t, j) =>
                        j === 0 ? [<span key={t}>{t}</span>] : [<span key={`d${j}`} className="dot">·</span>, <span key={t}>{t}</span>]
                      )}
                    </div>
                    <span className="kit-pj-cta">View project →</span>
                  </div>
                </Link>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Contact ────────────────────────────────────────────────────────── */
function Contact() {
  return (
    <section className="kit-contact" id="contact">
      <div className="kit-container">
        <div className="kit-s-grid">
          <SectionNum n="05" title="Contact" sub="An open channel" />
          <div>
            <div className="kit-c-pre">Open to opportunities · Wellington, NZ</div>
            <h2 className="kit-c-title">
              Let&apos;s build<br />something <em>good</em>.
            </h2>
            <div className="kit-c-actions">
              <a href="mailto:jacopo.jop@gmail.com" className="kit-email">
                jacopo.jop@gmail.com <span className="arr">→</span>
              </a>
              <div className="kit-c-other">
                <a href="https://github.com/JJop99" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="mailto:jacopo.jop@gmail.com">Email</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ─────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="kit-footer">
      <div className="kit-container">
        <div className="row">
          <span>© MMXXVI · Jacopo Jop</span>
          <span>
            <em>Set in Geist, Instrument Serif & JetBrains Mono. Made in Wellington.</em>
          </span>
          <span>v 0.5</span>
        </div>
      </div>
    </footer>
  );
}

/* ── Page ───────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
