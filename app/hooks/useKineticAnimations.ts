"use client";

import { useEffect } from "react";

export function useKineticAnimations() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFineCursor = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const bigMotionOk = !reduceMotion;

    const cleanups: (() => void)[] = [];

    // ── 1. Custom cursor ────────────────────────────────────────────────
    if (hasFineCursor) {
      const dot = document.getElementById("cursorDot");
      const ring = document.getElementById("cursorRing");
      if (dot && ring) {
        let mx = 0, my = 0, rx = 0, ry = 0;
        let rafId = 0;

        const onMouseMove = (e: MouseEvent) => {
          mx = e.clientX;
          my = e.clientY;
        };
        window.addEventListener("mousemove", onMouseMove);

        const loop = () => {
          dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
          rx += (mx - rx) * 0.18;
          ry += (my - ry) * 0.18;
          ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
          rafId = requestAnimationFrame(loop);
        };
        rafId = requestAnimationFrame(loop);

        const hoverables = document.querySelectorAll("a, button, .winshot, .folder, .stat, .marquee-track");
        hoverables.forEach((el) => {
          el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
          el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
        });

        document.querySelectorAll("p, h1, h2, h3, h4, blockquote, pre").forEach((el) => {
          el.addEventListener("mouseenter", () => document.body.classList.add("cursor-text"));
          el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-text"));
        });

        const onLeave = () => { dot.style.opacity = "0"; ring.style.opacity = "0"; };
        const onEnter = () => { dot.style.opacity = ""; ring.style.opacity = ""; };
        window.addEventListener("mouseleave", onLeave);
        window.addEventListener("mouseenter", onEnter);

        cleanups.push(() => {
          cancelAnimationFrame(rafId);
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("mouseleave", onLeave);
          window.removeEventListener("mouseenter", onEnter);
        });
      }
    } else {
      const dot = document.getElementById("cursorDot");
      const ring = document.getElementById("cursorRing");
      if (dot) dot.style.display = "none";
      if (ring) ring.style.display = "none";
    }

    // ── 2. Word-stagger reveal on big headlines ─────────────────────────
    if (bigMotionOk) {
      const wrapWords = (el: Element) => {
        if (el.getAttribute("data-ws-applied")) return;
        el.setAttribute("data-ws-applied", "1");
        el.classList.add("word-stagger");

        const wrap = (node: Element) => {
          [...node.childNodes].forEach((child) => {
            if (child.nodeType === Node.TEXT_NODE) {
              const text = child.textContent ?? "";
              const frag = document.createDocumentFragment();
              text.split(/(\s+)/).forEach((part) => {
                if (!part) return;
                if (/^\s+$/.test(part)) {
                  frag.appendChild(document.createTextNode(" "));
                } else {
                  const span = document.createElement("span");
                  span.className = "word";
                  span.textContent = part;
                  frag.appendChild(span);
                }
              });
              node.parentNode?.replaceChild(frag, child);
            } else if (child.nodeType === Node.ELEMENT_NODE) {
              const childEl = child as Element;
              if (childEl.tagName !== "BR") {
                const span = document.createElement("span");
                span.className = "word";
                childEl.parentNode?.insertBefore(span, childEl);
                span.appendChild(childEl);
              }
            }
          });
        };

        [...el.children].forEach((child) => {
          if ((child as HTMLElement).tagName !== "BR") wrap(child);
        });
        wrap(el);

        el.querySelectorAll(".word").forEach((w, i) => {
          (w as HTMLElement).style.transitionDelay = `${i * 0.04}s`;
        });
      };

      const headlines = [
        ...document.querySelectorAll(".massive .line"),
        ...document.querySelectorAll(".services-head h2"),
        ...document.querySelectorAll(".about-content h2"),
        ...document.querySelectorAll(".cta-section h2"),
      ];
      headlines.forEach(wrapWords);

      const wsIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              wsIo.unobserve(e.target);
            }
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
      );
      headlines.forEach((el) => wsIo.observe(el));
      cleanups.push(() => wsIo.disconnect());
    }

    // ── 3. Magnetic CTAs (proximity, not hover) ─────────────────────────
    if (hasFineCursor) {
      const magnetEls = [
        ...document.querySelectorAll<HTMLElement>(
          ".cta-section .email, .learn-more, .top-nav a.cta, .folder, .theme-toggle, .hero-tag, .scroll-cue"
        ),
      ];
      magnetEls.forEach((el) => el.classList.add("magnetic"));

      const RADIUS = 220;
      const STRENGTH = 0.35;

      interface CachedMagnet {
        el: HTMLElement;
        cx: number;
        cy: number;
      }
      let cached: CachedMagnet[] = [];
      let mouseX = 0, mouseY = 0;

      const cacheRects = () => {
        cached = magnetEls.map((el) => {
          const r = el.getBoundingClientRect();
          return { el, cx: r.left + r.width / 2, cy: r.top + r.height / 2 };
        });
      };
      cacheRects();

      const onMouseMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", cacheRects);
      window.addEventListener("scroll", cacheRects, { passive: true });

      let rafId = 0;
      const loop = () => {
        for (const m of cached) {
          const dx = mouseX - m.cx;
          const dy = mouseY - m.cy;
          const dist = Math.hypot(dx, dy);
          if (dist < RADIUS) {
            const t = 1 - dist / RADIUS;
            const ease = t * t;
            m.el.style.transform = `translate(${dx * STRENGTH * ease}px, ${dy * STRENGTH * ease}px)`;
          } else if (m.el.style.transform) {
            m.el.style.transform = "";
          }
        }
        rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);

      cleanups.push(() => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", cacheRects);
        window.removeEventListener("scroll", cacheRects);
      });
    }

    // ── 4. 3D orbit on winshot cards (proximity-based tilt) ─────────────
    if (hasFineCursor) {
      const cards = [...document.querySelectorAll<HTMLElement>(".winshot")];
      cards.forEach((c) => {
        c.style.perspective = "900px";
        c.style.willChange = "transform";
      });

      const RADIUS = 420;
      const MAX_TILT = 26;

      interface CardRect {
        el: HTMLElement;
        cx: number;
        cy: number;
        w: number;
        h: number;
      }
      let rects: CardRect[] = [];
      let mx = 0, my = 0;

      const cacheRects = () => {
        rects = cards.map((el) => {
          const r = el.getBoundingClientRect();
          return { el, cx: r.left + r.width / 2, cy: r.top + r.height / 2, w: r.width, h: r.height };
        });
      };
      cacheRects();

      const onMouseMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", cacheRects);
      window.addEventListener("scroll", cacheRects, { passive: true });

      let rafId = 0;
      const loop = () => {
        for (const c of rects) {
          const dx = mx - c.cx;
          const dy = my - c.cy;
          const dist = Math.hypot(dx, dy);
          if (dist > RADIUS) {
            if (c.el.style.transform) c.el.style.transform = "";
            continue;
          }
          const t = 1 - dist / RADIUS;
          const prox = t * t;
          const nx = Math.max(-1, Math.min(1, dx / (c.w * 0.5)));
          const ny = Math.max(-1, Math.min(1, dy / (c.h * 0.5)));
          const rotY = nx * MAX_TILT * prox;
          const rotX = -ny * MAX_TILT * prox;
          const lift = -10 * prox;
          c.el.style.transform = `translateY(${lift}px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        }
        rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);

      cleanups.push(() => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", cacheRects);
        window.removeEventListener("scroll", cacheRects);
      });
    }

    // ── 5. Count-up on stats ────────────────────────────────────────────
    if (bigMotionOk) {
      const parseStat = (text: string): { target: number | null; prefix: string; suffix: string } => {
        const m = text.match(/^(\D*?)(\d+)(\D*?)$/);
        if (!m) return { target: null, prefix: "", suffix: "" };
        return { target: parseInt(m[2], 10), prefix: m[1] ?? "", suffix: m[3] ?? "" };
      };

      const animateNumber = (el: HTMLElement, target: number, prefix: string, suffix: string) => {
        const dur = 1400;
        const start = performance.now();
        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
        const emHtml = el.querySelector("em")?.outerHTML ?? "";

        const tick = (now: number) => {
          const t = Math.min((now - start) / dur, 1);
          const val = Math.round(target * easeOut(t));
          if (emHtml) {
            el.innerHTML = prefix + val + emHtml + suffix;
          } else {
            el.textContent = prefix + val + suffix;
          }
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };

      const statIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const numEl = e.target.querySelector<HTMLElement>(".n");
            if (!numEl || numEl.dataset.counted) return;
            const raw = numEl.textContent?.trim() ?? "";
            const info = parseStat(raw);
            if (info.target === null) return;
            numEl.dataset.counted = "1";
            animateNumber(numEl, info.target, info.prefix, info.suffix);
            statIo.unobserve(e.target);
          });
        },
        { threshold: 0.5 }
      );
      document.querySelectorAll(".stat").forEach((s) => statIo.observe(s));
      cleanups.push(() => statIo.disconnect());
    }

    // ── 6. Scroll progress bar ──────────────────────────────────────────
    const sp = document.getElementById("scrollProgress");
    if (sp) {
      const updateProgress = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
        sp.style.width = pct + "%";
      };
      updateProgress();
      window.addEventListener("scroll", updateProgress, { passive: true });
      window.addEventListener("resize", updateProgress, { passive: true });
      cleanups.push(() => {
        window.removeEventListener("scroll", updateProgress);
        window.removeEventListener("resize", updateProgress);
      });
    }

    // ── 7. Hero parallax for floating decorations ───────────────────────
    // Subtle ≤0.4× velocity shift qualifies as UI affordance, not autoplay
    // animation — runs regardless of prefers-reduced-motion (same as cursor/magnetic).
    {
      const decos = [...document.querySelectorAll<HTMLElement>(".deco[data-speed]")];
      decos.forEach((d) => {
        const cs = getComputedStyle(d).transform;
        if (cs !== "none") d.dataset.baseTransform = cs;
      });

      let rafId = 0;
      const onScroll = () => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
          const y = window.scrollY;
          decos.forEach((d) => {
            const speed = parseFloat(d.dataset.speed ?? "0.5");
            const base = d.dataset.baseTransform ?? "";
            d.style.transform = `${base} translateY(${-y * speed * 0.4}px)`.trim();
          });
          rafId = 0;
        });
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => {
        window.removeEventListener("scroll", onScroll);
        cancelAnimationFrame(rafId);
      });
    }

    // ── Reveal on scroll (non-kinetic, but global) ─────────────────────
    const revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealIo.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealIo.observe(el));
    cleanups.push(() => revealIo.disconnect());

    return () => {
      cleanups.forEach((c) => c());
    };
  }, []);
}
