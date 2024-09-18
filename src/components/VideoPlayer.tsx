

import { Box, Container } from '@chakra-ui/react';
import video  from '../assets/imgs/kayan.mp4'
const VideoPlayer = () => {
  return (
    <Container maxW="container.md" mt={4}>
      <Box 
        borderWidth="0.1rem" 
        borderRadius="md" 
        overflow="hidden" 
        boxShadow="md"
        mb="1rem"
      >
        <video
          width="100%"
          controls
          autoPlay
          muted
          style={{ display: 'block', width: '100%', height: '30rem' }}
        >
          <source src={video}  type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Container>
  );
};

export default VideoPlayer;
