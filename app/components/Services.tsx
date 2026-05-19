import Winshot from "./Winshot";

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

        {/* Service 1: Full-stack */}
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
            <Winshot
              variant="terra"
              url="atenabuildings.com"
              title="Atena S.r.l."
              tags="Next.js · Sanity · Vercel"
            />
            <Winshot
              url="apartment-expenses"
              title={
                <>
                  <span className="acc">Apartment</span>
                  <br />
                  Expenses.
                </>
              }
              tags="TypeScript · Next.js"
            />
            <Winshot
              variant="ink"
              url="pagespeed-dashboard"
              title={
                <>
                  PageSpeed
                  <br />
                  <span className="acc">Dashboard.</span>
                </>
              }
              tags="React · Laravel · AWS"
            />
          </div>
        </div>

        {/* Service 2: Performance */}
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
            <Winshot
              variant="ink"
              code
              url="lighthouse.ts — 18 lines"
              className="code"
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
            <Winshot
              variant="terra"
              url="SSR vs CSR — thesis"
              title={
                <>
                  Server vs
                  <br />
                  Client.
                </>
              }
              tags="Univ. Bologna · 2024"
            />
          </div>
        </div>

        {/* Service 3: AI integrations */}
        <div className="service-row reveal">
          <div className="left">
            <h3>
              <em>03.</em> AI integrations
              <br />
              &amp; applied LLMs.
            </h3>
            <p>
              Wiring large language models into real interfaces — locally, privately,
              with sensible defaults. Currently studying the stack.
            </p>
            <span className="drag-cue">
              <span className="arr">→</span> Scroll
            </span>
          </div>
          <div className="right">
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
            <Winshot
              variant="ink"
              url="/v1/chat — completions"
              title={
                <>
                  Private by
                  <br />
                  <span className="acc">design.</span>
                </>
              }
              tags="No data leaves the machine."
            />
          </div>
        </div>

        {/* Service 4: Engineering practice */}
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
            <Winshot
              url="CarpHaul · UML"
              title={<span className="acc">CarpHaul.</span>}
              tags="87 pages · UML · risk plan"
            />
            <Winshot
              variant="terra"
              url="terraform-apply.log"
              title={
                <>
                  Infra as
                  <br />
                  code.
                </>
              }
              tags="Docker · AWS · Terraform"
            />
            <Winshot
              url="vitest + playwright"
              title={
                <em>
                  <span className="acc">Tested.</span>
                </em>
              }
              tags="Unit · E2E"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
