import { Link, useLocation } from "react-router-dom";

const links = [["Journey", "journey"], ["Map", "map"], ["Favorites", "favorites"], ["About", "about"], ["Contact", "contact"]];

export default function Navbar() {
  const home = useLocation().pathname === "/";
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav className="glass mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5">
        <Link to="/" className="font-display text-lg">Aryan Raj</Link>
        <ul className="hidden gap-6 text-sm text-warm/80 md:flex">
          {links.map(([label, id]) => (
            <li key={id}><a className="hover:text-glacier" href={home ? `#${id}` : `/#${id}`}>{label}</a></li>
          ))}
        </ul>
        <a href={home ? "#journey" : "/#journey"} className="text-sm text-glacier md:hidden">Journey</a>
      </nav>
    </header>
  );
}
