import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box
      as="footer"
      width="full"
      py={6}
    
      textAlign="center"
      borderTop="1px"
      borderColor={useColorModeValue("gray.300", "gray.600")}
    >
       
      <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
        &copy; {new Date().getFullYear()} Kayan Kidz. All rights reserved.
      </Text>
    
    </Box>
  );
};

export default Footer;
