import {
    Box,
    Flex,
    Image,
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

const NavBar = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const toggleDrawer = () => (isOpen ? onClose() : onOpen());
    
    
return (
    <>
    <Box
        as="nav"
        bg="white"
        position="sticky"
        top="0"
        zIndex="10000"
        // boxShadow="md"
    >
        <Container maxW="container.xl" h={"5rem"}>
        <Flex justifyContent="space-between" h="20" alignItems="center">
            <Image src={logo} maxH="4.5rem" alt="Logo" />
            <HStack spacing={4} display={{ base: "none", md: "flex" }}>
                <LinkBtn text="Home" route='/' onClose={onClose}/>
                <LinkBtn text="Our Vision"  route='#visionAndMission' onClose={onClose}/>
                <LinkBtn text="About Us"  route='/#about-us' onClose={onClose}/>
                <LinkBtn text="Kayan Program"  route='/' onClose={onClose}/>
                <LinkBtn text="Events"  route='#events' onClose={onClose}/>
                <LinkBtn text="Contact Us"  route='/#contact-us' onClose={onClose}/>
                {/* <LinkBtn text="Students"  route='/students' onClose={onClose}/> */}

            </HStack>
            <IconButton
            aria-label="Open menu"
            icon={isOpen ? <FaTimes  style={{ transform: 'scale(1.4)' }}/> : <FaBars style={{ transform: 'scale(1.4)' }} />}
           
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
                <LinkBtn text='Home' route='/' bgColor='orange.100' onClose={onClose}></LinkBtn>
                <LinkBtn text='Our Vision' route='#visionAndMission'  bgColor='orange.100' onClose={onClose}></LinkBtn>
                <LinkBtn text='About Us' route='#about-us' bgColor='orange.100' onClose={onClose}></LinkBtn>
                <LinkBtn text='Kayan Program' route='/' bgColor='orange.100' onClose={onClose}></LinkBtn>
                <LinkBtn text='Events' route='#events' bgColor='orange.100' onClose={onClose}></LinkBtn>
                <LinkBtn text='Contact Us' route='#contact-us' bgColor='orange.100' onClose={onClose}></LinkBtn>
                {/* <LinkBtn text="Students"  route='/students' onClose={onClose}/> */}

                
            </VStack>
            </Flex>
        </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
);
}

export default NavBar
