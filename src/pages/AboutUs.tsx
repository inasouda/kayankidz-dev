import { Box, Image, Text, VStack, Flex } from "@chakra-ui/react";
import aboutus from '../assets/imgs/startKayanLogo.webp';
import artImg from '../assets/imgs/aboutus.webp';

const AboutUs = () => {
  return (
    <Box
      id="about-us"
      bg="gray.100"
      w={{ base: "100%", md: "80%", lg: "80%" }} 
      mx="auto" 
      p="1.5rem"
      color="black"
      shadow="md"
    >
     
      <Flex
        direction={{ base: "column", lg: "row" }} 
        align="center" 
        justify="center" 
        gap="2rem" 
      >
        <VStack spacing={4} textAlign="center" flex="1">
          <Image
            src={aboutus}
            alt="About Us Image"
            boxSize={{ base: "10rem", lg: "15rem" }}
            mx="auto" 
          />
          <Text fontSize="xl" fontWeight="bold">
            About Us
          </Text>
          <Text fontSize="md">
          Kayan School began its journey in 2018 with a deep commitment to nurturing children's connection to Islam and fostering a strong Islamic community. We started in a modest condo, and as our community grew, so did our space. We moved to a larger house and eventually had to find an even bigger location to meet the growing demand.

          Our motivation has always been the joy and well-being of the children. Creating an environment where they feel happy, excited, and eager to return has been our driving force from the start.

          Despite the many challenges and obstacles we’ve faced, our dedication to the children's happiness has kept us pushing forward. We are determined to make Kayan School one of the most successful Islamic schools in Calgary, where every child feels connected, supported, and inspired.
          </Text>
        </VStack>

        <Box flex="1" textAlign="center">
          <Image 
            src={artImg}
            alt="Art Image"
            boxSize={{ base: "20rem", lg: "30rem" }} 
            mx="auto" 
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutUs;
