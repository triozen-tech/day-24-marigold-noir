"use client";
import { useRef } from "react";
import FrameScrub from "@/components/video/FrameScrub";
import { ROUNDS } from "../content";
import { prog, sm, useFrame } from "./kit";

/**
 * Seven rounds (signature) · M422: a ~5-screen pin; film V2 (the sacred flame) scrubs under a hairline gold progress line that
 * fills across seven nodes (I–VII); each node lights as the fill reaches it, the caption counts the round. The flame breathes
 * when idle (FrameScrub's breath).
 */
export default function Rounds() {
  const track = useRef<HTMLElement>(null);
  const fill = useRef<HTMLDivElement>(null);
  const cap = useRef<HTMLDivElement>(null);
  const nodes = useRef<(HTMLElement | null)[]>([]);
  const last = useRef(-1);

  useFrame(track, (_t, still) => {
    const p = still ? 1 : prog(track.current!);
    const f = still ? 1 : sm(p, 0.06, 0.94);
    fill.current!.style.transform = `scaleX(${f})`;
    let n = 0;
    nodes.current.forEach((el, i) => {
      const lit = f >= i / 6 - 0.001 && (i === 0 ? p > 0.02 || still : true);
      el?.classList.toggle("lit", lit);
      if (lit) n = i + 1;
    });
    if (n !== last.current) { last.current = n; cap.current!.textContent = n ? `Round ${ROUNDS[n - 1]} of VII` : "Before the fire"; }
  });

  return (
    <section ref={track} className="mn-rounds-track" id="rounds">
      <div className="mn-pin mn-rounds">
        <FrameScrub frames="/frames/marigold-noir-v2" stillAt={0.55} className="mn-film" />
        <div className="shade" />
        <h2><span className="mn-eb" style={{ marginBottom: 14 }}>The ceremony</span>Seven rounds</h2>
        <div ref={cap} className="mn-cap" />
        <div className="mn-tl" data-anchor="flame">
          <div ref={fill} className="fill" />
          {ROUNDS.map((r, i) => (
            <i key={r} ref={(el) => { nodes.current[i] = el; }} style={{ left: `${(i / 6) * 100}%` }}><span>{r}</span></i>
          ))}
        </div>
      </div>
    </section>
  );
}
