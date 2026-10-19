"use client";
import { useRef } from "react";
import { FUNCTIONS, IMG } from "../content";
import { clamp, prog, sm, useFrame } from "./kit";

const X = [-540, -180, 180, 540];
const R = [-18, -6, 6, 18];

/** The functions · M241: a ~2.5-screen pin; the four cards start stacked and fan into a spread as you scroll (and back). */
export default function Functions() {
  const track = useRef<HTMLElement>(null);
  const cards = useRef<(HTMLElement | null)[]>([]);
  const dim = useRef<HTMLDivElement>(null);

  useFrame(track, (_t, still) => {
    const s = still ? 1 : sm(prog(track.current!), 0.08, 0.7);
    cards.current.forEach((c, i) => {
      if (!c) return;
      c.style.transform = `translateX(${X[i] * s}px) rotate(${R[i] * s + (1 - s) * (i - 1.5) * 1.5}deg)`;
      c.style.zIndex = String(i + 1);
    });
    // X1 overlap slide: the next section (seven rounds) rises over this pinned one, which dims
    const nx = document.getElementById("rounds");
    dim.current!.style.opacity = nx && !still ? String(0.7 * clamp(1 - nx.getBoundingClientRect().top / 900)) : "0";
  });

  return (
    <section ref={track} className="mn-deck-track" id="functions">
      <div className="mn-pin mn-deck-pin">
        <div ref={dim} className="mn-dimmer" />
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
