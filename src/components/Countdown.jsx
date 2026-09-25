import { useEffect, useState } from "react";

function getRemaining(target) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
    done: diff === 0
  };
}

export function useCountdown(target) {
  const [time, setTime] = useState(() => getRemaining(target));
  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);
  return time;
}

export default function Countdown({ target }) {
  const time = useCountdown(target);

  if (time.done) return <div className="countdown-done">The event is live / has passed.</div>;

  return (
    <div className="countdown" aria-label="Countdown to event">
      {Object.entries(time).filter(([key]) => key !== "done").map(([key, value]) => (
        <div className="countdown-cell" key={key}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{key}</span>
        </div>
      ))}
    </div>
  );
}

export function PersistentCountdown({ target }) {
  const time = useCountdown(target);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth >= 768) {
        setScrolled(true);
        return;
      }
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(max > 0 && window.scrollY / max >= 0.75);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const show = !time.done && scrolled;

  useEffect(() => {
    if (show) {
      document.body.classList.add("has-persistent-countdown");
    }
    return () => document.body.classList.remove("has-persistent-countdown");
  }, [show]);

  if (!show) return null;

  return (
    <div className="persistent-countdown">
      <div className="persistent-countdown-inner">
        <span className="persistent-countdown-label">Event in</span>
        <div className="persistent-countdown-cells">
          {Object.entries(time).filter(([key]) => key !== "done").map(([key, value]) => (
            <div className="persistent-countdown-cell" key={key}>
              <strong>{String(value).padStart(2, "0")}</strong>
              <span>{key}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
