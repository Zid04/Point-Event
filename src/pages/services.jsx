import React, { useEffect } from "react";
import {
    Box,
    SimpleGrid,
    Heading,
    Text,
    VStack,
    HStack,
    Image,
    Button,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

// Illustrations
import orgEven from "../assets/orgEven.PNG";
import pubImg from "../assets/pubImg.PNG";
import videoImg from "../assets/videoImg.PNG";
import shooting from "../assets/Shooting.PNG";
import communication from "../assets/communication.PNG";
import conseil from "../assets/conseil.PNG";

const Services = () => {
    const navigate = useNavigate(); //naviguer vers la page Réalisations

    // Initialisation des animations scroll
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic",
        });
        AOS.refresh();
    }, []);

    const services = [
        {
            title: "Organisation Événementielle",
            description:
                "Nous concevons, planifions et coordonnons vos événements avec professionnalisme afin de garantir une expérience unique et mémorable.",
            items: [
                "Mariage & Wedding Planner",
                "Sonorisation & DJ",
                "Impressario",
                "Organisation de cérémonies et fêtes",
            ],
            image: orgEven,
        },
        {
            title: "Publicité & Branding",
            description:
                "Nous créons des supports publicitaires impactants pour renforcer votre image et accroître votre visibilité.",
            items: [
                "Création d’affiches",
                "Conception de logo",
                "Spot publicitaire",
                "Identité visuelle",
            ],
            image: pubImg,
        },
        {
            title: "Montage Vidéo",
            description:
                "Nous réalisons des montages vidéo professionnels pour valoriser vos événements et contenus digitaux.",
            items: [
                "Montage événementiel",
                "Vidéos promotionnelles",
                "Contenus réseaux sociaux",
            ],
            image: videoImg,
        },
        {
            title: "Shooting Photo",
            description:
                "Nous capturons les moments forts de vos événements à travers des séances photo de haute qualité.",
            items: [
                "Shooting événementiel",
                "Portraits",
                "Photographie de produits",
                "Retouches professionnelles",
            ],
            image: shooting,
        },
        {
            title: "Communication Digitale",
            description:
                "Nous vous accompagnons dans le développement de votre présence en ligne et l’engagement de votre communauté.",
            items: [
                "Gestion des réseaux sociaux",
                "Création de contenus",
                "Campagnes digitales",
            ],
            image: communication,
        },
        {
            title: "Conseils & Accompagnement",
            description:
                "Nous offrons un accompagnement personnalisé pour assurer la réussite de vos projets événementiels.",
            items: [
                "Conseil stratégique",
                "Planification",
                "Accompagnement opérationnel",
            ],
            image: conseil,
        },
    ];

    return (
        <Box p={8} id="services">
            <Heading mb={10} textAlign="center" data-aos="fade-up">
                Nos Services
            </Heading>

            <SimpleGrid columns={[1, 2]} spacing={8}>
                {services.map((service, index) => (
                    <HStack
                        key={index}
                        spacing={6}
                        align="start"
                        p={6}
                        borderRadius="xl"
                        boxShadow="md"
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                        transition="all 0.3s ease"
                        _hover={{
                            transform: "translateY(-8px)",
                            boxShadow: "2xl",
                        }}
                    >
                        <Image
                            src={service.image}
                            alt={service.title}
                            boxSize="70px"
                            objectFit="contain"
                        />

                        <VStack align="start" spacing={2}>
                            <Heading size="md">{service.title}</Heading>
                            <Text color="gray.600">{service.description}</Text>

                            <VStack align="start" spacing={1} pt={2}>
                                {service.items.map((item, i) => (
                                    <Text key={i} fontSize="sm" color="gray.500">
                                        • {item}
                                    </Text>
                                ))}
                            </VStack>
                        </VStack>
                    </HStack>
                ))}
            </SimpleGrid>

            {/* BOUTON D'ACCROCHE VERS LA PAGE REALISATIONS */}
            <Box
                mt={16}
                p={8}

                textAlign="center"

                data-aos="fade-up"
            >
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                    Curieux de voir notre magie operer ?
                </Text>
                <Button
                    colorScheme="purple"
                    size="lg"
                    onClick={() => navigate("/realisations")}
                >
                    C'est par ici !
                </Button>
            </Box>
        </Box>
    );
};

export default Services;
