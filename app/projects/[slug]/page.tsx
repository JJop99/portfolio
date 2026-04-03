import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getAllSlugs, PROJECTS } from "@/lib/projects";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Jacopo Jop`,
    description: project.shortDescription,
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

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#070d1a", color: "#e2e8f0" }}>
      {/* Back nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070d1a]/90 backdrop-blur-md border-b border-teal-500/10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-slate-400 hover:text-teal-400 text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to projects
          </Link>
          <a
            href="https://github.com/JJop99"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-teal-400 text-sm hover:text-teal-300 transition-colors"
          >
            jacopo.jop
          </a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-24">
        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {project.label && (
              <span className="text-xs font-mono bg-teal-500/15 text-teal-400 border border-teal-500/25 px-3 py-1 rounded-full">
                {project.label}
              </span>
            )}
            <span className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded-full">
              {project.period}
            </span>
            <span className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded-full">
              {project.context}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            {project.fullDescription}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:border-teal-500/40 hover:text-teal-400 text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-400 text-[#070d1a] text-sm font-bold transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live demo
              </a>
            )}
            {project.pdfUrl && (
              <a
                href={project.pdfUrl}
                target="_blank"
                rel="noreferrer"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:border-teal-500/40 hover:text-teal-400 text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                {project.pdfLabel ?? "Download PDF"}
              </a>
            )}
          </div>
        </div>

        {/* Cover image */}
        <div className="rounded-2xl overflow-hidden border border-teal-500/10 mb-12 bg-white/3">
          <Image
            src={project.imageUrl}
            alt={`${project.title} preview`}
            width={1200}
            height={630}
            className="w-full object-cover"
            unoptimized
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2 space-y-10">
            {/* Highlights */}
            <section>
              <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full bg-teal-400 inline-block" />
                Key highlights
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-teal-400 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </section>

            {/* Tags */}
            <section>
              <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full bg-teal-400 inline-block" />
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="text-sm font-mono text-teal-400 bg-teal-500/8 border border-teal-500/20 px-3 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar: tech stack */}
          <aside className="space-y-4">
            <h2 className="text-lg font-bold text-white mb-1">Tech stack</h2>
            {project.techStack.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-teal-500/10 bg-white/[0.02] p-4"
              >
                <p className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-slate-300 bg-white/5 px-2.5 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </aside>
        </div>

        {/* Prev / Next navigation */}
        <div className="mt-20 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
          <div>
            {prev && (
              <Link
                href={`/projects/${prev.slug}`}
                className="group flex flex-col gap-1 p-4 rounded-xl border border-white/5 hover:border-teal-500/30 transition-colors"
              >
                <span className="text-xs text-slate-500 font-mono">← Previous</span>
                <span className="text-sm font-semibold text-slate-300 group-hover:text-teal-400 transition-colors">
                  {prev.title}
                </span>
              </Link>
            )}
          </div>
          <div className="flex justify-end">
            {next && (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex flex-col gap-1 p-4 rounded-xl border border-white/5 hover:border-teal-500/30 transition-colors text-right"
              >
                <span className="text-xs text-slate-500 font-mono">Next →</span>
                <span className="text-sm font-semibold text-slate-300 group-hover:text-teal-400 transition-colors">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
