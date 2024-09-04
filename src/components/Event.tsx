import { Box, Heading, Text, Image, SimpleGrid, Flex,
      useDisclosure, Modal, ModalOverlay, ModalContent,
      ModalCloseButton, ModalBody } from "@chakra-ui/react";
import React from "react";

interface EventProps {
  title: string;
  description: string;
  images: string[];
  bgcolor: string;
}

const Event: React.FC<EventProps> = ({ title, description, images, bgcolor }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    onOpen();
  };

  return (
    <Box
      p="1rem"
      m={{ base: "1rem 0", md: "2rem 10rem", lg:"2rem 10rem"}} 
      textAlign="center"
      bgColor={bgcolor}
      color="white"
      borderRadius="1.5rem"
    >
      <Flex
        direction={{ base: "column", lg: "row" }} 
        align="center"
        justify="center"
        gap={{ base: "4", lg: "8" }}
      >
        <Box
          flex="1"
          textAlign={{ base: "center", lg: "left" }} 
          p={4}
        >
          <Heading as="h2" size="lg" mb={4}>
            {title}
          </Heading>
          <Text fontSize="md" mb={4}>
            {description}
          </Text>
        </Box>
        <Box
          flex="1"
          w={{ base: "full", lg: "50%" }}
          p={4}
          maxH="31.25rem" 
          overflowY="auto"
          bgColor="#F0F0F0"
          borderRadius="md"
          border="1px solid #ccc" 
          boxShadow="md"
          position="relative" 
        >

          <Box
            position="absolute"
            top="0"
            right="0"
            bottom="0"
            left="0"
            pointerEvents="none"
            bgGradient="linear(to-r, transparent, rgba(0, 0, 0, 0.2))"
            display={{ base: "none", lg: "block" }}
          />
          <SimpleGrid 
            columns={{ base: 2, md: 2, lg: 3 }}
            spacing={4}
          >
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Event Image ${index + 1}`}
                boxSize={{ base: "9.375rem", md: "12.5rem", lg: "15.625rem" }} 
                borderRadius="md"
                boxShadow="md"
                objectFit="cover"
                cursor="pointer"
                onClick={() => handleImageClick(img)}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Flex>

      <Box display="flex" justifyContent="center" alignItems="center" height="50%">


      {selectedImage && (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody p={0}>
              <Image src={selectedImage} alt="Enlarged view" />
            </ModalBody>
          </ModalContent>
        </Modal>
       )}

        </Box>

    </Box>
  );
};

export default Event;
