import DestinationCard from "./DestinationCard.jsx";
import { destinations } from "../data/destinations.js";

export default function Destinations() {
  return (
    <section id="journey" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20">
      <h2 className="font-display text-4xl font-light sm:text-6xl">Ten places, ten stories</h2>
      <p className="mt-3 max-w-lg text-warm/70">Pick a destination to open its photo gallery.</p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d, i) => <DestinationCard key={d.slug} d={d} index={i} />)}
      </div>
    </section>
  );
}
