import {
    Box,
    Flex,
    Image,
    Button,
    Container,
    VStack,
    HStack,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    IconButton,
    useDisclosure,
} from '@chakra-ui/react';
import { FaBars, FaTimes} from 'react-icons/fa';
import logo from '../assets/imgs/logo.webp';
import LinkBtn from './LinkBtn';
import { useState } from 'react';

const NavBar = () => {
    const {  onClose } = useDisclosure();
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => setIsOpen(!isOpen);

    const handleScrollTo = (id:string) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        onClose();
        }
        else{
            window.location.href = `/#${id}`;
            onClose();
        }
    };
    
return (
    <>
    {/* Navigation Bar */}
    <Box
        as="nav"
        bg="white"
        position="sticky"
        top="0"
        zIndex="10000"
        boxShadow="md"
    >
        <Container maxW="container.xl" h={"5rem"}>
        <Flex justifyContent="space-between" h="20" alignItems="center">
            <Image src={logo} maxH="4.5rem" alt="Logo" />
            <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            <LinkBtn text="Home"  route='/'/>
            <LinkBtn text="Mission"  route='/'/>
            <LinkBtn text="Programs"  route='/'/>
            <LinkBtn text="About Us"  route='/'/>
            <LinkBtn text="Contact Us"  route='/'/>
            </HStack>
            <IconButton
            aria-label="Open menu"
            icon={isOpen ? <FaTimes  style={{ transform: 'scale(1.2)' }}/> : <FaBars style={{ transform: 'scale(1.2)' }} />}
           
            display={{ base: "flex", md: "none" }}
            onClick={toggleDrawer} 
            color="teal"
            variant="unstyled"
            sx={{
                _hover: { background: 'none' },
                _focus: { boxShadow: 'none' },
                _active: { background: 'none' },
            }}
            />
        </Flex>
        </Container>
    </Box>

    {/* Drawer Menu */}
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody paddingTop={"2rem"}>
            <Flex
            direction="column"
            width="100%"
            justify="flex-end"
            height="100%"
            >
            <VStack spacing={0} align="start" width="100%">
                <LinkBtn text='Home' route='/' bgColor='orange.100'></LinkBtn>
                <LinkBtn text='Mission' route='/'  bgColor='orange.100'></LinkBtn>
                <LinkBtn text='Programs' route='/' bgColor='orange.100'></LinkBtn>
                <LinkBtn text='About Us' route='/' bgColor='orange.100'></LinkBtn>
                <LinkBtn text='Contact Us' route='/' bgColor='orange.100'></LinkBtn>
            </VStack>
            </Flex>
        </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
);
}

export default NavBar
