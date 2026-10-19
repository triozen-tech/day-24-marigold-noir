"use client";
import { useEffect, useRef, useState } from "react";
import FrameScrub from "@/components/video/FrameScrub";
import { ALBUM, IMG } from "../content";
import { approach, isStatic, lerp, prog, sm, useFrame } from "./kit";

/**
 * Album · PS04 + M54: a ~2-screen pin. The V3 film opens the album as you scroll; then the cover card morphs (position + size
 * scrubbed, the Flip's job done as a pure function of scroll) from the middle of the film into the buy box's picture slot, the
 * film dims and the buy box (swatches, size chips, price, Reserve) comes in. The section opens through a circle (X6) as it
 * approaches. When idle at the end the swatches cycle by themselves.
 */
export default function Album() {
  const track = useRef<HTMLElement>(null);
  const range = useRef<HTMLDivElement>(null);
  const iris = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const dim = useRef<HTMLDivElement>(null);
  const head = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const pr = useRef(isStatic() ? 1 : 0);
  const mine = useRef(false);
  const [c, setC] = useState(0);
  const [s, setS] = useState(1);
  const [held, setHeld] = useState(false);

  useFrame(track, (_t, still) => {
    const a = still ? 1 : approach(track.current!);
    iris.current!.style.clipPath = a >= 0.97 ? "none" : `circle(${sm(a, 0.04, 0.96) * 150}% at 50% 50%)`;
    const p = still ? 1 : prog(track.current!);
    pr.current = p;
    const m = sm(p, 0.6, 0.92);
    const k = card.current!.style;
    k.left = `${lerp(535, 130, m)}px`; k.top = `${lerp(240, 130, m)}px`;
    k.width = `${lerp(370, 550, m)}px`; k.height = `${lerp(420, 640, m)}px`;
    k.opacity = String(sm(p, 0.5, 0.6));
    dim.current!.style.opacity = String(0.86 * sm(p, 0.6, 0.9));
    head.current!.style.opacity = String(1 - sm(p, 0.42, 0.58));
    const w = sm(p, 0.84, 0.98);
    copy.current!.style.opacity = String(w);
    copy.current!.style.transform = `translateX(${(1 - w) * 50}px)`;
    copy.current!.style.pointerEvents = w > 0.9 ? "auto" : "none";
  });
  useEffect(() => {
    if (isStatic()) return;
    const id = setInterval(() => { if (!mine.current && pr.current > 0.96) setC((v) => (v + 1) % ALBUM.covers.length); }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={track} className="mn-alb-track" id="album">
      {/* the film's own scroll range: it finishes (frame 125 of 193, end of the motion) at 55% of the pin */}
      <div ref={range} style={{ position: "absolute", left: 0, top: 0, width: 1, height: 2423, pointerEvents: "none" }} />
      <div className="mn-pin mn-alb-pin">
        <div ref={iris} className="mn-alb-iris">
          <FrameScrub frames="/frames/marigold-noir-v3" section={range} stillAt={0.62} className="mn-film" />
          <div ref={dim} className="mn-alb-dim" />
          <div ref={head} className="mn-alb-head"><span className="mn-eb">The album</span><h2>Held, <i>not</i> scrolled</h2></div>
          <div ref={card} className="mn-ph mn-alb-card" data-anchor="album">
            <img key={c} className="mn-push" src={IMG(ALBUM.covers[c].img)} alt={ALBUM.covers[c].name} />
          </div>
          <div ref={copy} className="mn-alb-copy">
            <span className="mn-eb" style={{ textAlign: "left" }}>The album</span>
            <h2>Held, <i>not</i> scrolled</h2>
            <p style={{ color: "#b3bac6", margin: "18px 0" }}>{ALBUM.body}</p>
            <div className="mn-sw" aria-label="Cover">
              {ALBUM.covers.map((cv, i) => (
                <button key={cv.name} className={i === c ? "on" : ""} style={{ background: cv.color }} aria-label={cv.name} onClick={() => { mine.current = true; setC(i); }} {...(i === 1 ? { "data-hover-demo": "click" } : {})} />
              ))}
            </div>
            <div className="mn-chips">
              {ALBUM.sizes.map((z, i) => (
                <span key={z} className={i === s ? "on" : ""} onClick={() => setS(i)} style={{ cursor: "pointer" }}>{z}</span>
              ))}
            </div>
            <div className="mn-price">{ALBUM.price}<small>sample</small></div>
            <button className="mn-btn" style={{ border: 0, cursor: "pointer" }} data-cursor="Hold" onClick={() => setHeld(true)} data-hover-demo="click">{held ? "Held" : "Reserve album"}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
