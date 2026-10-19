import { IMG, SELECTS } from "../content";

export default function Portfolio() {
  return (
    <section className="mn-tr">
      <span className="mn-eb">Portfolio</span>
      <h2 style={{ marginBottom: 60 }}>The <i>selects</i></h2>
      {SELECTS.map((row, r) => (
        <div key={r} className="mn-row">
          {row.map((n) => (
            <div key={n} className="mn-ph" data-cursor="View"><img src={IMG(n)} alt="" /></div>
          ))}
        </div>
      ))}
    </section>
  );
}
