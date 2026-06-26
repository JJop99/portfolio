export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="num">
            <span className="n">03</span> · About
          </div>
          <div className="about-content">
            <h2 className="reveal">
              Good code <span className="strike">takes time</span>
              <br />
              <em>— and working with me saves it.</em>
            </h2>

            <p
              className="reveal"
              style={{
                fontSize: "22px",
                lineHeight: 1.55,
                maxWidth: "700px",
                color: "var(--ink-2)",
              }}
            >
              Born in <em>Italy</em>, Computer Engineer from <em>Bologna</em> — one
              of the oldest engineering faculties in the world. Currently doing a
              Master in Artificial Intelligence at{" "}
              <em>Victoria University of Wellington</em>. Between degree and passport
              stamp, I spent two years as an electrician and carpenter rebuilding a
              family house from foundation to finishing. Best systems thinking I&apos;ve
              done had nothing to do with computers.
            </p>

            <blockquote className="pullquote reveal">
              I&apos;m happiest at the <em>seam</em>
              <br />
              between front-end
              <br />
              &amp; back-end.
            </blockquote>

            <div className="reasons reveal">
              <div className="reason">
                <h4>
                  I&apos;ve shipped <em>production</em> code —
                  <br />
                  internship, freelance, thesis. Not just side projects.
                </h4>
              </div>
              <div className="reason">
                <h4>
                  I own the <em>full stack</em>: database schema
                  <br />
                  to CSS animation. No handoffs, no translation loss.
                </h4>
              </div>
              <div className="reason">
                <h4>
                  I&apos;m studying <em>applied AI</em> right now —
                  <br />
                  the layer that makes the next wave of products.
                </h4>
              </div>
              <div className="reason">
                <h4>
                  I&apos;ve built with my hands, not just my laptop.
                  <br />
                  Same instinct for <em>getting it right</em>.
                </h4>
              </div>
            </div>

            <div className="hobbies reveal">
              <span className="hobbies-label">Outside the keyboard —</span>
              <ul className="hobbies-list">
                <li><em>Apiculture</em> — managing beehives since 2015</li>
                <li><em>Ultimate Frisbee</em> — ex-captain, Italian Serie B</li>
                <li><em>3D printing</em> — prototyping since 2015</li>
                <li><em>Renovation</em> — two years rebuilding <em>Ca&apos; Lisa</em> from foundation to finish</li>
              </ul>
            </div>

            <a
              className="learn-more"
              href="https://linkedin.com/in/jacopo-jop"
              target="_blank"
              rel="noreferrer"
            >
              Find me on LinkedIn <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
