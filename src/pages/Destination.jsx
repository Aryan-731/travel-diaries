import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Photo from "../components/Photo.jsx";
import Lightbox from "../components/Lightbox.jsx";
import { destinations, getDestination, photoPath, bgPath } from "../data/destinations.js";

const ratios = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-[4/3]"];

export default function Destination() {
  const { slug } = useParams();
  const d = getDestination(slug);
  const [open, setOpen] = useState(null);
  useEffect(() => { if (d) document.title = `${d.name}, ${d.state} | Aryan Raj Travel Diaries`; }, [d]);
  if (!d) return <main className="px-6 pt-40 text-center"><Link to="/" className="text-glacier">Back to all destinations</Link></main>;
  const i = destinations.indexOf(d);
  const next = destinations[(i + 1) % destinations.length];

  return (
    <main>
      <header className="relative flex min-h-[70vh] items-end overflow-hidden px-6 pb-14 pt-32 sm:px-12" style={{ background: `linear-gradient(160deg, ${d.theme[0]}, ${d.theme[1]})` }}>
        <Photo silent src={bgPath(d)} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative grid w-full max-w-6xl items-end gap-8 md:grid-cols-[1fr_220px]">
          <div>
            <p className="text-glacier">{d.state} · {d.date}</p>
            <h1 className="font-display text-5xl font-light sm:text-8xl">{d.name}</h1>
            <p className="mt-4 max-w-xl text-lg text-warm/80">{d.story}</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-warm/30">
            <Photo src={photoPath(d)} alt={`Aryan Raj at ${d.name}`} className="aspect-[4/5] w-full object-cover" />
          </div>
        </motion.div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {d.gallery.map((g, n) => (
            <motion.button key={g.src} onClick={() => setOpen(n)} layout initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="group relative mb-4 block w-full overflow-hidden rounded-2xl text-left">
              <Photo src={g.src} alt={g.caption} className={`${ratios[n % ratios.length]} w-full object-cover transition duration-700 group-hover:scale-105`} />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep/90 to-transparent p-4 text-sm opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                {g.caption} <span className="text-warm/60">· {g.date}</span>
              </span>
            </motion.button>
          ))}
        </div>
        <div className="mt-10 flex justify-between text-glacier">
          <Link to="/#journey">All destinations</Link>
          <Link to={`/destination/${next.slug}`}>Next: {next.name}</Link>
        </div>
      </section>
      <Lightbox items={d.gallery} index={open} setIndex={setOpen} />
    </main>
  );
}
