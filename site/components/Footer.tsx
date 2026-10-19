"use client";
import { useRef } from "react";
import FrameScrub from "@/components/video/FrameScrub";
import { approach, lerp, prog, sm, useFrame } from "./kit";

/**
 * Footer · FO01 + M146: film V4 scrubs as a dim backdrop while the giant wordmark docks small near the bottom and the closing
 * line and button come up; the last frames keep breathing when idle. It arrives through black (X12).
 */
export default function Footer() {
  const track = useRef<HTMLElement>(null);
  const wm = useRef<HTMLDivElement>(null);
  const cta = useRef<HTMLDivElement>(null);
  const black = useRef<HTMLDivElement>(null);
  useFrame(track, (_t, still) => {
    const a = still ? 1 : approach(track.current!);
    black.current!.style.opacity = String(1 - sm(a, 0.35, 1));
    const p = still ? 1 : prog(track.current!);
    const m = sm(p, 0.08, 0.62);
    wm.current!.style.transform = `translateY(${lerp(0, 360, m)}px) scale(${lerp(1, 0.22, m)})`;
    const w = sm(p, 0.5, 0.8);
    cta.current!.style.opacity = String(w);
    cta.current!.style.transform = `translateY(${(1 - w) * 30}px)`;
  });
  return (
    <footer ref={track} className="mn-ft-track">
      <div className="mn-pin mn-ft">
        <FrameScrub frames="/frames/marigold-noir-v4" section={track} stillAt={0.9} className="mn-film" />
        <div className="mn-ft-dim" />
        <div ref={wm} className="wm" data-anchor="wordmark">Marigold Noir</div>
        <div ref={cta} className="cta">
          <h3>Your day is <i>next</i></h3>
          <a className="mn-btn" href="#book" data-cursor="Hold">Hold your date</a>
        </div>
        <small><span>Concept website by Triozen Tech</span><span>Instagram · Contact · © 2026</span></small>
        <div ref={black} className="mn-ft-black" />
      </div>
    </footer>
  );
}
