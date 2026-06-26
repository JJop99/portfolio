import Link from "next/link";
import { PROJECTS, Project } from "@/lib/projects";
import Winshot from "./Winshot";

function projectDisplayUrl(p: Project): string {
  if (p.demo) {
    try {
      return new URL(p.demo).hostname;
    } catch {}
  }
  if (p.github) return p.github.replace("https://github.com/", "github/");
  return p.slug;
}

function ProjectCard({
  slug,
  variant = "default",
  style,
}: {
  slug: string;
  variant?: "default" | "terra" | "ink";
  style?: React.CSSProperties;
}) {
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return null;
  return (
    <Link href={`/projects/${slug}`} style={{ display: "contents" }}>
      <Winshot
        variant={variant}
        url={projectDisplayUrl(p)}
        title={p.title}
        tags={p.tags.slice(0, 3).join(" · ")}
        style={style}
      />
    </Link>
  );
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-head reveal">
          <div className="num">
            <span className="n">02</span> · Practice
          </div>
          <h2>
            Things I&apos;ve
            <br />
            actually <em>built:</em>
          </h2>
        </div>

        {/* Row 01: Internship — Mumble S.r.l. */}
        <div className="service-row reveal">
          <div className="left">
            <h3>
              <em>01.</em> Internship
              <br />
              Mumble S.r.l.
            </h3>
            <p>
              Three months building a full-stack React app in a professional
              team — my first production deployment. Earned a written
              recommendation from the CEO.
            </p>
            <span className="drag-cue">
              <span className="arr">→</span> Scroll
            </span>
          </div>
          <div className="right">
            <ProjectCard slug="pagespeed-dashboard" variant="terra" style={{ flex: "0 0 480px" }} />
          </div>
        </div>

        {/* Row 02: Bachelor's Thesis */}
        <div className="service-row reveal">
          <div className="left">
            <h3>
              <em>02.</em> Bachelor&apos;s
              <br />
              thesis — Unibo.
            </h3>
            <p>
              Built the same website twice — once in Next.js (SSR), once in
              React (CSR) — then benchmarked them head-to-head on Core Web
              Vitals, SEO, and load performance.
            </p>
            <span className="drag-cue">
              <span className="arr">→</span> Scroll
            </span>
          </div>
          <div className="right">
            <ProjectCard slug="luca-jop" variant="ink" />
            <ProjectCard slug="lucajop-react" />
          </div>
        </div>

        {/* Row 03: Freelance */}
        <div className="service-row reveal">
          <div className="left">
            <h3>
              <em>03.</em> Freelance
              <br />
              client work.
            </h3>
            <p>
              Production websites for real clients — CMS-driven, tested, and
              maintained. From a 2018 app landing page to a 2025 headless
              corporate site with Playwright E2E tests.
            </p>
            <span className="drag-cue">
              <span className="arr">→</span> Scroll
            </span>
          </div>
          <div className="right">
            <ProjectCard slug="atena-srl-website" variant="terra" />
            <ProjectCard slug="when-landing" variant="ink" />
          </div>
        </div>

        {/* Row 04: University, Personal & Craft */}
        <div className="service-row reveal">
          <div className="left">
            <h3>
              <em>04.</em> University,
              <br />
              personal &amp; hands-on.
            </h3>
            <p>
              A carpooling platform, a shared-expenses app, and two years
              rebuilding a farmhouse from bare walls — electrician, carpenter,
              mason, and Daikin heat-pump installer.
            </p>
            <span className="drag-cue">
              <span className="arr">→</span> Scroll
            </span>
          </div>
          <div className="right">
            <ProjectCard slug="carphaul" />
            <ProjectCard slug="apartment-expenses" variant="terra" />
            <ProjectCard slug="ca-lisa" variant="ink" />
          </div>
        </div>
      </div>
    </section>
  );
}
