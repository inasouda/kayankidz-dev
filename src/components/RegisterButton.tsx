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
    bgColor: 'orange.400', // Bright orange background
    color: 'white', // White text color for contrast
    borderRadius: 'md', // Rounded corners
    boxShadow: 'md', // Medium shadow for lift effect
    transition: 'all 0.2s ease-in-out', // Smooth transition for effects
    _hover: {
      bgColor: 'orange.500', // Darker orange on hover
      boxShadow: 'lg', // Larger shadow on hover
      transform: 'scale(1.05)', // Slight scaling on hover
    },
    _active: {
      bgColor: 'orange.600', // Even darker orange when active
      boxShadow: 'sm', // Smaller shadow when clicked
      transform: 'scale(0.98)', // Slightly smaller on click
    },
    _focus: {
      boxShadow: 'outline', // Outline on focus
    },
  },
});

const RegisterButton = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <ChakraButton onClick={handleRegisterClick} rightIcon={<CheckIcon />}>
      Register
    </ChakraButton>
  );
};

export default RegisterButton;
