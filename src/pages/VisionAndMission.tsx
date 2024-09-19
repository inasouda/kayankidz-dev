import { Box, Flex, Text, Icon} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

const Vision = () => (
    <Box
        p="1rem"
        textAlign="center"
        bgColor= "rgba(0, 128, 128)"
        color="white"
        borderRadius="1.5rem"
        flex="1"
    >
        <Text  fontSize="xl"  mb={4} fontWeight="bold">
            <Icon as={ViewIcon} w={8} h={8} mr={2} />
            Our Vision
        </Text>
        <Text fontSize="md" lineHeight="taller">
          We strive to instill strong Islamic values and guide <strong>our children</strong> toward embodying the teachings of the Quran in all aspects of their character. Our goal is to raise Muslim children who thoroughly understand the Arabic language and the Quran, empowering them to apply these principles in their daily lives.
        </Text>
   
    </Box>
);

const VisionAndMission = () => (
    <Flex 
        id="visionAndMission"
        direction={{ base: "column", md: "row" }} 
        alignItems="center"
        justifyContent="center"
        p={4}
        mx="auto" 
     
        width={{ base: "100%", md: "80%", lg:"40%" }}
    >
        <Vision />
    </Flex>
);

export default VisionAndMission;
