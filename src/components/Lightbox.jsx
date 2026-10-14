import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Photo from "./Photo.jsx";

export default function Lightbox({ items, index, setIndex }) {
  const open = index !== null;
  const go = (n) => setIndex((index + n + items.length) % items.length);
  useEffect(() => {
    if (!open) return;
    const k = (e) => { if (e.key === "Escape") setIndex(null); if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  });
  const it = open ? items[index] : null;
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIndex(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-deep/95 p-4" role="dialog" aria-modal="true">
          <motion.div key={index} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} onClick={(e) => e.stopPropagation()} className="max-h-[80vh] max-w-5xl">
            <Photo src={it.src} alt={it.caption} className="max-h-[75vh] rounded-xl object-contain" />
          </motion.div>
          <p className="mt-4 text-center">{it.caption} <span className="text-warm/50">· {it.date}</span></p>
          <button aria-label="Previous" onClick={(e) => { e.stopPropagation(); go(-1); }} className="glass absolute left-3 top-1/2 h-11 w-11 rounded-full">‹</button>
          <button aria-label="Next" onClick={(e) => { e.stopPropagation(); go(1); }} className="glass absolute right-3 top-1/2 h-11 w-11 rounded-full">›</button>
          <button aria-label="Close" onClick={() => setIndex(null)} className="glass absolute right-4 top-4 h-11 w-11 rounded-full">✕</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
