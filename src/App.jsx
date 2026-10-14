import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./pages/Home.jsx";
import Destination from "./pages/Destination.jsx";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => { if (!window.location.hash) window.scrollTo(0, 0); }, [pathname]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/:slug" element={<Destination />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Contact />
    </>
  );
}
