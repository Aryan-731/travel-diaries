import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Photo from "./Photo.jsx";
import { photoPath, bgPath } from "../data/destinations.js";

export default function DestinationCard({ d, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: .7, delay: (index % 3) * .08 }}
      whileHover="hover"
      className="group relative overflow-hidden rounded-3xl"
      style={{ background: `linear-gradient(160deg, ${d.theme[0]}, ${d.theme[1]})` }}
    >
      {/* landscape backdrop: public/photos/<slug>/bg.jpg (optional) */}
      <motion.div variants={{ hover: { scale: 1.08 } }} transition={{ duration: .8 }} className="absolute inset-0">
        <Photo silent src={bgPath(d)} alt="" className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/30 to-transparent" />

      <div className="relative flex min-h-[520px] flex-col justify-between p-5">
        <motion.div variants={{ hover: { rotate: -2, y: -4 } }} className="w-40 self-end overflow-hidden rounded-2xl border border-warm/30 shadow-2xl">
          <Photo src={photoPath(d)} alt={`Aryan Raj at ${d.name}`} className="aspect-[4/5] w-full object-cover" />
        </motion.div>
        <div className="glass rounded-2xl p-5">
          <p className="text-xs text-glacier">{d.state} · {d.date}</p>
          <h3 className="font-display text-3xl">{d.name}</h3>
          <p className="mt-2 line-clamp-3 text-sm text-warm/75">{d.story}</p>
          <Link to={`/destination/${d.slug}`} className="mt-4 inline-block rounded-full bg-warm px-5 py-2 text-sm font-semibold text-deep transition hover:bg-glacier">
            View Memories
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
