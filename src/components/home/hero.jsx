import { Box, Heading, Text, Button, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <Box position="relative" h="100vh" overflow="hidden">

            {/* VIDEO CLOUDINARY */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                src="https://res.cloudinary.com/dtzwk7ooi/video/upload/v1769548266/Hero1_txcvyj.mp4"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />

            {/* OVERLAY */}
            <Box
                position="absolute"
                inset={0}
                bg="blackAlpha.600"
            />

            {/* CONTENU */}
            <Box
                position="relative"
                zIndex={1}
                h="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                color="white"
                px={4}
            >

                {/* TITRE */}
                <Heading
                    size="2xl"
                    mb={4}
                    opacity={0}
                    animation="fadeInTitle 1s forwards"
                    data-aos="fade-up"
                >
                    Point Event
                </Heading>

                {/* TEXTE */}
                <Text
                    fontSize="xl"
                    mb={6}
                    opacity={0}
                    animation="fadeInText 1s forwards 0.4s"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Nous donnons vie à vos événements
                </Text>

                {/* BOUTONS */}
                <HStack
                    spacing={4}
                    opacity={0}
                    animation="fadeInButtons 1s forwards 0.8s"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                >
                    <Button
                        as={RouterLink}
                        to="/contact"
                        colorScheme="purple"
                        size="lg"
                        _hover={{ transform: "scale(1.05)" }}
                    >
                        Nous contacter
                    </Button>

                    <Button
                        as={RouterLink}
                        to="/about"
                        variant="outline"
                        colorScheme="whiteAlpha"
                        size="lg"
                        _hover={{ transform: "scale(1.05)" }}
                    >
                        En savoir plus
                    </Button>
                </HStack>
            </Box>

            {/* ANIMATIONS CSS */}
            <style>
                {`
          @keyframes fadeInTitle {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInText {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInButtons {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
            </style>
        </Box>
    );
};

export default Hero;
