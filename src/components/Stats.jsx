import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { destinations, states } from "../data/destinations.js";

function Count({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.4, onUpdate: (v) => (ref.current.textContent = Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>0</span>;
}

export default function Stats() {
  const items = [[destinations.length, "destinations visited"], [states.length, "states explored"], [destinations.filter((d) => d.favorite).length, "favorites"]];
  return (
    <section className="mx-auto grid max-w-5xl grid-cols-3 gap-4 px-6 py-16 text-center">
      {items.map(([n, label]) => (
        <div key={label}>
          <div className="font-display text-5xl font-light text-glacier sm:text-7xl"><Count to={n} /></div>
          <div className="mt-1 text-xs text-warm/60 sm:text-sm">{label}</div>
        </div>
      ))}
    </section>
  );
}
