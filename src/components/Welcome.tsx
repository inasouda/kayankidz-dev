
import { Flex, Image } from '@chakra-ui/react';
import test from '../assets/imgs/Yellow Joyful Back To School_01.png';
import RegisterButton from './RegisterButton';
const Welcome = () => {
  return (
    <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <Image 
        // display={{ base: 'block', lg: 'none' }} 
        // width={{ base: '100vw' }}
        objectFit={'cover'}  
        height={{ lg: '40rem' }} 
        src={test} 
      />
      <RegisterButton/>
  </Flex>

  )
}

export default Welcome