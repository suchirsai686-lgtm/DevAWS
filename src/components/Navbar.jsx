import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { eventData } from "../data/eventData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#" className="brand" aria-label="AWS Student Community Day home">
          <span className="aws-mark">aws</span>
          <span>Student Community Day</span>
        </a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {eventData.nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="btn btn-orange" href={eventData.registrationUrl} onClick={() => setOpen(false)}>Register Now</a>
        </nav>
      </div>
    </header>
  );
}