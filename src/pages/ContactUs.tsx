import {  Flex, FormControl, FormLabel, Icon, Heading, Image } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import aboutus from '../assets/imgs/startKayanLogo.webp';

const ContactUs: React.FC = () => {
  return (
    <Flex
      id="contact-us"
      p="4"
      width="full"
      bgColor="gray.100"
      borderRadius="md"
      align="center"
      justify="center"
    >
      <Flex
        direction="row"
        align="center"
        justify="space-between"
        mx="auto"
        maxW="container.md"
        width="full"
      >
        <Flex
          direction="column"
          gap={8}
          align="flex-start"
          maxW="300px"
        >
          <Heading 
            as="h2"
            size="lg"
            textAlign="center"
            mb={3}
          >
            Contact Us
          </Heading>
          <Flex direction="row" align="center" w="full">
            <Icon as={EmailIcon} w={5} h={5} color="teal.500" mr={4} />
            <FormControl id="email">
              <FormLabel display="none">Contact Email</FormLabel>
              <a href="mailto:kayankidz@gmail.com">
                <FormLabel 
                  textAlign="left"
                  cursor="pointer"
                >
                  kayankidz@gmail.com
                </FormLabel>
              </a>
            </FormControl>
          </Flex>
          <Flex direction="row" align="left" w="full">
            <Icon as={PhoneIcon} w={5} h={5} color="teal.500" mr={4} />
            <FormControl id="phone">
              <FormLabel display="none">Phone Number</FormLabel>
              <a href="tel:+15879681800">
                <FormLabel 
                  textAlign="left"
                  cursor="pointer"
                >
                  +1 587 968 1800
                </FormLabel>
              </a>
            </FormControl>
          </Flex>
        </Flex>

        <Image
          src={aboutus}
          alt="About Us Image"
          boxSize={{ base: "7rem", lg: "15rem" }}
          ml={{ lg: 8 }}
          mt={{base:20}}
        />
      </Flex>
    </Flex>
  );
};

export default ContactUs;
