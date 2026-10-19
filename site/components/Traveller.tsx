"use client";
import { useEffect, useRef } from "react";
import { clamp, isStatic, lerp, sm } from "./kit";

/**
 * Traveller · F1: one marigold petal (cut-out PNG) rests at seven measured anchors and glides between them along the right
 * gutter, fading where it would cross text. Anchors are read live (`data-anchor`) and cached while off screen. It bobs and
 * turns slowly when idle and is hidden in ?static=1.
 */
type Stop = { sel: string; at: () => number; fx: number; fy: number; dx: number; dy: number; fall: [number, number] };
const top = (sel: string) => (document.querySelector(sel) as HTMLElement | null)?.offsetTop ?? 0;
const STOPS = (): Stop[] => [
  { sel: ".mn-glow", at: () => 0, fx: 0.5, fy: 0.5, dx: 0, dy: 70, fall: [720, 560] },
  { sel: "[data-anchor=pillar]", at: () => 1300, fx: 0.5, fy: 0.5, dx: 0, dy: 0, fall: [270, 560] },
  { sel: "[data-anchor=haldi]", at: () => top("#functions") + 1575, fx: 0.5, fy: 0, dx: 0, dy: 6, fall: [420, 220] },
  { sel: "[data-anchor=flame]", at: () => top("#rounds") + 2250, fx: 0.5, fy: 0.5, dx: -190, dy: -120, fall: [530, 600] },
  { sel: "[data-anchor=lens]", at: () => top(".mn-craft-track") + 700, fx: 0.5, fy: 0.5, dx: 0, dy: 0, fall: [720, 450] },
  { sel: "[data-anchor=album]", at: () => top("#album") + 1650, fx: 0.97, fy: 0.04, dx: -6, dy: 6, fall: [680, 130] },
  { sel: "[data-anchor=wordmark]", at: () => top(".mn-ft-track") + 760, fx: 0.07, fy: 0.55, dx: 0, dy: 0, fall: [560, 790] },
];

export default function Traveller() {
  const el = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (isStatic()) return;
    const stops = STOPS();
    const cache = stops.map((s) => [s.fall[0], s.fall[1]] as [number, number]);
    let raf = 0, cx = -200, cy = -200, init = false;
    const loop = () => {
      const y = window.scrollY;
      const S = stops.map((s) => s.at());
      stops.forEach((s, i) => {
        const a = document.querySelector(s.sel) as HTMLElement | null;
        if (!a) return;
        const r = a.getBoundingClientRect();
        const px = r.left + r.width * s.fx + s.dx, py = r.top + r.height * s.fy + s.dy;
        if (Math.abs(y - S[i]) < 500 && py > 0 && py < 900) cache[i] = [px, py];
      });
      let i = 0;
      while (i < S.length - 2 && y >= S[i + 1]) i++;
      const t = clamp((y - S[i]) / Math.max(1, S[i + 1] - S[i]));
      const e = y <= S[0] ? 0 : y >= S[S.length - 1] ? 1 : sm(t, 0.18, 0.82);
      const a = cache[i], b = cache[Math.min(i + 1, S.length - 1)];
      const mid = Math.sin(Math.PI * e);
      let tx = lerp(a[0], b[0], e), ty = lerp(a[1], b[1], e);
      tx += (1385 - tx) * mid * 0.85;
      let op = 1 - 0.92 * Math.pow(mid, 0.7);
      if (y >= S[S.length - 1]) op = 1 - sm(y, S[S.length - 1], S[S.length - 1] + 120);
      const now = performance.now() / 1000;
      if (!init) { cx = tx; cy = ty; init = true; }
      cx += (tx - cx) * 0.12; cy += (ty - cy) * 0.12;
      const bob = Math.sin(now * 1.1) * 6, turn = Math.sin(now * 0.7) * 14 + e * 40 + i * 18;
      const n = el.current;
      if (n) {
        n.style.transform = `translate(${(cx - 24).toFixed(1)}px, ${(cy - 24 + bob).toFixed(1)}px) rotate(${turn.toFixed(1)}deg)`;
        n.style.opacity = String(op.toFixed(3));
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <img ref={el} className="mn-petal" src="/images/marigold-noir/petal.png" alt="" aria-hidden style={{ opacity: 0 }} />;
}
