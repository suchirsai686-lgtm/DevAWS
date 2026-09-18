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

export default function Countdown({ target }) {
  const [time, setTime] = useState(() => getRemaining(target));
  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

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