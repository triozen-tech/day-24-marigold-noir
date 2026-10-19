"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { clipFrame, ensureClip } from "@/lib/frames";
import { loading } from "@/lib/loading";
import { OPEN_EVENT } from "./kit";

const THREAD = "M-20 150 Q720 330 1460 150";
const DOTS = 17;

/**
 * Loader · I39 "Toran hangs the wordmark": a thread draws across, marigold dots pop on along it, the wordmark hangs from the
 * middle and swings once, then the whole toran lifts away upward onto the hero (~1.2 s; waits only for the first hero frame
 * and the font). Sets `data-loader` so ?record=1 starts its clock after it.
 */
export default function Loader() {
  const root = useRef<HTMLDivElement>(null);
  const thread = useRef<SVGPathElement>(null);
  const swing = useRef<SVGGElement>(null);
  const dots = useRef<SVGGElement>(null);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const open = () => { (window as unknown as { __mnOpen?: boolean }).__mnOpen = true; window.dispatchEvent(new Event(OPEN_EVENT)); };
    if (prefersReducedMotion()) { open(); setGone(true); loading.markFinished(); return; }
    const el = root.current!, path = thread.current!, g = dots.current!, sw = swing.current!;
    const L = path.getTotalLength();
    // dots sit on the thread (the middle one is left free for the wordmark's cord)
    const pts = Array.from({ length: DOTS }, (_, i) => path.getPointAtLength((L * (i + 0.5)) / DOTS));
    const NS = "http://www.w3.org/2000/svg";
    const circles = pts.map((p, i) => {
      const c = document.createElementNS(NS, "circle");
      c.setAttribute("cx", String(p.x)); c.setAttribute("cy", String(p.y + 7));
      c.setAttribute("r", String(i % 2 ? 9 : 12));
      c.setAttribute("fill", i % 2 ? "#E08A1E" : "#C9A24E");
      g.appendChild(c);
      return c;
    });
    gsap.set(path, { strokeDasharray: L, strokeDashoffset: L });
    gsap.set(circles, { opacity: 0, scale: 0.4, transformOrigin: "50% 50%", svgOrigin: undefined });
    circles.forEach((c) => gsap.set(c, { transformBox: "fill-box", transformOrigin: "50% 50%" }));
    gsap.set(sw, { opacity: 0, rotation: 9, svgOrigin: "720 240" });

    first();
    function first() { ensureClip("/frames/marigold-noir-v1"); }
    let lifted = false;
    const lift = () => {
      if (lifted) return;
      lifted = true;
      open();
      gsap.to(el, { yPercent: -105, duration: 0.55, ease: "power3.in", onComplete: () => { setGone(true); loading.markFinished(); } });
    };
    let fontOk = false;
    document.fonts.load("400 64px Italiana").then(() => { fontOk = true; }, () => { fontOk = true; });
    const tl = gsap.timeline({ onComplete: () => {
      const poll = setInterval(() => { if (fontOk && clipFrame("/frames/marigold-noir-v1", 0)) { clearInterval(poll); lift(); } }, 40);
      setTimeout(() => { clearInterval(poll); lift(); }, 6000);
    } });
    tl.to(path, { strokeDashoffset: 0, duration: 0.5, ease: "power2.inOut" })
      .to(circles, { opacity: 1, scale: 1, duration: 0.28, ease: "back.out(2.2)", stagger: { each: 0.025 } }, 0.15)
      .to(sw, { opacity: 1, duration: 0.25 }, 0.5)
      .to(sw, { rotation: -6, duration: 0.3, ease: "sine.inOut" }, 0.5)
      .to(sw, { rotation: 3, duration: 0.25, ease: "sine.inOut" })
      .to(sw, { rotation: 0, duration: 0.2, ease: "sine.out" });
    return () => { tl.kill(); };
  }, []);

  if (gone) return null;
  return (
    <div ref={root} data-loader className="mn-ld" aria-hidden>
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <path ref={thread} d={THREAD} fill="none" stroke="#C9A24E" strokeWidth="2" />
        <g ref={dots} />
        <g ref={swing}>
          <line x1="720" y1="240" x2="720" y2="470" stroke="#C9A24E" strokeWidth="1.5" />
          <text x="720" y="560" textAnchor="middle" fontFamily="Italiana, serif" fontSize="92" fill="#ECE6DA">Marigold Noir</text>
        </g>
      </svg>
    </div>
  );
}
