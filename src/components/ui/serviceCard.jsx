import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const ServiceCard = ({ title, description }) => {
    return (
        <Box
            p={6}
            borderRadius="xl"
            boxShadow="md"
            bg="white"
            _hover={{ boxShadow: "xl" }}
            transition="0.3s"
        >
            <Heading size="md" mb={3}>
                {title}
            </Heading>
            <Text color="gray.600">{description}</Text>
        </Box>
    );
};

export default ServiceCard;
