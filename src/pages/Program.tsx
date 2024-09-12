import React from 'react';
import { Box, Text, Image, List, ListItem, ListIcon, HStack } from '@chakra-ui/react';
import { FaBook } from 'react-icons/fa';
import Slider from 'react-slick';

// import kayanProgram from '../assets/imgs/kayanProgram.webp';

import isImg1 from '../assets/imgs/islamic.webp';
import isImg2 from '../assets/imgs/isImg2.webp';
import isImg3 from '../assets/imgs/isImg3.webp';
import isImg4 from '../assets/imgs/isImg4.webp'
import isImg5 from '../assets/imgs/isImg5.webp'
import arImg0 from '../assets/imgs/arImg.webp';
import arImg1 from '../assets/imgs/arImg1.webp';
import arImg2 from '../assets/imgs/arImg2.webp';
import arImg3 from '../assets/imgs/arImg3.webp';
import arImg4 from '../assets/imgs/arImg4.webp';
import arImg5 from '../assets/imgs/arImg5.webp';
import arImg6 from '../assets/imgs/arImg6.webp';

const Program: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,  
    centerPadding: '0', 
   
  };
  const araImgs = [arImg1,arImg2,arImg0,arImg3,arImg4,arImg5,arImg6];
  const islamicImgs = [isImg1,isImg2,isImg3,isImg4,isImg5];


  return (
    <Box
      id="kayan-program"
      w={{ base: "100%", md: "80%", lg: "100%" }} 
      mx="auto" 
      mt={'2rem'}
      p="0.7rem"
      color="black"
      shadow="md"
      textAlign="center"
      overflow="hidden" 
    >

      {/* <Image
        src={kayanProgram}
        alt="kayanProgram"
        mx="auto"
        width ={{base:'100%', lg:"50vw"}}
        display="block"
        mb="2rem"
      /> */}

      <Text fontSize="xl" textAlign="center" fontWeight="bold">
        Our Program
      </Text>

      <List spacing={4} fontSize="lg" textAlign="left" p={'2rem'} mb={6} mx="auto" maxW="800px">
        <ListItem>
          <HStack align="start">
            <ListIcon as={FaBook} color="teal.500" />
            <Text>The Full Program covers Quran, Islamic Studies, and the Arabic Language.</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack align="start">
            <ListIcon as={FaBook} color="teal.500" />
            <Text>The Quran & Islamic Studies program focuses on the Quran for both boys and girls, encompassing memorization, Tajweed, Tafsir, and the application of the Holy Quran in their daily lives.</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack align="start">
            <ListIcon as={FaBook} color="teal.500" />
            <Text>The memorization segment helps children learn and retain Surahs, while Tajweed teaches them the correct pronunciation and recitation rules.</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack align="start">
            <ListIcon as={FaBook} color="teal.500" />
            <Text>The Tafsir sessions offer in-depth explanations of the Quranic verses in an interactive and engaging manner, tailored to match the children's age, ensuring they understand the lessons and can apply them in their daily lives.</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack align="start">
            <ListIcon as={FaBook} color="teal.500" />
            <Text>The Arabic program follows the Montessori education system, known for its child-centered approach that fosters independence and a love for learning.</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack align="start">
            <ListIcon as={FaBook} color="teal.500" />
            <Text>The curriculum is designed to enhance reading, writing, listening, and communication skills through various hands-on activities, interactive games, and structured lessons.</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack align="start">
            <ListIcon as={FaBook} color="teal.500" />
            <Text>Children will be introduced to the Arabic alphabet, basic vocabulary, sentence construction, and conversation skills, gradually advancing to more complex linguistic concepts.</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack align="start">
            <ListIcon as={FaBook} color="teal.500" />
            <Text>Sessions are suitable for boys and girls aged 3+ years up to university level and are divided according to the children's age and knowledge level.</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack align="start">
            <ListIcon as={FaBook} color="teal.500" />
            <Text>Younger children will participate in age-appropriate activities that lay the foundation for future learning, while older students will engage in more advanced studies, ensuring continuous progression and mastery of the subjects.</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack align="start">
            <ListIcon as={FaBook} color="teal.500" />
            <Text>The program aims to create a supportive and stimulating environment.</Text>
          </HStack>
        </ListItem>
      </List>

      <Box
        display={{base:"block",md:"block", lg: "flex"}} alignItems={'center'} justifyContent= "center" mx="auto" gap={'7rem'}  
      >
        <Box width={{base:"100%", lg:"30em", md:"100%"}} mb={"2rem"}>
          <Slider {...settings}>
          {
            araImgs.map((img, index) => (
              <Box key={index}>
                <Image
                  src={img}
                  alt='arabic image'
                  borderRadius="md"
                  width="100%"
                  height={{base:"25rem", lg:"25rem", md:"35rem"}}
                  objectFit="cover"
                />
                <Text mt={2} fontSize="md">
                  Arabic Program 
                </Text>
              </Box>
            ))
          }
   
          </Slider>
        </Box>
        <Box  width={{base:"100%", lg:"30em", md:"100%"}} mb={"2rem"}>
          <Slider {...settings}>
            {
              islamicImgs.map(img =>(<Box>
                <Image
                  src={img}
                  alt="Islamic Study"
                  borderRadius="md"
                  width="100%"
                  height={{base:"25rem", lg:"25rem", md:"35rem"}}
                  objectFit="cover"
                />
                <Text mt={2} fontSize="md">
                  Quran and Islamic Program 
                </Text>
              </Box>))
            }
          </Slider>
        </Box>
        
      </Box> 
    </Box>
  );
};

export default Program;

