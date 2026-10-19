"use client";
import { useState } from "react";
import { FAQ } from "../content";

export default function Booking() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section className="mn-bk" id="book">
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
            <button onClick={() => setOpen(open === i ? -1 : i)}>{q}<span>{open === i ? "–" : "+"}</span></button>
            {open === i && <p>{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
