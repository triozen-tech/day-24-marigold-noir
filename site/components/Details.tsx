"use client";
import { useRef } from "react";
import { DETAILS, IMG } from "../content";
import { sm, secProg, useFrame } from "./kit";

const DX = [-140, 60, 150, 210, -90];
const DY = [170, 280, -130, 190, 250];
const SC = [0.12, 0.28, 0.1, 0.32, 0.2];

/** The details · M147: five stills at five depths drift and scale at different rates and settle into the cluster as the section scrolls; a slow drift keeps them alive when stopped. */
export default function Details() {
  const root = useRef<HTMLElement>(null);
  const els = useRef<(HTMLElement | null)[]>([]);
  useFrame(root, (t, still) => {
    const p = still ? 1 : secProg(root.current!);
    els.current.forEach((el, i) => {
      if (!el) return;
      const u = sm(p, 0.08 + i * 0.03, 0.55 + i * 0.04);
      const idle = still ? 0 : Math.sin(t * 0.5 + i * 1.7) * 4;
      el.style.translate = `${DX[i] * (1 - u)}px ${DY[i] * (1 - u) + idle}px`;
      el.style.scale = String(1 + SC[i] * (1 - u));
      el.style.opacity = String(0.25 + 0.75 * sm(p, 0.04 + i * 0.03, 0.3 + i * 0.03));
    });
  });
  return (
    <section ref={root} className="mn-sec" style={{ paddingBottom: 0 }}>
      <span className="mn-eb">The details</span>
      <div className="mn-clu">
        {DETAILS.map((d, i) => (
          <div key={d.img} ref={(el) => { els.current[i] = el; }} className="mn-ph" data-cursor="View" {...(i === 0 ? { "data-hover-demo": "" } : {})}>
            <img src={IMG(d.img)} alt={d.cap} />
          </div>
        ))}
        <div className="t"><h2>Quiet <i>objects</i></h2></div>
      </div>
    </section>
  );
}
