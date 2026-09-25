import { eventData } from "../data/eventData";

export default function Navbar() {
  return (
    <div className="floating-nav">
      <a className="nav-link" href="https://www.awsmecs.in/">Home</a>
      <a className="neon-btn-wrapper" href="#pricing">
        <div className="neon-btn-glow" />
        <div className="neon-btn-inner">SCD</div>
      </a>
      {eventData.nav.map(([id, label]) => (
        <a key={id} className="nav-link" href={`#${id}`}>{label}</a>
      ))}
      <a className="membership-pill" href={eventData.membershipUrl} target="_blank" rel="noopener noreferrer">Membership</a>
    </div>
  );
}
