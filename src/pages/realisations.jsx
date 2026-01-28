import React from "react";
import { useState, useEffect } from "react";
import { Box, SimpleGrid, Button, HStack, Heading } from "@chakra-ui/react";
import Card from "../components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css";
import Shooting3 from "../assets/Shooting3.jpg";
import Shooting4 from "../assets/Shooting4.jpg";
import Shooting5 from "../assets/Shooting5.jpg";
import Shooting6 from "../assets/Shooting6.jpg";
import Shooting1 from "../assets/Shooting1.jpg";
const Realisations = () => {
    const [filter, setFilter] = useState("Tous");

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // 🔹 Données avec Cloudinary
    const allEvents = [
        {
            title: "Mariage",
            type: "Mariage",
            media: "https://res.cloudinary.com/dtzwk7ooi/video/upload/v1769545424/Even1_l3lctb.mp4",
            services: ["Wedding planner", "Sonorisation", "Captation vidéo"],
        },
        {
            title: "Concours Miss Bertoua",
            type: "Autres Événements",
            media: "https://res.cloudinary.com/dtzwk7ooi/video/upload/v1769545425/Even2_dxjzwv.mp4",
            services: ["Organisation", "Communication", "Vidéo"],
        },
        {
            title: "Mariage – Claire & Ivan",
            type: "Mariage",
            media: "https://res.cloudinary.com/dtzwk7ooi/video/upload/v1769545410/Even3_eeu8fx.mp4",
            services: ["Wedding planner", "Décoration", "Vidéo"],
        },
        {
            title: "Casting Miss Bertoua 2025–2026",
            type: "Autres Événements",
            media: "https://res.cloudinary.com/dtzwk7ooi/video/upload/v1769545419/Casting_2_xvpowc.mp4",
            services: ["Organisation", "Casting", "Communication"],
        },
        {
            title: "Final Concours Miss Bertoua",
            type: "Autres Événements",
            media: "https://res.cloudinary.com/dtzwk7ooi/video/upload/v1769545429/Even4_nvlhnz.mp4",
            services: ["Sonorisation", "Captation vidéo"],
        },
        { title: "Shooting Photo", type: "Shooting", media: Shooting3 },
        { title: "Shooting Photo", type: "Shooting", media: Shooting1 },
        { title: "Shooting Photo", type: "Shooting", media: Shooting4 },
        { title: "Shooting Photo", type: "Shooting", media: Shooting5 },
        { title: "Shooting Photo", type: "Shooting", media: Shooting6 },
    ];

    const filteredEvents =
        filter === "Tous"
            ? allEvents
            : allEvents.filter((event) => event.type === filter);

    const categories = [
        "Tous",
        "Mariage",
        "Shooting",
        "Publicite",
        "Autres Événements",
    ];

    return (
        <Box p={8}>
            <Heading mb={6} textAlign="center">
                Nos Réalisations
            </Heading>

            <HStack spacing={4} mb={8} justify="center" flexWrap="wrap">
                {categories.map((cat) => (
                    <Button
                        key={cat}
                        colorScheme={filter === cat ? "purple" : "gray"}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </Button>
                ))}
            </HStack>

            <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                {filteredEvents.map((event, index) => (
                    <Box key={index} data-aos="fade-up" data-aos-delay={index * 120}>
                        <Card {...event} />
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Realisations;
