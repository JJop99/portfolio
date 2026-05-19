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
            I help teams ship
            <br />
            projects <em>like:</em>
          </h2>
        </div>

        {/* Row 01: Full-stack web applications */}
        <div className="service-row reveal">
          <div className="left">
            <h3>
              <em>01.</em> Full-stack
              <br />
              web applications.
            </h3>
            <p>
              End-to-end product builds — clean UIs, well-shaped APIs, the deploy
              pipeline included. Built to perform and convert.
            </p>
            <span className="drag-cue">
              <span className="arr">→</span> Scroll
            </span>
          </div>
          <div className="right">
            <ProjectCard slug="atena-srl-website" variant="terra" />
            <ProjectCard slug="apartment-expenses" />
            <ProjectCard slug="pagespeed-dashboard" variant="ink" />
          </div>
        </div>

        {/* Row 02: Performance & observability */}
        <div className="service-row reveal">
          <div className="left">
            <h3>
              <em>02.</em> Performance
              <br />
              &amp; observability.
            </h3>
            <p>
              Faster pages, deeper Web-Vitals analysis, and lasting performance
              budgets. Six years of academic study went into this.
            </p>
            <span className="drag-cue">
              <span className="arr">→</span> Scroll
            </span>
          </div>
          <div className="right">
            {/* Hand-authored code demo — not a real project card */}
            <Winshot
              variant="ink"
              code
              url="lighthouse.ts — 18 lines"
              style={{ flex: "0 0 520px" }}
            >
              <pre>
                <span className="com">// Lighthouse run — capture only the metrics that matter.</span>
                {"\n"}
                <span className="kw">const</span> result = <span className="kw">await</span>{" "}
                lighthouse(url, {"{"}
                {"\n  "}onlyCategories: [<span className="str">&apos;performance&apos;</span>],
                {"\n  "}formFactor: <span className="str">&apos;mobile&apos;</span>,
                {"}"});{"\n\n"}
                <span className="kw">const</span> {"{ lcp, cls, tbt }"} = result.audits;{"\n"}
                report({"{ lcp, cls, tbt }"});
              </pre>
            </Winshot>
            <ProjectCard slug="luca-jop" variant="terra" />
          </div>
        </div>

        {/* Row 03: AI integrations & applied LLMs */}
        <div className="service-row reveal">
          <div className="left">
            <h3>
              <em>03.</em> AI integrations
              <br />
              &amp; applied LLMs.
            </h3>
            <p>
              Wiring large language models into real products — locally, privately,
              with sensible defaults. Currently deep in the Master AI programme at{" "}
              <em>Victoria University of Wellington</em>.
            </p>
            <span className="drag-cue">
              <span className="arr">→</span> Scroll
            </span>
          </div>
          <div className="right">
            {/* Exploratory tile — no project page yet, links to GitHub */}
            <a
              href="https://github.com/JJop99"
              target="_blank"
              rel="noreferrer"
              style={{ display: "contents" }}
            >
              <Winshot
                url="llm-chat.local"
                title={
                  <>
                    <span className="acc">llama</span> 3.2
                    <br />
                    local.
                  </>
                }
                tags="anemll · M1 · 8B"
              />
            </a>
            <ProjectCard slug="lucajop-react" variant="ink" />
          </div>
        </div>

        {/* Row 04: Engineering practice */}
        <div className="service-row reveal">
          <div className="left">
            <h3>
              <em>04.</em> Engineering
              <br />
              practice.
            </h3>
            <p>
              Tests, infrastructure, documentation — the unglamorous half that makes
              the glamorous half last ten years.
            </p>
            <span className="drag-cue">
              <span className="arr">→</span> Scroll
            </span>
          </div>
          <div className="right">
            <ProjectCard slug="carphaul" />
            <ProjectCard slug="when-landing" variant="terra" />
          </div>
        </div>
      </div>
    </section>
  );
}
