"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import FrameScrub from "@/components/video/FrameScrub";
import { HERO } from "../content";
import { OPEN_EVENT, hasOpened, isStatic, prog, sm, useFrame } from "./kit";

/**
 * Hero · M328 + M37: the title's words rise out of blur one by one when the loader lifts (M328); a warm light breathes behind it
 * (M37, CSS); film V1 (the mandap push-in with falling petals) scrubs with the scroll over a 2.4-screen pin, and the title leaves
 * as the camera pushes in.
 */
export default function Hero() {
  const track = useRef<HTMLElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const sub = useRef<HTMLDivElement>(null);
  const fade = useRef<HTMLDivElement>(null);
  const ent = useRef(isStatic() ? 1 : 0);

  useEffect(() => {
    if (isStatic()) return;
    const words = title.current!.querySelectorAll("[data-word]");
    gsap.set(words, { opacity: 0, y: 26, filter: "blur(8px)" });
    gsap.set(sub.current, { opacity: 0 });
    const play = () => {
      gsap.to(words, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out", stagger: 0.14, onComplete: () => { words.forEach((w) => ((w as HTMLElement).style.filter = "")); } });
      gsap.to(ent, { current: 1, duration: 1.2 });
      gsap.to(sub.current, { opacity: 1, duration: 1, delay: 0.7 });
    };
    if (hasOpened()) play(); else window.addEventListener(OPEN_EVENT, play, { once: true });
    return () => window.removeEventListener(OPEN_EVENT, play);
  }, []);

  useFrame(track, () => {
    const p = prog(track.current!);
    const out = sm(p, 0.35, 0.7);
    const h = title.current!;
    h.style.transform = `translateY(${-out * 60}px)`;
    fade.current!.style.opacity = String(isStatic() ? 0 : sm(window.scrollY, 1900, 2450)); // X12: the film goes through black into the next section
    h.parentElement!.style.setProperty("--out", String(1 - out));
    sub.current!.style.setProperty("--out", String(1 - sm(p, 0.1, 0.3)));
  });

  return (
    <section ref={track} className="mn-hero-track" id="top">
      <div className="mn-pin mn-hero">
        <FrameScrub frames="/frames/marigold-noir-v1" stillAt={0} className="mn-film" />
        <div className="mn-hero-shade" />
        <div className="mn-glow" />
        <div ref={fade} className="mn-hero-fade" />
        <div className="mn-pillar" data-anchor="pillar" />
        <div className="mn-title" style={{ opacity: "var(--out, 1)" }}>
          <div className="mn-title-shade" />
          <h1 ref={title}>
            {HERO.lines.map((l, i) => (
              <span key={i} style={{ display: "block" }}>
                {l.map((w, j) => (
                  <span key={j} data-word style={{ marginRight: "0.25em" }}>{w === "gold" ? <i>{w}</i> : w}</span>
                ))}
              </span>
            ))}
          </h1>
        </div>
        <div ref={sub} className="sub" style={{ opacity: "var(--out, 1)" }}>{HERO.sub}</div>
      </div>
    </section>
  );
}
