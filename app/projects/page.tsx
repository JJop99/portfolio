import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS, Project } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Jacopo Jop",
  description:
    "Seven projects from six years of building things — a thesis, a freelance site, internships, and what I'm tinkering with now.",
};

function projectDisplayUrl(p: Project): string {
  if (p.demo) {
    try {
      return new URL(p.demo).hostname;
    } catch {}
  }
  if (p.github) return p.github.replace("https://github.com/", "github/");
  return p.slug;
}

const VARIANTS = ["terra", "default", "ink", "terra", "ink", "default", "terra"] as const;

export default function ProjectsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="projects-hero">
        <div className="container">
          <div className="pj-eyebrow">№ 01 · Work</div>
          <h1 className="pj-headline">
            Selected <em>work.</em>
          </h1>
          <p className="pj-lede">
            Seven projects from six years of building things — a thesis, a freelance
            site, a few internships, and what I&apos;m tinkering with now.
          </p>
        </div>
      </section>

      {/* Project grid */}
      <section className="pj-section">
        <div className="container">
          <div className="pj-grid">
            {PROJECTS.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`pj-card pj-card--${VARIANTS[i % VARIANTS.length]}${i === 0 ? " pj-card--featured" : ""}`}
              >
                <div className="pj-card-top">
                  <div className="pj-dots">
                    <span className="pj-dot r" />
                    <span className="pj-dot y" />
                    <span className="pj-dot g" />
                    {project.label && (
                      <span className="pj-badge">{project.label}</span>
                    )}
                  </div>
                  <span className="pj-period">{project.period}</span>
                </div>
                <div className="pj-card-body">
                  <div className="pj-url">{projectDisplayUrl(project)}</div>
                  <h2 className="pj-title">{project.title}</h2>
                  <p className="pj-context">{project.context}</p>
                  <div className="pj-tags">
                    {project.tags.slice(0, 3).map((t) => (
                      <span key={t} className="pj-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="pj-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="projects-cta-strip">
        <div className="container">
          <Link href="/#contact" className="cta-strip-link">
            Need a developer? Let&apos;s talk →
          </Link>
        </div>
      </section>
    </main>
  );
}
