import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Photo from "./Photo.jsx";
import { destinations, photoPath } from "../data/destinations.js";

// Stylised India outline (lng,lat) projected into a 400x400 box.
const OUTLINE = [[74,37],[77,35.5],[79,34],[78.5,32.5],[80.5,30.5],[84,28.5],[88,27.5],[89.5,26.8],[92,27],[95,28.5],[97,28],[95,26],[94,24],[93,22],[92.5,24],[91.5,25],[89.5,25.5],[89,22],[87,21.5],[86.5,20],[84.5,19],[82.5,17],[80.3,15.5],[80,13],[79.8,10.5],[78,8.5],[77.5,8],[76.5,9.5],[75,12.5],[74,15],[73,17.5],[72.8,19.5],[72.7,21.5],[70,21],[68.8,23],[70,24.5],[71,25.5],[70.5,27.5],[72,29.5],[74,31],[74.5,32.5],[74,34],[73.5,35.5]];
const proj = ([lng, lat]) => [(lng - 68) * 11.5 + 20, (37 - lat) * 11.5 + 10];
const path = OUTLINE.map((p, i) => `${i ? "L" : "M"}${proj(p).join(" ")}`).join("") + "Z";

export default function IndiaMap() {
  const [active, setActive] = useState(destinations[0]);
  return (
    <section id="map" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <h2 className="font-display text-4xl font-light sm:text-6xl">Where I've been</h2>
      <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <svg viewBox="0 0 400 400" className="w-full" role="img" aria-label="Map of India with visited destinations">
          <path d={path} fill="#26252a" stroke="#a8c4d0" strokeOpacity=".5" strokeWidth="1.2" strokeLinejoin="round" />
          {destinations.map((d) => {
            const [x, y] = proj([d.lng, d.lat]);
            const on = active.slug === d.slug;
            return (
              <g key={d.slug} onClick={() => setActive(d)} className="cursor-pointer" tabIndex={0} role="button" aria-label={d.name}
                 onKeyDown={(e) => e.key === "Enter" && setActive(d)}>
                {on && <motion.circle cx={x} cy={y} r="4" fill="none" stroke="#a8c4d0" animate={{ r: [4, 13], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} />}
                <circle cx={x} cy={y} r={on ? 4.5 : 3} fill={on ? "#f4efe6" : "#a8c4d0"} />
              </g>
            );
          })}
        </svg>
        <div>
          <AnimatePresence mode="wait">
            <motion.div key={active.slug} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="glass overflow-hidden rounded-3xl">
              <Photo src={photoPath(active)} alt={`Aryan Raj at ${active.name}`} className="aspect-[16/10] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-display text-2xl">{active.name}</h3>
                <p className="text-sm text-warm/60">{active.state}</p>
                <Link to={`/destination/${active.slug}`} className="mt-3 inline-block text-glacier hover:underline">Open travel gallery</Link>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-4 flex flex-wrap gap-2">
            {destinations.map((d) => (
              <button key={d.slug} onClick={() => setActive(d)} className={`rounded-full px-3 py-1 text-xs ${active.slug === d.slug ? "bg-warm text-deep" : "glass"}`}>{d.name}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
