import { PACKAGES } from "../content";

export default function Packages() {
  return (
    <section className="mn-sec" id="packages">
      <span className="mn-eb">Packages</span>
      <h2 style={{ marginBottom: 70 }}>Choose your <i>coverage</i></h2>
      <div className="mn-pk">
        {PACKAGES.map((p) => (
          <div key={p.name} className="mn-bar" data-cursor="Hold" {...(p.feature ? { "data-hover-demo": "" } : {})}>
            <div><h3>{p.name}</h3><small>{p.meta}</small></div>
            <div className="pr">{p.price}<small>sample</small></div>
          </div>
        ))}
      </div>
    </section>
  );
}
