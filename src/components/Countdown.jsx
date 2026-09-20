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

  useEffect(() => {
    if (!time.done) {
      document.body.classList.add("has-persistent-countdown");
    }
    return () => document.body.classList.remove("has-persistent-countdown");
  }, [time.done]);

  if (time.done) return null;

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
