"use client";
import { useEffect } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const sm = (p: number, a: number, b: number) => { const t = clamp((p - a) / (b - a)); return t * t * (3 - 2 * t); };
export const isStatic = () => prefersReducedMotion();
/** Scroll progress 0..1 of a tall track holding a sticky pin (pin = pin height in px). */
export const prog = (track: HTMLElement, pin = 900) => clamp(-track.getBoundingClientRect().top / Math.max(1, track.offsetHeight - pin));
/** How far an element has travelled across the viewport: 0 = its top touches the bottom edge, 1 = its bottom has left the top. */
export const secProg = (el: HTMLElement) => { const r = el.getBoundingClientRect(); return clamp((window.innerHeight - r.top) / (window.innerHeight + r.height)); };
/** 0..1 as an element's top rises from the bottom edge (900) to the top edge (0): the approach before a pin sticks. */
export const approach = (el: HTMLElement) => clamp(1 - el.getBoundingClientRect().top / 900);
/** Fired by the loader when it starts lifting (the hero entrance listens). */
export const OPEN_EVENT = "mn:open";
export const hasOpened = () => typeof window !== "undefined" && (window as unknown as { __mnOpen?: boolean }).__mnOpen === true;

/** Runs `fn(seconds, still)` every frame while `root` is within a screen of the viewport: a pure function of scroll + time. */
export function useFrame(root: React.RefObject<HTMLElement | null>, fn: (t: number, still: boolean) => void) {
  useEffect(() => {
    const still = isStatic();
    let raf = 0;
    const loop = () => {
      const el = root.current;
      if (el) {
        const r = el.getBoundingClientRect();
        if (still || (r.bottom > -900 && r.top < 1800)) fn(performance.now() / 1000, still);
      }
      if (!still) raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
