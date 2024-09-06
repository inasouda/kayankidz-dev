import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ConfirmationPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box textAlign="center" p={6}>
      <Heading mb={4} color={'teal'}>Registration Successful!</Heading>
      <Text mb={4}>Thank you for registering. We have received your information and will contact you soon.</Text>
      <Button onClick={handleGoHome} fontSize={'1.2rem'} color={'white'} width={'10rem'} borderRadius={'3rem'} bg={'orange.400'}>Go to Home</Button>
    </Box>
  );
};

export default ConfirmationPage;
