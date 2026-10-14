// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to personalise the site.
// Photos live in /public/photos/<slug>/ . Drop files in with these names:
//   me.jpg  → your portrait at this place (shown on card + map)
//   bg.jpg  → optional landscape backdrop (gradient is used until you add it)
//   1.jpg … → gallery photos (add/remove entries in `gallery` below)
// ─────────────────────────────────────────────────────────────
export const profile = {
  name: "Aryan Raj",
  tagline: "Collecting memories, one destination at a time.",
  
  heroPhoto: "/photos/hero/background.png",
  about: [
    "I'm Aryan, and I travel to feel small in the best way: under a mountain, beside a river, in a crowded lane at dawn.",
    "This site is my diary. Every place here has a photograph I took being there, and a memory I didn't want to lose.",
  ],
  aboutPhoto: "/photos/hero/about.jpg",
  email: "araj306498@gmail.com",
  socials: [
    { label: "Instagram", href: "https://instagram.com/_aryanraj_00?mdxt=djhudDhwaGFxZTg%3D" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-raj-28475828a" },
    { label: "GitHub", href: "https://github.com/Aryan-731" },
  ],
};

const gallery = (slug, captions) =>
  captions.map((caption, i) => ({ src: `/photos/${slug}/${i + 1}.jpg`, caption, date: "Add date" }));

export const destinations = [
  //{ slug: "kedarnath", name: "Kedarnath", state: "Uttarakhand", lat: 30.73, lng: 79.07, favorite: true,
    //date: "Add date", theme: ["#2b3a4a", "#8da3b5"],
   // story: "The climb tests your legs; the arrival tests your words. Replace this with your own memory of the trek.",
   // gallery: gallery("kedarnath", ["The trail at sunrise", "Temple courtyard", "Snow line", "Descent"]) },
  { slug: "iit-roorkee", name: "IIT Roorkee", state: "Uttarakhand", lat: 29.86, lng: 77.89,
    date: "Add date", theme: ["#3a2f27", "#b08a62"],
    story: "Red-brick buildings, long walks and late nights. Write what this campus means to you.",
    gallery: gallery("iit-roorkee", ["Main building", "Campus walk","party","dj","night", "Friends", "Evening light"]) },
 // { slug: "mussoorie", name: "Mussoorie", state: "Uttarakhand", lat: 30.46, lng: 78.08,
   // date: "Add date", theme: ["#2d3b35", "#9ab3a4"],
   // story: "Fog on Mall Road and chai with a view of the Doon valley. Add your own moment here.",
   // gallery: gallery("mussoorie", ["Mall Road", "Valley view", "Misty morning", "Kempty"]) },
  { slug: "rishikesh", name: "Rishikesh", state: "Uttarakhand", lat: 30.09, lng: 78.27, favorite: true,
    date: "Add date", theme: ["#1f3b3f", "#7fb0b0"],
    story: "The Ganga runs clear and fast here. Tell the story of your evening aarti or river day.",
    gallery: gallery("rishikesh", ["Laxman Jhula", "Ganga aarti", "Riverside","h","j", "Cafe corner"]) },
  { slug: "haridwar", name: "Haridwar", state: "Uttarakhand", lat: 29.95, lng: 78.16,
    date: "Add date", theme: ["#40301f", "#d1a15f"],
    story: "Lamps on the water at Har Ki Pauri. Write what you felt standing in that crowd.",
    gallery: gallery("haridwar", ["Har Ki Pauri", "f","r","t","r" ,"y","p","o","Evening aarti", "Ghats", "Market lanes"]) },
  { slug: "Kainchi dham", name: "Kainchi Dham", state: "Uttarakhand", lat: 29.38, lng: 79.46,
    date: "19/04/2026", theme: ["#1f3346", "#6f98b8"],
    story: "A lake held by hills. Add your boat ride, your walk, your favourite quiet hour.",
    gallery: gallery("Kainchi dham", ["Naini Lake", "Boat ride", "Snow View point", "seen", "like", "view", "god", "godness", "Tibetan market"]) },
  //{ slug: "dehradun", name: "Dehradun", state: "Uttarakhand", lat: 30.32, lng: 78.03,
   // date: "Add date", theme: ["#2b3326", "#97a982"],
   // story: "The valley town that feels like a long exhale. Write about the road in, or the food.",
   // gallery: gallery("dehradun", ["Forest Research Institute", "Sahastradhara", "Paltan Bazaar", "Robber's Cave"]) },
 // { slug: "varanasi", name: "Varanasi", state: "Uttar Pradesh", lat: 25.32, lng: 83.01, favorite: true,
   // date: "Add date", theme: ["#4a2f22", "#e0a060"],
   // story: "Dawn boat on the Ganga, smoke and bells on the ghats. Replace with what stayed with you.",
   // gallery: gallery("varanasi", ["Dashashwamedh Ghat", "Sunrise boat", "Evening aarti", "Old city lanes"]) },
 // { slug: "jaipur", name: "Jaipur", state: "Rajasthan", lat: 26.91, lng: 75.79,
  //  date: "Add date", theme: ["#4b2a2a", "#d28a78"],
  //  story: "Pink stone, bright markets, forts above the city. Write your Jaipur day here.",
  //  gallery: gallery("jaipur", ["Hawa Mahal", "Amer Fort", "City Palace", "Bapu Bazaar"]) },
  //{ slug: "vaishali", name: "Vaishali", state: "Bihar", lat: 25.99, lng: 85.13,
   // date: "Add date", theme: ["#3b3a26", "#c2bb7a"],
   // story: "Ashoka's pillar in a quiet field, one of the oldest republics in the world. Add your own memory.",
   // gallery: gallery("vaishali", ["Ashokan Pillar", "Stupa", "Fields nearby", "Local road"]) },
];

export const getDestination = (slug) => destinations.find((d) => d.slug === slug);
export const photoPath = (d) => `/photos/${d.slug}/me.jpg`;
export const bgPath = (d) => `/photos/${d.slug}/bg.jpg`;
export const states = [...new Set(destinations.map((d) => d.state))];
