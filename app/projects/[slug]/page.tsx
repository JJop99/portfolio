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

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="project-hero">
        <div className="container">
          <div className="project-eyebrow">№ {num} · The project</div>

          <h1 className="project-headline">{project.title}</h1>

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

          {/* Prev / Next */}
          <div className="proj-nav-cards">
            <div>
              {prev ? (
                <Link href={`/projects/${prev.slug}`} className="proj-nav-card">
                  <div className="proj-nav-dir">← Previous</div>
                  <div className="proj-nav-title">{prev.title}</div>
                </Link>
              ) : (
                <div />
              )}
            </div>
            <div>
              {next ? (
                <Link
                  href={`/projects/${next.slug}`}
                  className="proj-nav-card next"
                >
                  <div className="proj-nav-dir">Next →</div>
                  <div className="proj-nav-title">{next.title}</div>
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
