
import { Image } from '@chakra-ui/react';
import test from '../assets/imgs/Yellow Joyful Back To School (2).png';
const Welcome = () => {
  return (
    <Image 
    display={{ base: 'block', lg: 'none' }} 
    width={{ base: '100vw' }} 

    objectFit={'cover'}  
    height={{ base: '20rem' }} 
    src={test} 
  />
  )
}

export default Welcome