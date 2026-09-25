import { useState } from "react";
import { Menu, X } from "lucide-react";
import { eventData } from "../data/eventData";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop floating nav */}
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

      {/* Mobile menu button */}
      <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="floating-nav" style={{ top: 60, maxWidth: 'calc(100% - 32px)', flexDirection: 'column', gap: 12, display: 'flex' }}>
          {eventData.nav.map(([id, label]) => (
            <a key={id} className="nav-link" href={`#${id}`} onClick={() => setOpen(false)} style={{ padding: '4px 0' }}>{label}</a>
          ))}
          <a className="membership-pill" href={eventData.membershipUrl} target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center' }}>Membership</a>
        </div>
      )}
    </>
  );
}
