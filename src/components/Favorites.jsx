import { Link } from "react-router-dom";
import Photo from "./Photo.jsx";
import { destinations, photoPath } from "../data/destinations.js";

export default function Favorites() {
  const favs = destinations.filter((d) => d.favorite);
  return (
    <section id="favorites" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <h2 className="font-display text-4xl font-light sm:text-6xl">Favorites</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {favs.map((d) => (
          <Link key={d.slug} to={`/destination/${d.slug}`} className="group relative block overflow-hidden rounded-3xl">
            <Photo src={photoPath(d)} alt={`Aryan Raj at ${d.name}`} className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep to-transparent p-5">
              <h3 className="font-display text-2xl">{d.name}</h3>
              <p className="text-sm text-warm/70">{d.state}</p>
            </div>
          </Link>
        ))}
      </div>
      <p className="mt-4 text-sm text-warm/50">Set <code>favorite: true</code> in destinations.js to feature a place here.</p>
    </section>
  );
}
