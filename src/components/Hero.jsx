import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Photo from "./Photo.jsx";
import { profile } from "../data/destinations.js";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const far = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const mid = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const text = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] overflow-hidden bg-gradient-to-b from-[#26323d] via-[#46586a] to-[#d9a98a]/70">
      {/* Your hero photo (public/photos/hero/me.jpg) sits behind everything */}
      <motion.div style={{ y: far }} className="absolute inset-0">
        <Photo silent src={profile.heroPhoto} alt="Aryan Raj at a mountain viewpoint" className="h-full w-full object-cover object-[50%_30%]" />
      </motion.div>
      {/* Layered mountain silhouettes for parallax depth */}
      <motion.svg style={{ y: mid }} viewBox="0 0 1440 400" preserveAspectRatio="none" className="absolute bottom-0 h-[45%] w-full">
        <path d="M0 400V240l140-90 120 70 170-130 170 120 140-80 200 150 160-110 180 90 160-70v210z" fill="#1b1a1c" opacity=".55" />
        <path d="M0 400V300l200-110 150 90 210-150 190 140 220-100 250 130v100z" fill="#121113" />
      </motion.svg>
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/60 to-deep/70" />

      <motion.div style={{ y: text }} className="relative z-10 flex h-full flex-col justify-end px-6 pb-24 sm:px-12 md:px-20">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2, duration: 1 }} className="mb-4 text-sm tracking-wide text-glacier">
          It's me
        </motion.p>
        <h1 className="font-display text-4xl font-medium tracking-tight leading-[.95] drop-shadow-[0_4px_24px_rgba(0,0,0,.65)] sm:text-6xl lg:text-8xl">
          {["WANDER.", "EXPLORE.", "REPEAT."].map((w, i) => (
            <span key={w} className="block overflow-hidden">
              <motion.span className="block bg-gradient-to-b from-white via-warm to-glacier bg-clip-text pb-2 text-transparent" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: .3 + i * .18, duration: .9, ease: [.2, .7, .2, 1] }}>{w}</motion.span>
            </span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-6 max-w-md text-lg text-warm/80">{profile.tagline}</motion.p>
        <motion.a href="#journey" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
          whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }}
          className="glass mt-8 inline-flex w-fit items-center gap-3 rounded-full px-7 py-3.5 font-semibold">
          Explore My Journey
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>↓</motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}
