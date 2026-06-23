import React from "react";
import { Box, VStack, HStack, Text, Link, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Import tes logos partenaires
{/*import logo1 from "../assets/partenaire1.png";
import logo2 from "../assets/partenaire2.png";
import logo3 from "../assets/partenaire3.png";*/}

const Footer = () => {
    // Init AOS pour animations
    React.useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <Box bg="gray.100" p={8} mt={12}>
            <SimpleGrid columns={[1, 2, 4]} spacing={8} mb={8}>
                {/* Explorer */}
                <VStack align="start" data-aos="fade-up">
                    <Heading size="sm" mb={2}>Explorer</Heading>
                    <Link href="/">Accueil</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/realisations">Réalisations</Link>
                    <Link href="/about">À propos</Link>
                    <Link href="/contact">Contact</Link>
                </VStack>

                {/* Réseaux sociaux */}
                <VStack align="start" data-aos="fade-up">
                    <Heading size="sm" mb={2}>Réseaux sociaux</Heading>
                    <HStack spacing={3}>
                        <Link href="https://wa.me/2376XXXXXXX" isExternal>
                            <FaWhatsapp size={24} color="#25D366" />
                        </Link>
                        <Link href="https://facebook.com" isExternal>
                            <FaFacebookF size={24} color="#1877F2" />
                        </Link>
                        <Link href="https://instagram.com" isExternal>
                            <FaInstagram size={24} color="#E4405F" />
                        </Link>
                        <Link href="https://www.tiktok.com" isExternal>
                            <FaTiktok size={24} color="#000000" />
                        </Link>
                    </HStack>
                </VStack>

                {/* Partenaires 
                <VStack align="start" data-aos="fade-up">
                    <Heading size="sm" mb={2}>Partenaires</Heading>
                    <HStack spacing={3}>
                        <Image src={logo1} alt="Partenaire 1" boxSize="50px" objectFit="contain" />
                        <Image src={logo2} alt="Partenaire 2" boxSize="50px" objectFit="contain" />
                        <Image src={logo3} alt="Partenaire 3" boxSize="50px" objectFit="contain" />
                    </HStack>
                </VStack>*/}

                {/* À propos rapide */}
                <VStack align="start" data-aos="fade-up">
                    <Heading size="sm" mb={2}>À propos</Heading>
                    <Text color="gray.600" fontSize="sm">
                        © 2026 Point Event. Tous droits réservés. | Développé par Zid
                    </Text>
                </VStack>
            </SimpleGrid>
        </Box>
    );
};

export default Footer;
