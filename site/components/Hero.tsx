import { HERO, IMG } from "../content";

export default function Hero() {
  return (
    <section className="mn-hero" id="top">
      <div className="film"><img src={IMG("k1-mandap")} alt="" /></div>
      <div className="mn-glow" />
      <h1>
        {HERO.lines.map((l, i) => (
          <span key={i} style={{ display: "block" }}>
            {l.map((w, j) => (
              <span key={j} data-word style={{ marginRight: "0.25em" }}>{w === "gold" ? <i>{w}</i> : w}</span>
            ))}
          </span>
        ))}
      </h1>
      <div className="sub">{HERO.sub}</div>
    </section>
  );
}
