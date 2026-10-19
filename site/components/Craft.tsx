import { IMG } from "../content";

export default function Craft() {
  return (
    <section className="mn-sec">
      <span className="mn-eb">The craft</span>
      <h2 style={{ marginBottom: 60 }}>Blur, then <i>truth</i></h2>
      <div className="mn-ba" data-anchor="lens" data-cursor="Slide">
        <div className="mn-ph"><img src={IMG("c1-lens")} alt="Lens, sharp" /></div>
        <div className="mn-ph blur"><img src={IMG("c1-lens")} alt="" /></div>
        <div className="line" />
        <span className="lb" style={{ left: 20 }}>OUT OF FOCUS</span>
        <span className="lb" style={{ right: 20 }}>THE FRAME</span>
      </div>
    </section>
  );
}
