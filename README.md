# Aryan Raj | Travel Diaries

open link :- https://aryan-typ.netlify.app/

React + Vite + Tailwind CSS + Framer Motion + React Router.

## Run locally (VS Code)
1. Install Node.js 18+ from nodejs.org
2. Open this folder in VS Code → Terminal → New Terminal
3. `npm install`
4. `npm run dev` → open http://localhost:5173

## Add your photos (no code changes needed)
Put files in `public/photos/`:
- `hero/me.jpg` (full-screen hero), `hero/about.jpg` (About section)
- `<slug>/me.jpg` your portrait at each place (kedarnath, iit-roorkee, mussoorie, rishikesh, haridwar, nainital, dehradun, varanasi, jaipur, vaishali)
- `<slug>/bg.jpg` optional landscape backdrop
- `<slug>/1.jpg, 2.jpg …` gallery photos
Until a file exists, a clearly labelled "Add your photo" placeholder shows.
Tip: resize photos to ~1600px wide and use .webp/.jpg under 400 KB for fast loading.

## Edit text
Everything (dates, stories, captions, coordinates, email, social links, favorites) is in `src/data/destinations.js`.
To add a place: copy one object in `destinations` and change it.

## Deploy
- Vercel: push to GitHub → vercel.com → Import → Deploy (`vercel.json` handles routing)
- Netlify: `npm run build`, drag the `dist` folder onto app.netlify.com/drop (`_redirects` handles routing)
