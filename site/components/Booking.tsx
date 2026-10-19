"use client";
import { useEffect, useRef, useState } from "react";
import { FAQ } from "../content";
import { isStatic, secProg, sm, useFrame } from "./kit";

/** Booking + FAQ · M82: a night-blue block wipes off the gold band as the section arrives; the FAQ rows open one after another by themselves until a visitor takes over. */
export default function Booking() {
  const root = useRef<HTMLElement>(null);
  const wipe = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number>(0);
  const mine = useRef(false);

  useFrame(root, (_t, still) => {
    const u = still ? 1 : sm(secProg(root.current!), 0.28, 0.58);
    wipe.current!.style.transform = `translateX(${u * 101}%)`;
  });
  useEffect(() => {
    if (isStatic()) return;
    const id = setInterval(() => {
      const r = root.current?.getBoundingClientRect();
      if (!r || mine.current || r.bottom < 0 || r.top > innerHeight) return;
      setOpen((o) => (o + 1) % FAQ.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={root} className="mn-bk" id="book">
      <div ref={wipe} className="mn-wipe" />
      <div>
        <h2>Hold your <i>date</i></h2>
        <div style={{ marginTop: 30 }}>
          <input placeholder="Your names" aria-label="Your names" />
          <input placeholder="Date and city" aria-label="Date and city" />
          <button className="mn-btn btn" data-cursor="Hold">Send enquiry</button>
        </div>
      </div>
      <div style={{ paddingTop: 30 }}>
        {FAQ.map(([q, a], i) => (
          <div key={q} className="mn-q">
            <button onClick={() => { mine.current = true; setOpen(open === i ? -1 : i); }}>{q}<span>{open === i ? "–" : "+"}</span></button>
            <div className="mn-a" style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}><div><p>{a}</p></div></div>
          </div>
        ))}
      </div>
    </section>
  );
}
