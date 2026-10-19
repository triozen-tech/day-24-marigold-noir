import { NAV } from "../content";

export default function Nav() {
  return (
    <nav className="mn-nav" aria-label="Main">
      <b>Marigold Noir</b>
      {NAV.map((n) => (
        <a key={n.label} className="l" href={n.href} data-cursor="View">{n.label}</a>
      ))}
      <a className="mn-btn" href="#book" style={{ padding: "10px 20px" }}>Enquire</a>
    </nav>
  );
}
