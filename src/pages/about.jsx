import React from "react";
import { useEffect } from "react";
import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    HStack,
    Image,
} from "@chakra-ui/react";
import { FaLightbulb, FaHeart, FaUsers, FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import equipe1 from "../assets/equipe1.JPG";
import equipe2 from "../assets/equipe2.JPG";
import equipe3 from "../assets/equipe3.jpg";
import equipe4 from "../assets/equipe4.jpg";
import equipe5 from "../assets/equipe5.jpg";
import equipe6 from "../assets/equipe6.JPG";

// Équipe
const equipe = [
    {
        nom: "Wilfried Tchouindjo",
        poste: "Fondateur & vidéaste",
        photo: equipe1,
    },
    {
        nom: "Shado ",
        poste: "Dj & animateur",
        photo: equipe2,
    },
    {
        nom: "Martial",
        poste: "sonorisation & technicien",
        photo: equipe3,
    },
    {
        nom: "Modeste Ntaleh",
        poste: "Coaching & styliste",
        photo: equipe4,
    },
    {
        nom: "DEO END Pelario",
        poste: "Impressario & organisateur",
        photo: equipe5,
    },
    {
        nom: " Raoul Ndozen",
        poste: "Communication & marketing",
        photo: equipe6,
    },
];

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <Box p={8}>
            {/* HISTOIRE */}
            <VStack spacing={4} mb={12} data-aos="fade-up">
                <HStack spacing={3}>
                    <FaUsers size={24} color="#805AD5" />
                    <Heading>Notre Histoire</Heading>
                </HStack>
                <Text textAlign="center" color="gray.600" maxW="800px">
                    Point Event est une agence événementielle spécialisée dans
                    l’organisation, la communication et la valorisation d’événements.
                    Depuis nos débuts, nous accompagnons particuliers et entreprises
                    dans la réalisation de projets uniques et mémorables.
                </Text>
            </VStack>

            {/* MISSION & DEVISE */}
            <SimpleGrid columns={[1, 2]} spacing={8} mb={12}>
                <VStack align="start" data-aos="fade-right" spacing={3}>
                    <HStack spacing={3}>
                        <FaLightbulb size={20} color="#805AD5" />
                        <Heading size="md">Notre Mission</Heading>
                    </HStack>
                    <Text color="gray.600">
                        Offrir des solutions créatives et professionnelles pour concevoir
                        des événements à fort impact, tout en garantissant qualité,
                        innovation et satisfaction client.
                    </Text>
                </VStack>

                <VStack align="start" data-aos="fade-left" spacing={3}>
                    <HStack spacing={3}>
                        <FaHeart size={20} color="#805AD5" />
                        <Heading size="md">Notre Devise</Heading>
                    </HStack>
                    <Text color="gray.600">
                        Transformer chaque idée en une expérience exceptionnelle et chaque
                        événement en un souvenir inoubliable.
                    </Text>
                </VStack>
            </SimpleGrid>

            {/* ÉQUIPE */}
            <VStack spacing={8} mb={12} data-aos="fade-up">
                <Heading>Notre Équipe</Heading>
                <SimpleGrid columns={[1, 2, 4]} spacing={6} w="100%">
                    {equipe.map((membre, index) => (
                        <Box
                            key={index}
                            p={4}
                            borderRadius="xl"
                            boxShadow="md"
                            transition="all 0.3s ease"
                            _hover={{ transform: "translateY(-6px)", boxShadow: "2xl" }}
                            textAlign="center"
                        >
                            <Image
                                src={membre.photo}
                                alt={membre.nom}
                                borderRadius="full"
                                boxSize="120px"
                                objectFit="cover"
                                mx="auto"
                                mb={4}
                            />
                            <Heading size="sm">{membre.nom}</Heading>
                            <Text fontSize="sm" color="gray.600">
                                {membre.poste}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </VStack>

            {/* POURQUOI NOUS CHOISIR */}
            <VStack spacing={4} data-aos="fade-up">
                <HStack spacing={3}>
                    <FaCheckCircle size={24} color="#805AD5" />
                    <Heading>Pourquoi nous choisir ?</Heading>
                </HStack>
                <VStack align="start" spacing={1} pt={2}>
                    <Text color="gray.600">✔ Approche professionnelle et personnalisée</Text>
                    <Text color="gray.600">✔ Créativité et innovation</Text>
                    <Text color="gray.600">✔ Respect des délais et du budget</Text>
                    <Text color="gray.600">✔ Satisfaction client au cœur de nos priorités</Text>
                </VStack>
            </VStack>
        </Box>
    );
};

export default About;
