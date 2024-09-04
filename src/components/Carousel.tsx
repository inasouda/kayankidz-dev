
import Slider from 'react-slick';
import { Box, Image, chakra } from '@chakra-ui/react';
import car1 from '../assets/imgs/car1.webp'
import car2 from '../assets/imgs/car2.webp'
import car3 from '../assets/imgs/car3.webp'
import RegisterButton from './RegisterButton';


const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,  
    arrows: true,  
  };
  

const Carousel = () => {
    return (
        <Box width="100vw" mx="auto" overflow="hidden" height={'30rem'}> {/* Ensures full width */}
          <Slider {...carouselSettings}>
            <Box position={'relative'}>
              <StyledImage src={car1} alt="Slide 1"/> 
              <Overlay>Islamic School</Overlay>
            </Box>
            <Box position={'relative'}>
              <StyledImage src={car2} alt="Slide 2"/>
              <Overlay>Islamic School</Overlay>
            </Box>
            <Box position={'relative'}>
              <StyledImage src={car3} alt="Slide 3" />
              <Overlay>Islamic School</Overlay>
            </Box>
          </Slider>
          <RegBtnContainer>
            <RegisterButton />
          </RegBtnContainer>
        </Box>
      );
};

const StyledImage = chakra(Image, {
    baseStyle: {
      width: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      animation: 'zoom-in-animation 2s ease-in-out',
      transition: 'transform 0.3s ease-in-out',
      height: { base: '25rem', md: '32rem' },
      mb: { md: '2rem' },
    },
  });


const Overlay = chakra('div', {
    baseStyle: {
      position: 'absolute',
      top: '40%',
      display: 'flex',
      justifyContent: 'center',
      left: 0,
      color: 'white',
      alignItems: 'center',
      width: '100%',
      height: '6rem',
      fontSize: '1.5rem',
      fontWeight: '900',
      background: 'linear-gradient(to left, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.7))',
    },
});
  
const RegBtnContainer = chakra("div", {
    baseStyle: {
      position: "relative",
      bottom: { base: '8rem', md: '3rem' },
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      zIndex: 10,
    },
  });

export default Carousel