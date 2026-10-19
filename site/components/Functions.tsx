import { FUNCTIONS, IMG } from "../content";

export default function Functions() {
  return (
    <section className="mn-sec" id="functions">
      <span className="mn-eb">The functions</span>
      <h2>Four days, <i>one</i> story</h2>
      <div className="mn-deck">
        {FUNCTIONS.map((f, i) => (
          <div key={f.name} className="mn-card mn-ph" data-cursor="Open" data-anchor={i === 0 ? "haldi" : undefined} {...(i === 0 ? { "data-hover-demo": "" } : {})}>
            <img src={IMG(f.img)} alt={f.name} />
            <h3>{f.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
