import React from "react";
import {
    Box,
    Flex,
    Link,
    Button,
    IconButton,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Stack,
    Text,
} from "@chakra-ui/react";


import { Link as RouterLink } from "react-router-dom";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg="white" px={8} py={4} boxShadow="sm" position="sticky" top="0" zIndex="100">
            <Flex align="center" justify="space-between">

                {/* LOGO */}
                <img src={logo} alt="Point Event" style={{ width: "80px", height: "80px" }} />
                <Text fontSize="xl" fontWeight="bold">Point Event</Text>

                {/* MENU DESKTOP */}
                <Flex gap={6} align="center" display={{ base: "none", md: "flex" }}>
                    <Link as={RouterLink} to="/">
                        Accueil
                    </Link>

                    <Link as={RouterLink} to="/about">
                        À propos
                    </Link>

                    <Link as={RouterLink} to="/services">
                        Services
                    </Link>

                    <Link as={RouterLink} to="/realisations">
                        Réalisations
                    </Link>

                    <Link as={RouterLink} to="/contact">
                        Contact
                    </Link>
                </Flex>

                {/* BOUTON MOBILE */}
                <IconButton
                    icon={<FiMenu />}
                    variant="ghost"
                    display={{ base: "block", md: "none" }}
                    onClick={onOpen}
                />
            </Flex>

            {/* DRAWER MOBILE */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody>
                        <Stack spacing={4} mt={10}>
                            <Link as={RouterLink} to="/" onClick={onClose}>
                                Accueil
                            </Link>

                            <Link as={RouterLink} to="/about" onClick={onClose}>
                                À propos
                            </Link>


                            <Link as={RouterLink} to="/services" onClick={onClose}>
                                Services
                            </Link>


                            <Link as={RouterLink} to="/realisations" onClick={onClose}>
                                Réalisations
                            </Link>

                            <Link as={RouterLink} to="/contact" onClick={onClose}>
                                Contact
                            </Link>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Navbar;
