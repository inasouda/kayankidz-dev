import {
    Box,
    Button,
    useDisclosure,
    Divider,
} from '@chakra-ui/react';



// import CHButton from './CHButton';
interface Props{
    text:string;
    route:string;
    bgColor?:string;
}

const LinkBtn = ({text, route, bgColor}:Props) => {
    const { onClose } = useDisclosure();
    const handleScrollTo = (id:string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        onClose();
        }
        else{
            window.location.href = `/`;
            onClose();

        }
    };
  return (
    < >  
        <Box
            width="100%"
            _hover={{ backgroundColor: `${bgColor}` }}
            p={6}
            transition="background-color 0.2s"
            onClick={() => {
                handleScrollTo(`${route}`);
                }}
        >
            <Button
                
                variant="link"
                colorScheme="teal"
                sx={{ _hover: { color: 'orange.500' } }}
                onClick={() => {
                handleScrollTo('');
                }}
            >
                {text}
            </Button>
        </Box>
        <Divider  width="100%" />

    </>
  )
}

export default LinkBtn