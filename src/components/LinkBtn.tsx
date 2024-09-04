import { Box, Button, Divider } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface Props {
    text: string;
    route: string;
    bgColor?: string;
    onClose : ()=>void;
}

const LinkBtn = ({ text, route, bgColor, onClose}: Props) => {
    const nav = useNavigate();
    const handleClick = () => {
        const isHashRoute = route.startsWith("#");
        if (isHashRoute) {
            const element = document.getElementById(route.slice(1));
          
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                onClose(); 
            } else {
                nav('/')
                setTimeout(() => {
                    window.location.hash = `${route}`;
                  }, 100);
            }
        } else {
            window.location.href = route;
        }

        onClose();
    };

    return (
        <>
            <Box
                width="100%"
                _hover={{ backgroundColor: bgColor }}
                p={6}
                transition="background-color 0.2s"
                cursor="pointer"
                onClick={handleClick}
            >
                <Button
                    variant="link"
                    colorScheme="teal"
                    sx={{ _hover: { color: 'orange.500' } }}
                >
                    {text}
                </Button>
            </Box>
            <Divider width="100%" />
        </>
    );
}

export default LinkBtn;
