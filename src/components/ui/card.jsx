import React from "react";
import { Box, Text, HStack, Tag } from "@chakra-ui/react";

const Card = ({ title, description, media, services = [] }) => {
    // Détecte si le media est une vidéo ou une image
    const isVideo = media.endsWith(".mp4") || media.endsWith(".webm");

    return (
        <Box
            p={4}
            borderRadius="xl"
            boxShadow="md"
            transition="all 0.3s ease"
            _hover={{ transform: "translateY(-6px)", boxShadow: "xl" }}
        >
            {/* MEDIA */}
            {isVideo ? (
                <video
                    src={media}
                    controls
                    style={{ width: "100%", borderRadius: "10px" }}
                />
            ) : (
                <Box
                    as="img"
                    src={media}
                    alt={title}
                    style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }}
                />
            )}

            {/* TITRE */}
            <Text fontWeight="bold" mt={4} fontSize="lg">
                {title}
            </Text>

            {/* DESCRIPTION */}
            {description && (
                <Text fontSize="sm" color="gray.600" mb={3}>
                    {description}
                </Text>
            )}

            {/* SERVICES (optionnel) */}
            {services.length > 0 && (
                <HStack spacing={2} wrap="wrap">
                    {services.map((service, index) => (
                        <Tag key={index} colorScheme="purple" variant="subtle">
                            {service}
                        </Tag>
                    ))}
                </HStack>
            )}
        </Box>
    );
};

export default Card;
