import { REVIEWS } from "../content";

const POS = [
  { left: 30, bottom: 0, r: -4 },
  { left: 420, bottom: 10, r: 3 },
  { left: 760, bottom: 0, r: -2 },
  { left: 170, bottom: 100, r: 5 },
  { left: 600, bottom: 110, r: -6 },
];

export default function Reviews() {
  return (
    <section className="mn-sec">
      <span className="mn-eb">Kind words</span>
      <h2>What they <i>kept</i></h2>
      <div className="mn-pile">
        {REVIEWS.map((q, i) => (
          <div key={q} className="mn-tag" style={{ left: POS[i].left, bottom: POS[i].bottom, transform: `rotate(${POS[i].r}deg)` }}>“{q}”</div>
        ))}
      </div>
    </section>
  );
}
