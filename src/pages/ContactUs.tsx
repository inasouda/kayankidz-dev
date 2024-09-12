import { Box, Flex, FormControl, FormLabel, Icon, Heading } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactUs: React.FC = () => {
  return (
    <Box
      id="contact-us"
      p="4"
      width="full"
      bgColor="gray.100"
      borderRadius="md"
      boxShadow="md"
    >
      <Heading 
        as="h2"
        size="lg"
        textAlign="center"
        mb={8}
      >
        Contact Us
      </Heading>

      <Flex
        direction="column"
        align="center"
        justify="center"
        gap={8}
        wrap="wrap"
        mx="auto"
        maxW="container.md"
      >
        <Flex direction="row" align="center" w="full" maxW="300px">
          <Icon as={EmailIcon} w={8} h={8} color="teal.500" mr={4} />
          <FormControl id="email">
            <FormLabel display="none">Contact Email</FormLabel>
            <a href="mailto:kayankidz@gmail.com">
              <FormLabel 
                textAlign="center"
                cursor="pointer"
              >
                kayankidz@gmail.com
              </FormLabel>
            </a>
          </FormControl>
        </Flex>
        <Flex direction="row" align="center" w="full" maxW="300px">
          <Icon as={PhoneIcon} w={8} h={8} color="teal.500" mr={4} />
          <FormControl id="phone">
            <FormLabel display="none">Phone Number</FormLabel>
            <a href="tel:+15879681800">
              <FormLabel 
                textAlign="center"
                cursor="pointer"
              >
                +1 587 968 1800
              </FormLabel>
            </a>
          </FormControl>
        </Flex>

        {/* Location .. do it later */}
        {/* <Flex direction="row" align="center" w="full" maxW="300px">
          <Icon as={FontAwesomeIcon} icon={faMapMarkerAlt} w={8} h={8} color="teal.500" mr={4} />
          <FormControl id="location">
            <FormLabel display="none">Location</FormLabel>
            <a 
              href="https://www.google.com/maps?q=Zebra+Academy,+Mohageny,+Calgary,+AB,+Canada"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormLabel 
                textAlign="center"
                cursor="pointer"
              >
                Zebra Academy, Mohageny, Calgary, AB, Canada
              </FormLabel>
            </a>
          </FormControl>
        </Flex> */}
      </Flex>
      
    </Box>
  );
};

export default ContactUs;
