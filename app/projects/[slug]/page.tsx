import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllSlugs, PROJECTS } from "@/lib/projects";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Jacopo Jop`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const prev = PROJECTS[currentIndex - 1];
  const next = PROJECTS[currentIndex + 1];

  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>

      {/* Nav */}
      <nav className="kit-project-nav">
        <div className="kit-container">
          <div className="kit-project-nav-row">
            <Link href="/#work" className="kit-back">← Back to work</Link>
            <span style={{ font: "var(--type-meta)", letterSpacing: "0.15em", color: "var(--ink-3)" }}>
              jacopo.jop
            </span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="kit-project-header">
        <div className="kit-container">
          <div className="kit-project-pills">
            {project.label && <span className="kit-pill acc">{project.label}</span>}
            <span className="kit-pill">{project.period}</span>
            <span className="kit-pill">{project.context}</span>
          </div>
          <h1 className="kit-project-title">{project.title}</h1>
          <p className="kit-project-lead">{project.fullDescription}</p>
          <div className="kit-project-ctas">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="kit-btn">
                ↗ GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="kit-btn primary">
                ↗ Live demo
              </a>
            )}
            {project.pdfUrl && (
              <a href={project.pdfUrl} target="_blank" rel="noreferrer" download className="kit-btn">
                ↓ {project.pdfLabel ?? "Download PDF"}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="kit-project-body">
        <div className="kit-container">
          <div className="kit-project-grid">

            {/* Highlights */}
            <ul className="kit-highlights">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            {/* Sidebar */}
            <aside>
              <div className="kit-sidebar-block">
                <div className="kit-sidebar-label">Technologies</div>
                <div className="kit-tag-row">
                  {project.tags.map((t) => (
                    <span key={t} className="kit-tag">{t}</span>
                  ))}
                </div>
              </div>
              {project.techStack.map((group) => (
                <div key={group.category} className="kit-sidebar-block">
                  <div className="kit-sidebar-label">{group.category}</div>
                  <div className="kit-tag-row">
                    {group.items.map((item) => (
                      <span key={item} className="kit-tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </aside>
          </div>

          {/* Prev / Next */}
          <div className="kit-project-nav-cards">
            <div>
              {prev && (
                <Link href={`/projects/${prev.slug}`} className="kit-nav-card">
                  <div className="dir">← Previous</div>
                  <div className="title">{prev.title}</div>
                </Link>
              )}
            </div>
            <div>
              {next && (
                <Link href={`/projects/${next.slug}`} className="kit-nav-card next">
                  <div className="dir">Next →</div>
                  <div className="title">{next.title}</div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
