import { IMG } from "../content";

export default function Footer() {
  return (
    <footer className="mn-ft">
      <div className="film"><img src={IMG("vd-vidaai")} alt="" /></div>
      <div className="wm" data-anchor="wordmark">Marigold Noir</div>
      <small><span>Concept website by Triozen Tech</span><span>Instagram · Contact · © 2026</span></small>
    </footer>
  );
}
