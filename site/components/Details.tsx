import { DETAILS, IMG } from "../content";

export default function Details() {
  return (
    <section className="mn-sec" style={{ paddingBottom: 0 }}>
      <span className="mn-eb">The details</span>
      <div className="mn-clu">
        {DETAILS.map((d, i) => (
          <div key={d.img} className="mn-ph" data-cursor="View" {...(i === 0 ? { "data-hover-demo": "" } : {})}>
            <img src={IMG(d.img)} alt={d.cap} />
          </div>
        ))}
        <div className="t"><h2>Quiet <i>objects</i></h2></div>
      </div>
    </section>
  );
}
