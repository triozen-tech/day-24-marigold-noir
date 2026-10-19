"use client";
import { useRef } from "react";
import { FUNCTIONS, IMG } from "../content";
import { prog, sm, useFrame } from "./kit";

const X = [-540, -180, 180, 540];
const R = [-24, -8, 8, 24];

/** The functions · M241: a ~2.5-screen pin; the four cards start stacked and fan into a spread as you scroll (and back). */
export default function Functions() {
  const track = useRef<HTMLElement>(null);
  const cards = useRef<(HTMLElement | null)[]>([]);

  useFrame(track, (_t, still) => {
    const s = still ? 1 : sm(prog(track.current!), 0.08, 0.7);
    cards.current.forEach((c, i) => {
      if (!c) return;
      c.style.transform = `translateX(${X[i] * s}px) rotate(${R[i] * s + (1 - s) * (i - 1.5) * 1.5}deg)`;
      c.style.zIndex = String(i + 1);
    });
  });

  return (
    <section ref={track} className="mn-deck-track" id="functions">
      <div className="mn-pin mn-deck-pin">
        <span className="mn-eb" style={{ paddingTop: 130 }}>The functions</span>
        <h2>Four days, <i>one</i> story</h2>
        <div className="mn-deck">
          {FUNCTIONS.map((f, i) => (
            <div key={f.name} ref={(el) => { cards.current[i] = el; }} className="mn-card mn-ph" data-cursor="Open" data-anchor={i === 0 ? "haldi" : undefined} {...(i === 0 ? { "data-hover-demo": "" } : {})}>
              <img src={IMG(f.img)} alt={f.name} />
              <h3>{f.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
