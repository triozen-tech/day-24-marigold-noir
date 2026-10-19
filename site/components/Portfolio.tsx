"use client";
import { useRef } from "react";
import { IMG, SELECTS } from "../content";
import { lerp, secProg, sm, useFrame } from "./kit";

/** The selects · M428: two rows tilted −4° slide in opposite directions as the section crosses the screen and straighten to 0°; a slow idle drift keeps them moving. */
export default function Portfolio() {
  const root = useRef<HTMLElement>(null);
  const rows = useRef<(HTMLElement | null)[]>([]);
  useFrame(root, (t, still) => {
    const p = still ? 1 : secProg(root.current!);
    rows.current.forEach((el, r) => {
      if (!el) return;
      const idle = still ? 0 : Math.sin(t * 0.35 + r * 2) * 14;
      const x = r % 2 ? lerp(-1000, -420, p) : lerp(-520, -80, p);
      el.style.transform = `translateX(${x + idle}px) rotate(${-4 * (1 - sm(p, 0.3, 0.72))}deg)`;
    });
  });
  return (
    <section ref={root} className="mn-tr">
      <span className="mn-eb">Portfolio</span>
      <h2 style={{ marginBottom: 60 }}>The <i>selects</i></h2>
      {SELECTS.map((row, r) => (
        <div key={r} ref={(el) => { rows.current[r] = el; }} className="mn-row">
          {row.map((n) => (
            <div key={n} className="mn-ph" data-cursor="View"><img src={IMG(n)} alt="" /></div>
          ))}
        </div>
      ))}
    </section>
  );
}
