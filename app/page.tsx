"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

/* ─────────────────────────────── DATA ─────────────────────────────── */

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = {
  Languages: ["TypeScript", "JavaScript", "Python", "PHP", "HTML/CSS"],
  Frameworks: ["Next.js", "React.js", "Laravel", "Tailwind CSS", "SASS"],
  "Tools & DevOps": ["Docker", "AWS EC2", "Terraform", "Git", "MySQL"],
  "APIs & Libraries": [
    "REST APIs",
    "Chart.js",
    "Material UI",
    "Axios",
    "Prisma",
  ],
  "Currently Learning": [
    "AI / Machine Learning",
    "Neural Networks",
    "LLMs",
    "Python (AI stack)",
  ],
};


/* ─────────────────────────────── COMPONENTS ─────────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070d1a]/90 backdrop-blur-md border-b border-teal-500/10 py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="font-mono text-teal-400 font-semibold text-lg tracking-tight hover:text-teal-300 transition-colors"
        >
          jacopo<span className="text-slate-400">.</span>jop
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-400 hover:text-teal-400 text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/JJop99"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium bg-teal-500/10 border border-teal-500/30 text-teal-400 px-4 py-1.5 rounded-full hover:bg-teal-500/20 transition-colors"
          >
            GitHub ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-teal-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#070d1a]/95 backdrop-blur-md border-t border-teal-500/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-teal-400 font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState(0);
  const titles = [
    "Software Developer",
    "Full-Stack Engineer",
    "AI Enthusiast",
  ];

  useEffect(() => {
    let current = phase % titles.length;
    let i = 0;
    let typing = true;
    const full = titles[current];

    const tick = setInterval(() => {
      if (typing) {
        setDisplayed(full.slice(0, i + 1));
        i++;
        if (i === full.length) {
          typing = false;
          setTimeout(() => {}, 1200);
        }
      } else {
        setDisplayed(full.slice(0, i - 1));
        i--;
        if (i === 0) {
          setPhase((p) => p + 1);
          clearInterval(tick);
        }
      }
    }, typing ? 80 : 45);

    return () => clearInterval(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid"
    >
      {/* Glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        <p className="font-mono text-teal-400 text-sm tracking-widest mb-6 uppercase">
          👋 Based in Wellington, New Zealand
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-4">
          Jacopo Jop
        </h1>
        <div className="h-12 flex items-center justify-center mb-8">
          <span className="text-2xl sm:text-3xl gradient-text font-semibold font-mono">
            {displayed}
            <span className="animate-blink text-teal-400">|</span>
          </span>
        </div>
        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Computer Engineering graduate from the University of Bologna,
          passionate about building great software and exploring AI.
          Currently looking for new opportunities in NZ.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-400 text-[#070d1a] font-semibold text-sm transition-colors"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-teal-500/40 text-teal-400 hover:bg-teal-500/10 font-semibold text-sm transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center animate-float">
          <a href="#about" className="text-slate-600 hover:text-teal-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 max-w-6xl mx-auto px-6">
      <div className="section-line mb-16" />
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-mono text-teal-400 text-xs tracking-widest uppercase mb-3">
            01. About me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Building things that live on the web
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              I&apos;m a software developer with a Master&apos;s degree in Computer
              Engineering from the{" "}
              <span className="text-slate-200">University of Bologna</span>,
              where I spent 6 years studying systems, algorithms, and modern
              web architectures. My thesis explored server-side vs. client-side
              rendering in Next.js.
            </p>
            <p>
              After graduation I moved to{" "}
              <span className="text-slate-200">Wellington, New Zealand</span>,
              where I&apos;m continuing my studies with a focus on{" "}
              <span className="text-teal-400">Artificial Intelligence</span>{" "}
              and looking for a role where I can contribute to great products.
            </p>
            <p>
              I enjoy working across the full stack — from crafting clean UIs
              to designing backend APIs and infrastructure — and I&apos;m always
              looking to learn something new.
            </p>
          </div>
        </div>

        {/* Stats card */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "6+", label: "Years studying CS" },
            { value: "4+", label: "Projects shipped" },
            { value: "2022", label: "First internship" },
            { value: "NZ", label: "Based in Wellington" },
          ].map((s) => (
            <div key={s.label} className="card rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-1">
                {s.value}
              </div>
              <div className="text-slate-500 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-line mb-16" />
        <p className="font-mono text-teal-400 text-xs tracking-widest uppercase mb-3">
          02. Skills
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Technologies I work with
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="card rounded-2xl p-6">
              <h3 className="text-teal-400 font-mono text-sm font-semibold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 inline-block" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-teal-500/8 border border-teal-500/20 text-slate-300 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-28 max-w-6xl mx-auto px-6">
      <div className="section-line mb-16" />
      <p className="font-mono text-teal-400 text-xs tracking-widest uppercase mb-3">
        03. Projects
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
        Things I&apos;ve built
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <Link
            key={p.title}
            href={`/projects/${p.slug}`}
            className="card rounded-2xl p-7 flex flex-col gap-4 relative overflow-hidden group cursor-pointer"
          >
            {p.label && (
              <span className="absolute top-4 right-4 text-xs font-mono bg-teal-500/15 text-teal-400 border border-teal-500/25 px-2.5 py-0.5 rounded-full">
                {p.label}
              </span>
            )}

            <h3 className="text-xl font-bold text-white pr-24 group-hover:text-teal-300 transition-colors">{p.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed flex-1">
              {p.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-teal-400/80 bg-teal-500/8 px-2.5 py-0.5 rounded-full border border-teal-500/15"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-1 items-center">
              <span className="flex items-center gap-1.5 text-sm text-teal-400 font-semibold">
                View details
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <span
                onClick={(e) => { e.preventDefault(); window.open(p.github, "_blank"); }}
                className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-teal-400 transition-colors font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </span>
              {p.demo && (
                <span
                  onClick={(e) => { e.preventDefault(); window.open(p.demo, "_blank"); }}
                  className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-teal-400 transition-colors font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Demo
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://github.com/JJop99"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium text-sm border-b border-teal-400/30 hover:border-teal-300 pb-0.5 transition-colors"
        >
          See all projects on GitHub ↗
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 bg-white/[0.02]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="section-line mb-16" />
        <p className="font-mono text-teal-400 text-xs tracking-widest uppercase mb-3">
          04. Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Let&apos;s work together
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          I&apos;m actively looking for opportunities in New Zealand. Whether you
          have a role in mind, want to collaborate, or just want to say hi —
          my inbox is always open.
        </p>

        <a
          href="mailto:jacopo.jop@gmail.com"
          className="inline-block px-10 py-4 rounded-full bg-teal-500 hover:bg-teal-400 text-[#070d1a] font-bold text-base transition-colors mb-12"
        >
          Say hello ✉️
        </a>

        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/JJop99"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-teal-400 transition-colors font-medium text-sm"
          >
            GitHub
          </a>
          <a
            href="mailto:jacopo.jop@gmail.com"
            className="text-slate-500 hover:text-teal-400 transition-colors font-medium text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-teal-400/60 text-sm">
          jacopo<span className="text-slate-600">.</span>jop
        </span>
        <span className="text-slate-600 text-xs font-mono">
          Built with Next.js · Deployed on Vercel
        </span>
      </div>
    </footer>
  );
}

/* ─────────────────────────────── PAGE ─────────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
