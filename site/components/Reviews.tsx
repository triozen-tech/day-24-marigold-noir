"use client";
import { useRef } from "react";
import { REVIEWS } from "../content";
import { secProg, sm, useFrame } from "./kit";

const POS = [
  { left: 30, bottom: 0, r: -4 },
  { left: 420, bottom: 10, r: 3 },
  { left: 760, bottom: 0, r: -2 },
  { left: 170, bottom: 100, r: 5 },
  { left: 600, bottom: 110, r: -6 },
];

/** Reviews · M236: the five quote tags fall in one after another and pile with small tilts as the section arrives; scrolling back lifts them out again. */
export default function Reviews() {
  const root = useRef<HTMLElement>(null);
  const tags = useRef<(HTMLElement | null)[]>([]);
  useFrame(root, (t, still) => {
    const p = still ? 1 : secProg(root.current!);
    tags.current.forEach((el, i) => {
      if (!el) return;
      const u = sm(p, 0.22 + i * 0.06, 0.46 + i * 0.06);
      const idle = still ? 0 : Math.sin(t * 0.8 + i * 1.3) * 1.5;
      el.style.translate = `0 ${(1 - u) * -520}px`;
      el.style.rotate = `${POS[i].r + (1 - u) * (i % 2 ? -22 : 22) + idle * u}deg`;
      el.style.opacity = String(Math.min(1, u * 3));
    });
  });
  return (
    <section ref={root} className="mn-sec">
      <span className="mn-eb">Kind words</span>
      <h2>What they <i>kept</i></h2>
      <div className="mn-pile">
        {REVIEWS.map((q, i) => (
          <div key={q} ref={(el) => { tags.current[i] = el; }} className="mn-tag" style={{ left: POS[i].left, bottom: POS[i].bottom }}>“{q}”</div>
        ))}
      </div>
    </section>
  );
}
