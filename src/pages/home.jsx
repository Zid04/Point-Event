import React from "react";
import Hero from "../components/home/Hero";
import About from "../pages/about";
import Services from "../pages/services";
import Contact from "../pages/contact";

const Home = () => {
    return (
        <>
            {/* Section Hero */}
            <Hero id="hero" />

            {/* Section About */}
            <About id="about" />

            {/* Section Services */}
            <Services id="services" />

            {/* Section Contact */}
            <Contact id="contact" />
        </>
    );
};

export default Home;
