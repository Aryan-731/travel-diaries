import { profile } from "../data/destinations.js";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-deep via-[#1c2630] to-deep px-6 py-24 text-center"
    >
      {/* soft glow, same glacier tone as the About section */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-glacier/10 blur-3xl" />

      <div className="relative z-10">
        <h2 className="font-display text-4xl font-light sm:text-6xl">Let's talk travel</h2>
        <a href={`mailto:${profile.email}`} className="mt-6 inline-block text-glacier hover:underline">
          {profile.email}
        </a>
        <div className="mt-6 flex justify-center gap-6 text-sm">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-glacier">
              {s.label}
            </a>
          ))}
        </div>
        <p className="mt-12 text-xs text-warm/40">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}