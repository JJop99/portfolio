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
              Born in <em>Italy</em>, trained at <em>Bologna</em>, currently at the
              bottom of the world. Six years of Computer Engineering, two years of
              professional work, and the unshakeable feeling that{" "}
              <em>the best code is the one that still makes sense in five years</em>.
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
                  I bring <em>premium</em> visual direction
                  <br />
                  that makes your product feel <em>built</em>, not assembled.
                </h4>
              </div>
              <div className="reason">
                <h4>
                  I care about the <em>craft</em>,
                  <br />
                  from API contract to final pixel.
                </h4>
              </div>
              <div className="reason">
                <h4>
                  I define <em>scalable</em> design systems
                  <br />
                  and architectures that keep growing.
                </h4>
              </div>
              <div className="reason">
                <h4>
                  I align <em>your goals</em>
                  <br />
                  with my experience to make the right calls.
                </h4>
              </div>
            </div>

            <a className="learn-more" href="#">
              Learn more about me <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
