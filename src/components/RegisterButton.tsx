import { Button, chakra } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const ChakraButton = chakra(Button, {
  baseStyle: {
    colorScheme: 'orange',
    variant: 'solid',
    px: { base: 6, md: 8 },
    py: { base: 6, md: 7 },
    fontWeight: 'bold',
    bgColor: 'orange.400', 
    color: 'white', 
    borderRadius: 'md',
    boxShadow: 'md', 
    transition: 'all 0.2s ease-in-out',
    _hover: {
      bgColor: 'orange.500', 
      boxShadow: 'lg', 
      transform: 'scale(1.05)', 
    },
    _active: {
      bgColor: 'orange.600', 
      boxShadow: 'sm', 
      transform: 'scale(0.98)', 
    },
    _focus: {
      boxShadow: 'outline',
    },
  },
});

const RegisterButton = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    // <ChakraButton onClick={handleRegisterClick} rightIcon={<CheckIcon />}>
    <ChakraButton fontWeight={'bold'} fontSize={'1.2rem'} onClick={handleRegisterClick}>
      Register
    </ChakraButton>
  );
};

export default RegisterButton;
