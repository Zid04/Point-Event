import React from "react";
import { useEffect } from "react";
import {
    Box,
    Heading,
    Text,
    Input,
    Textarea,
    Button,
    VStack,
    HStack,
    Checkbox,
    CheckboxGroup,
    Link,
} from "@chakra-ui/react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_PointE123",   // Service ID EmailJS
                "template_3wwbfzo",  //  Template ID EmailJS
                e.target,
                "XYtShQggcMtKfjMI8"    //  clé publique EmailJS
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message envoyé avec succès !");
                    e.target.reset(); // Vider le formulaire
                },
                (error) => {
                    console.log(error.text);
                    alert("Erreur lors de l'envoi. Réessayez.");
                }
            );
    };

    return (
        <Box p={8} maxW="900px" mx="auto">
            {/* TITRE */}
            <VStack spacing={4} mb={8} data-aos="fade-up">
                <Heading>Contactez-nous</Heading>
                <Text textAlign="center" color="gray.600">
                    Vous avez un projet ou une question ? Remplissez le formulaire ci-dessous
                    ou contactez-nous directement via nos réseaux sociaux.
                </Text>
            </VStack>

            {/* FORMULAIRE */}
            <form onSubmit={sendEmail}>
                <VStack spacing={4} mb={12} data-aos="fade-up">
                    <Input name="user_name" placeholder="Nom complet" size="md" required />
                    <Input name="user_email" type="email" placeholder="Email" size="md" required />
                    <Input name="subject" placeholder="Sujet" size="md" />
                    <Textarea name="message" placeholder="Votre message" size="md" required />

                    {/* CHECKBOX - Vos besoins */}
                    <Box w="100%" textAlign="left">
                        <Text mb={2} fontWeight="bold">Quels sont vos besoins ?</Text>
                        <CheckboxGroup colorScheme="purple">
                            <VStack align="start" spacing={1}>
                                <Checkbox name="needs" value="Organisation événementielle">Organisation événementielle</Checkbox>
                                <Checkbox name="needs" value="Publicité / Spot publicitaire">Publicité / Spot publicitaire</Checkbox>
                                <Checkbox name="needs" value="Shooting photo / vidéo">Shooting photo / vidéo</Checkbox>
                                <Checkbox name="needs" value="Communication digitale">Communication digitale</Checkbox>
                                <Checkbox name="needs" value="Conseil & accompagnement">Conseil & accompagnement</Checkbox>
                            </VStack>
                        </CheckboxGroup>
                    </Box>

                    <Button type="submit" colorScheme="purple" w="full">
                        Envoyer
                    </Button>
                </VStack>
            </form>

            {/* INFORMATIONS DE CONTACT */}
            <VStack spacing={3} data-aos="fade-up">
                <Text color="gray.600">Email: contact@pointevent.com</Text>
                <Text color="gray.600">Téléphone: +237 691 00 47 72</Text>
                <Text color="gray.600">Adresse: Douala, Cameroun</Text>

                {/* RÉSEAUX SOCIAUX */}
                <HStack spacing={4} mt={4}>
                    <Link href="https://wa.me/237691004772" isExternal>
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
        </Box>
    );
};

export default Contact;
