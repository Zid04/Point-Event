import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Realisations from "./pages/realisations";
import Contact from "./pages/contact";
import "aos/dist/aos.css"; // styles AOS
import AOS from "aos";

AOS.init({ duration: 1000, once: true }); // 1000ms, animation une seule fois

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
