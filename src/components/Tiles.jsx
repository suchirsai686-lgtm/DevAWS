import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

const tileSizeMap = {
  sm: 40,
  md: 60,
  lg: 80,
};

export function Tiles({
  rows = 20,
  cols = 12,
  tileSize = "md",
  className = "",
  colors,
}) {
  const size = tileSizeMap[tileSize] || tileSizeMap.md;

  const defaultColors = useMemo(
    () => [
      "rgba(139, 92, 246, 0.12)",
      "rgba(139, 92, 246, 0.06)",
      "rgba(139, 92, 246, 0.02)",
      "transparent",
    ],
    []
  );

  const tileColors = colors || defaultColors;

  const [grid, setGrid] = useState(() =>
    Array.from({ length: rows * cols }, () => ({
      color: tileColors[Math.floor(Math.random() * tileColors.length)],
    }))
  );

  const animateTile = useCallback(() => {
    setGrid((prev) => {
      const next = [...prev];
      const idx = Math.floor(Math.random() * next.length);
      const color = tileColors[Math.floor(Math.random() * tileColors.length)];
      next[idx] = { ...next[idx], color };
      return next;
    });
  }, [tileColors, rows, cols]);

  useEffect(() => {
    const interval = setInterval(animateTile, 800);
    return () => clearInterval(interval);
  }, [animateTile]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, ${size}px)`, gridTemplateRows: `repeat(${rows}, ${size}px)`, justifyContent: "center" }}
    >
      {grid.map((tile, i) => (
        <motion.div
          key={i}
          initial={false}
          animate={{ backgroundColor: tile.color }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}
