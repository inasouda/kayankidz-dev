import { Box, Text, Image, Flex} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

interface EventProps {
  title: string;
  description: string;
  images: string[];
  bgcolor: string;
}

const Event: React.FC<EventProps> = ({ title, description, images, bgcolor }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
   
  };
  return (
    <Box
      w={{ base: "100%", md: "80%", lg: "80%" }} 
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
            <Text  fontSize="xl" fontWeight={'bold'} mb={4}>
              {title}
            </Text>
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
              display={{ base: "none", lg: "flex" }}
              justifyContent={'center'}
              alignItems={'center'}
            />
            <Box mb={"1.5rem"}>
              <Slider {...settings}>
                {
                  images.map((img, index) => (
                    <Box key={index}>
                      <Image
                        src={img}
                        borderRadius="md"
                        width="100%"
                        height="25rem"
                        objectFit="cover"
                      />
                    </Box>
                  ))
                }
              </Slider>
            </Box>
          </Box>
      </Flex>
    </Box>
  );
};

export default Event;
