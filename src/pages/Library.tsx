import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import libraryImg from '../assets/imgs/Library.webp';

const Library = () => {
  return (
    <Box id="kayan-library">   
        <Heading as="h1" size="xl" textAlign="center" color="#008080" mt={4} mb={7}>
            Kayan Library
        </Heading>
        <Image
            src={libraryImg}
            alt="About Us Image"
            boxSize={{ base: "20rem", lg: "25rem" }}
            mx="auto" 
            mb={7}
          />
        <Flex justifyContent={'center'} >
            <Box width={'80%'}  borderBottom={'0.01rem solid black'}/>
      </Flex>
  </Box>
  )
}

export default Library