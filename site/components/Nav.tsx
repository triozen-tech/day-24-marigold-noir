"use client";
import { useEffect, useRef } from "react";
import { NAV } from "../content";
import { clamp } from "./kit";

/** Nav · M471: a wide open bar at the top condenses into the floating glass pill over the first 80 px of scroll (a pure function of scrollY). */
export default function Nav() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const set = () => ref.current?.style.setProperty("--c", clamp(window.scrollY / 80).toFixed(3));
    set();
    window.addEventListener("scroll", set, { passive: true });
    return () => window.removeEventListener("scroll", set);
  }, []);
  return (
    <nav ref={ref} className="mn-nav" aria-label="Main" style={{ "--c": 1 } as React.CSSProperties}>
      <b>Marigold Noir</b>
      {NAV.map((n) => (
        <a key={n.label} className="l" href={n.href} data-cursor="View">{n.label}</a>
      ))}
      <a className="mn-btn" href="#book" style={{ padding: "10px 20px" }}>Enquire</a>
    </nav>
  );
}
