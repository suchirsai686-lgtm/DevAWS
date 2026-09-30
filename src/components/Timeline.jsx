import { useEffect, useRef, useState } from "react";
import { ClipboardCheck, Flag, Mic, Utensils, Split, Clock } from "lucide-react";

const agendaIcons = { checkin: ClipboardCheck, ceremony: Flag, speaker: Mic, lunch: Utensils, tracks: Split };

export default function Timeline({ items = [] }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`timeline${inView ? " in-view" : ""}`}>
      <div className="tl-glow" />
      <div className="tl-line"><div className="tl-line-fill" /></div>

      {items.map((item, i) => {
        const Icon = agendaIcons[item.icon] || Mic;
        return (
          <div
            key={`${item.title}-${i}`}
            className={`tl-item ${i % 2 === 0 ? "tl-left" : "tl-right"}`}
            style={{ "--delay": `${i * 110}ms` }}
          >
            <div className="tl-node"><Icon size={18} /></div>
            <div className={`tl-card${item.accent ? " accent" : ""}`}>
              <div className="tl-card-grid" />
              <span className="tl-time"><Clock size={12} />{item.time}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {item.accent && (
                <div className="tl-chips">
                  <span className="tl-chip">Track 01</span>
                  <span className="tl-chip">Track 02</span>
                  <span className="tl-chip">Track 03</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
