import { motion, useReducedMotion } from "framer-motion";
import Photo from "./Photo.jsx";
import { profile } from "../data/destinations.js";

function Plane({ top, size, duration, delay, opacity, reverse = false }) {
  // reverse=false: neeche-baayein se upar-daayein
  // reverse=true : upar-daayein se neeche-baayein (dono beech me cross karte hain)
  const angle = reverse ? 164 : -16;
  const xs = reverse ? ["120vw", "-40vw"] : ["-40vw", "120vw"];
  const ys = reverse ? ["0vw", "45vw"] : ["0vw", "-45vw"];

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute left-0 flex items-center"
      style={{ top, opacity }}
      animate={{ x: xs, y: ys }}
      transition={{ duration, delay, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
    >
      <div className="flex items-center" style={{ transform: `rotate(${angle}deg)` }}>
        {/* trail */}
        <div className="h-px w-48 bg-gradient-to-r from-transparent to-glacier/70 sm:w-96" />
        {/* plane */}
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className="rotate-90 fill-glacier drop-shadow-[0_0_12px_rgba(168,196,208,.6)]"
        >
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative min-h-[700px] scroll-mt-20 overflow-hidden">
      {/* background sky + flying planes */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-[#1c2630] to-deep" />
      {!reduce && (
        <>
          <Plane top="75%" size={96} duration={2} delay={0} opacity={0.9} />
          <Plane top="15%" size={64} duration={3} delay={1} opacity={0.7} reverse />
          <Plane top="5%" size={70} duration={4} delay={2} opacity={0.5} reverse />
        </>
      )}

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 py-24 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl"
        >
          <Photo
            src={profile.aboutPhoto}
            alt="Aryan Raj portrait"
            className="aspect-[4/5] w-full object-cover"
          />
        </motion.div>
        <div>
          <h2 className="font-display text-4xl font-light sm:text-6xl">About me</h2>
          {profile.about.map((p) => (
            <p key={p} className="mt-5 max-w-md leading-relaxed text-warm/75">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}