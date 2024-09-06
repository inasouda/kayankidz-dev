import { Box, Flex, Heading, Text, Icon} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

const Vision = () => (
    <Box
        p="1rem"
        // m={{ base: "0rem 0", md: "3rem 2rem" , lg: "3rem "}}
        textAlign="center"
        bgColor="#008080" 
        color="white"
        borderRadius="1.5rem"
        flex="1"
    >
        <Heading as="h1" size="md" mb={4}>
            <Icon as={ViewIcon} w={8} h={8} mr={2} />
            Our Vision
        </Heading>
        <Text fontSize="lg" lineHeight="taller">
          We strive to instill strong Islamic values and guide *our children* toward embodying the teachings of the Quran in all aspects of their character. Our goal is to raise Muslim children who thoroughly understand the Arabic language and the Quran, empowering them to apply these principles in their daily lives.
        </Text>
   
    </Box>
);

// const Mission = () => (
//     <Box
//         p="1rem"
//         m={{ base: "1rem 0", md: "2rem 2rem" }}
//         textAlign="center"
//         bgColor="#F49754" // Background color for mission
//         color="white"
//         borderRadius="1.5rem"
//         flex="1"
//     >
//         <Heading as="h1" size="md" mb={4}>
//             <Icon as={SunIcon} w={8} h={8} mr={2} />
//             Our Mission
//         </Heading>
//         <Text fontSize="lg" lineHeight="taller">
//             Our Mission at Kayan School is to provide a comprehensive and transformative educational experience that empowers students to excel academically, spiritually, and socially. We are committed to fostering a love for the Arabic language and a deep understanding of Islamic principles, enabling our students to become well-rounded individuals with a strong sense of identity and purpose.
//         </Text>
//     </Box>
// );

const VisionAndMission = () => (
    <Flex 
        id="visionAndMission"
        direction={{ base: "column", md: "row" }} 
        alignItems="center"
        justifyContent="center"
        p={4}
        mx="auto" 
     
        width={{ base: "100%", md: "80%", lg:"40%" }} // Full width on small screens, limited width on larger screens
    >
        <Vision />
        {/* <Mission /> */}
    </Flex>
);

export default VisionAndMission;
