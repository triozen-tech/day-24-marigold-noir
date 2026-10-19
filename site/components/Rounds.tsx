import { IMG, ROUNDS } from "../content";

export default function Rounds() {
  return (
    <section className="mn-rounds" id="rounds">
      <div className="film"><img src={IMG("k3-flame")} alt="" /></div>
      <h2><span className="mn-eb" style={{ marginBottom: 14 }}>The ceremony</span>Seven rounds</h2>
      <div className="mn-tl" data-anchor="flame">
        <div className="fill" />
        {ROUNDS.map((r, i) => (
          <i key={r} style={{ left: `${(i / 6) * 100}%` }}><span>{r}</span></i>
        ))}
      </div>
    </section>
  );
}
