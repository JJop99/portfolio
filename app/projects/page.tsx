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

type MiniItem = { text: string; serif?: boolean; dot?: boolean };
const miniItems: MiniItem[] = [
  { text: "Internship" },
  { text: "●", dot: true },
  { text: "Thesis", serif: true },
  { text: "●", dot: true },
  { text: "Freelance" },
  { text: "●", dot: true },
  { text: "University", serif: true },
  { text: "●", dot: true },
  { text: "Personal" },
  { text: "●", dot: true },
];

export default function ProjectsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="projects-hero">
        <span className="deco d-proj-1" data-speed="0.3" aria-hidden="true">№</span>
        <span className="deco d-proj-2" data-speed="0.5" aria-hidden="true">№</span>
        <span className="deco d-proj-3" data-speed="0.1" aria-hidden="true">Seven projects. 2018 → 2025.</span>

        <div className="container">
          <div className="pj-info-pill">
            <span className="i-dot" />
            № 01 · 7 projects — 2018 → 2025
          </div>
          <h1 className="pj-headline">
            <span className="line">Selected</span>
            <span className="line"><em>work.</em></span>
          </h1>
          <p className="pj-lede">
            Seven projects from six years of building things — a thesis, a freelance
            site, a few internships, and what I&apos;m tinkering with now.
          </p>
        </div>
      </section>

      {/* Mini marquee */}
      <div className="marquee marquee--small" aria-hidden="true">
        <div className="marquee-track">
          {[...miniItems, ...miniItems].map((item, i) =>
            item.dot ? (
              <span key={i} className="marquee-dot">{item.text}</span>
            ) : (
              <span key={i} className={`marquee-item${item.serif ? " serif" : ""}`}>{item.text}</span>
            )
          )}
        </div>
      </div>

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
                    <span className="pj-num">№ {String(i + 1).padStart(2, "0")}</span>
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
