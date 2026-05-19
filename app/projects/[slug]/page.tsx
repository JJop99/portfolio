import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllSlugs, PROJECTS } from "@/lib/projects";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Jacopo Jop`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Jacopo Jop`,
      description: project.shortDescription,
      images: project.imageUrl ? [{ url: project.imageUrl }] : [],
    },
  };
}

// Words to italicise per slug (proper nouns / project names)
const ITALIC_WORDS: Record<string, string[]> = {
  "carphaul": ["CarpHaul"],
  "atena-srl-website": ["Atena"],
  "when-landing": ["When"],
};

function ItalicTitle({ slug, title }: { slug: string; title: string }) {
  const words = ITALIC_WORDS[slug] ?? [];
  if (words.length === 0) return <>{title}</>;
  const pattern = new RegExp(`(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  const parts = title.split(pattern);
  return (
    <>
      {parts.map((part, i) =>
        words.includes(part) ? <em key={i}>{part}</em> : part
      )}
    </>
  );
}

// Per-project stats displayed as a count strip (omitted for simpler projects)
const PROJECT_STATS: Record<string, { n: string; l: string }[]> = {
  "pagespeed-dashboard": [
    { n: "3", l: "Months internship" },
    { n: "3", l: "AWS services" },
    { n: "3", l: "Core Web Vitals" },
  ],
  "luca-jop": [
    { n: "95", l: "Commits" },
    { n: "2", l: "Frameworks" },
    { n: "4", l: "Metrics tracked" },
  ],
  "carphaul": [
    { n: "87", l: "Page document" },
    { n: "3", l: "Team members" },
    { n: "2", l: "Years of work" },
  ],
  "atena-srl-website": [
    { n: "2", l: "Test suites" },
    { n: "6", l: "Key highlights" },
    { n: "1", l: "CMS — zero redeploys" },
  ],
  "when-landing": [
    { n: "2018", l: "First pro project" },
    { n: "2", l: "App store badges" },
  ],
};

function projectDisplayUrl(slug: string, demo?: string, github?: string): string {
  if (demo) {
    try { return new URL(demo).hostname; } catch {}
  }
  if (github) return github.replace("https://github.com/", "github/");
  return slug;
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const prev = PROJECTS[currentIndex - 1];
  const next = PROJECTS[currentIndex + 1];
  const num = String(currentIndex + 1).padStart(2, "0");
  const stats = PROJECT_STATS[slug];
  const displayUrl = projectDisplayUrl(slug, project.demo, project.github);

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="project-hero">
        <span className="project-bg-num" aria-hidden="true">{num}</span>

        <div className="container">
          <div className="project-eyebrow">№ {num} · The project</div>

          <h1 className="project-headline">
            <ItalicTitle slug={slug} title={project.title} />
          </h1>

          <div className="project-rule" />

          <div className="project-meta-row">
            {project.label && (
              <span className="meta-label">{project.label}</span>
            )}
            {project.label && <span className="meta-sep">·</span>}
            <span className="meta-period">{project.period}</span>
            <span className="meta-sep">·</span>
            <span className="meta-context">{project.context}</span>
            {project.tags.slice(0, 4).map((t) => (
              <span key={t} className="meta-stack-pill">
                {t}
              </span>
            ))}
          </div>

          <p className="project-lede">{project.fullDescription}</p>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────── */}
      <div className="project-body">
        <div className="container">
          <div className="project-grid">
            {/* Main column */}
            <div className="project-main">
              {/* Pull-quote from first highlight */}
              <blockquote className="pullquote">
                {project.highlights[0]}
              </blockquote>

              {/* Inline stats strip */}
              {stats && (
                <section className="project-section">
                  <h2>By the numbers</h2>
                  <div className="project-stats">
                    {stats.map((s) => (
                      <div key={s.l} className="stat">
                        <span className="n">{s.n}</span>
                        <span className="l">{s.l}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Key highlights */}
              <section className="project-section">
                <h2>Key highlights</h2>
                <ul className="project-highlights">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </section>

              {/* Tech stack */}
              <section className="project-section">
                <h2>Tech stack</h2>
                {project.techStack.map((group) => (
                  <div key={group.category} className="tech-group">
                    <span className="tech-category">{group.category}</span>
                    <div className="tech-items">
                      {group.items.map((item) => (
                        <span key={item} className="tech-item">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            </div>

            {/* Sticky sidebar */}
            <aside className="project-aside">
              <div className="aside-block">
                <div className="aside-eyebrow">№ {num} · The project</div>

                {(project.github || project.demo || project.pdfUrl) && (
                  <>
                    <h3>External links</h3>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="aside-link"
                      >
                        <span>GitHub</span>
                        <span>↗</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="aside-link"
                      >
                        <span>Live demo</span>
                        <span>↗</span>
                      </a>
                    )}
                    {project.pdfUrl && (
                      <a
                        href={project.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="aside-link"
                      >
                        <span>{project.pdfLabel ?? "PDF"}</span>
                        <span>↗</span>
                      </a>
                    )}
                  </>
                )}

                <div style={{ marginTop: "24px", borderTop: "1px solid var(--rule)", paddingTop: "16px" }}>
                  <div className="aside-meta-row">
                    <span className="aside-meta-key">Period</span>
                    <span className="aside-meta-val">{project.period}</span>
                  </div>
                  <div className="aside-meta-row">
                    <span className="aside-meta-key">Context</span>
                    <span className="aside-meta-val">{project.context}</span>
                  </div>
                  {project.label && (
                    <div className="aside-meta-row">
                      <span className="aside-meta-key">Type</span>
                      <span className="aside-meta-val">{project.label}</span>
                    </div>
                  )}
                </div>
              </div>

              <Link href="/projects" className="aside-back">
                ← All projects
              </Link>
            </aside>
          </div>

          {/* Prev / Next — winshot chrome */}
          <div className="proj-nav-cards">
            <div>
              {prev ? (
                <Link href={`/projects/${prev.slug}`} className="proj-nav-card">
                  <div className="pnav-header">
                    <div className="pnav-dots">
                      <span className="pnav-dot r" />
                      <span className="pnav-dot y" />
                      <span className="pnav-dot g" />
                    </div>
                    <span className="pnav-url">
                      {projectDisplayUrl(prev.slug, prev.demo, prev.github)}
                    </span>
                  </div>
                  <div className="pnav-body">
                    <div className="proj-nav-dir">← Previous</div>
                    <div className="proj-nav-title">{prev.title}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>
            <div>
              {next ? (
                <Link href={`/projects/${next.slug}`} className="proj-nav-card next">
                  <div className="pnav-header">
                    <div className="pnav-dots">
                      <span className="pnav-dot r" />
                      <span className="pnav-dot y" />
                      <span className="pnav-dot g" />
                    </div>
                    <span className="pnav-url">
                      {projectDisplayUrl(next.slug, next.demo, next.github)}
                    </span>
                  </div>
                  <div className="pnav-body">
                    <div className="proj-nav-dir">Next →</div>
                    <div className="proj-nav-title">{next.title}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
