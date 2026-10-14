import { useEffect } from "react";
import Hero from "../components/Hero.jsx";
import Stats from "../components/Stats.jsx";
import Destinations from "../components/Destinations.jsx";
import IndiaMap from "../components/IndiaMap.jsx";
import Favorites from "../components/Favorites.jsx";
import About from "../components/About.jsx";

export default function Home() {
  useEffect(() => { document.title = "Aryan Raj | Travel Diaries"; }, []);
  return (<main><Hero /><Stats /><Destinations /><IndiaMap /><Favorites /><About /></main>);
}
