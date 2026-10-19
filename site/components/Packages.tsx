"use client";
import { useRef } from "react";
import { PACKAGES } from "../content";
import { prog, sm, useFrame } from "./kit";

/** Packages · M40: a ~2-screen pin; the three bars rise and settle in turn, each landing on top of the last (gold-bordered middle bar included). */
export default function Packages() {
  const track = useRef<HTMLElement>(null);
  const bars = useRef<(HTMLElement | null)[]>([]);
  useFrame(track, (_t, still) => {
    const p = still ? 1 : prog(track.current!);
    bars.current.forEach((el, i) => {
      if (!el) return;
      const s = sm(p, 0.06 + i * 0.24, 0.34 + i * 0.24);
      el.style.translate = `0 ${(1 - s) * 760}px`;
      el.style.opacity = String(0.2 + 0.8 * s);
      el.style.zIndex = String(i + 1);
    });
  });
  return (
    <section ref={track} className="mn-pk-track" id="packages">
      <div className="mn-pin mn-pk-pin">
        <span className="mn-eb">Packages</span>
        <h2 style={{ marginBottom: 56 }}>Choose your <i>coverage</i></h2>
        <div className="mn-pk">
          {PACKAGES.map((p, i) => (
            <div key={p.name} ref={(el) => { bars.current[i] = el; }} className="mn-bar" data-cursor="Hold" {...(p.feature ? { "data-hover-demo": "" } : {})}>
              <div><h3>{p.name}</h3><small>{p.meta}</small></div>
              <div className="pr">{p.price}<small>sample</small></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
