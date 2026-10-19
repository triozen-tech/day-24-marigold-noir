"use client";
import { useRef } from "react";
import { IMG } from "../content";
import { approach, lerp, prog, sm, useFrame } from "./kit";

/** The craft · M46: a ~1.5-screen pin; the scroll drags the gold divider across the lens, blurred on the left, sharp on the right. */
export default function Craft() {
  const track = useRef<HTMLElement>(null);
  const blur = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const vig = useRef<HTMLDivElement>(null);

  useFrame(track, (t, still) => {
    vig.current!.style.opacity = String(still ? 0 : 1 - sm(approach(track.current!), 0.25, 1)); // X15: the edges darken in, then reset
    const p = still ? 1 : sm(prog(track.current!), 0.05, 0.95);
    // divider runs right → left: the sharp side (truth) grows; a tiny idle wobble keeps it alive
    const x = lerp(92, 8, p) + (still ? 0 : Math.sin(t * 1.3) * 0.5);
    line.current!.style.left = `${x}%`;
    blur.current!.style.clipPath = `inset(0 ${100 - x}% 0 0)`;
  });

  return (
    <section ref={track} className="mn-craft-track">
      <div className="mn-pin mn-craft-pin">
        <div ref={vig} className="mn-vig" />
        <span className="mn-eb">The craft</span>
        <h2 style={{ marginBottom: 60 }}>Blur, then <i>truth</i></h2>
        <div className="mn-ba" data-cursor="Slide">
          <div className="mn-ph"><img src={IMG("c1-lens")} alt="Lens, sharp" /></div>
          <div ref={blur} className="mn-ph blur"><img src={IMG("c1-lens")} alt="" /></div>
          <div ref={line} className="line" data-anchor="lens" />
          <span className="lb" style={{ left: 20 }}>OUT OF FOCUS</span>
          <span className="lb" style={{ right: 20 }}>THE FRAME</span>
        </div>
      </div>
    </section>
  );
}
