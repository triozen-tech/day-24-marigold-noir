"use client";
import { useState } from "react";
import { ALBUM, IMG } from "../content";

export default function Album() {
  const [c, setC] = useState(0);
  const [s, setS] = useState(1);
  const [held, setHeld] = useState(false);
  return (
    <section className="mn-sec" id="album">
      <div className="mn-alb">
        <div className="mn-ph" data-anchor="album"><img src={IMG(ALBUM.covers[c].img)} alt={ALBUM.covers[c].name} /></div>
        <div>
          <span className="mn-eb" style={{ textAlign: "left" }}>The album</span>
          <h2>Held, <i>not</i> scrolled</h2>
          <p style={{ color: "var(--muted)", margin: "18px 0" }}>{ALBUM.body}</p>
          <div className="mn-sw" aria-label="Cover">
            {ALBUM.covers.map((cv, i) => (
              <button key={cv.name} className={i === c ? "on" : ""} style={{ background: cv.color }} aria-label={cv.name} onClick={() => setC(i)} {...(i === 1 ? { "data-hover-demo": "click" } : {})} />
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
    </section>
  );
}
