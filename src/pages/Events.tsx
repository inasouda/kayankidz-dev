// EventsPage.jsx
import { VStack, Heading } from "@chakra-ui/react";
import Event from "../components/Event"; 
import ramadan1 from "../assets/imgs/ramadan.webp";
import ramadan2 from "../assets/imgs/ramadan1.webp"; 
import ramadan3 from "../assets/imgs/ramadn2.webp"; 
import ramadan4 from "../assets/imgs/ramadan3.webp"; 
import ramadan5 from "../assets/imgs/eid1.webp"; 
import ramadan6 from "../assets/imgs/ramadan5.webp"; 
import ramadan7 from "../assets/imgs/ramadan6.webp"; 
import ramadan8 from "../assets/imgs/eid2.webp"; 
import ramadan9 from "../assets/imgs/eid.webp"; 
import ramadan10 from "../assets/imgs/ramadan8.webp"; 
import ramadan11 from "../assets/imgs/ramadan9.webp"; 
import ramadan12 from "../assets/imgs/ramadan10.webp"; 
import ramadan13 from "../assets/imgs/ramadan11.webp"; 
import ramadan14 from "../assets/imgs/ramadan12.webp"; 



import hajj1 from "../assets/imgs/hajj.webp"
import hajj2 from "../assets/imgs/hajj1.webp"
import hajj3 from "../assets/imgs/hajj3.webp"
import hajj4 from "../assets/imgs/hajj5.webp"
import hajj5 from "../assets/imgs/hajj6.webp"
import hajj6 from "../assets/imgs/hajj7.webp"
import hajj7 from "../assets/imgs/eid2.webp"
import hajj8 from "../assets/imgs/eid4.webp"



const Events = () => {
  const ramadanEventImages = [
    ramadan1, ramadan2, ramadan3, ramadan4, ramadan5,
    ramadan6, ramadan7, ramadan8, ramadan9, ramadan10,
    ramadan11, ramadan12, ramadan13, ramadan14

  ];
  const hajjEventImages = [
    hajj1, hajj2, hajj3, hajj4, hajj5, hajj6, hajj7, hajj8

  ];
  const ramadanEvent = {
    title: "Ramadan Event",
    description:
      "Kayan’s annual Ramadan Celebration is a vibrant celebration where kids dive into the spirit of the holy month with loads of fun and excitement! Through interactive games, joyful singing of Ramadan songs, and dressing up in traditional clothes, they learn about the significance of Ramadan and how Muslims celebrate it. The day is packed with energy, laughter, and, of course, the thrill of receiving goodie bags. It’s a joyful occasion where children share these special moments with their families, parents, and friends, making it an unforgettable and enriching experience for everyone!",
    images: ramadanEventImages,
  };

  const hajjEvent = {
    title: "Hajj Event",
    description:
      "In Kayan Hajj celebration event, the kids  learn about the rituals of this sacred pilgrimage in a lively atmosphere, featuring interactive games, storytelling, and creative crafts that highlight the importance of Hajj. Dressed in hajj resembling clothes, children enjoy a day filled with excitement, cultural experiences, and special treats. The event encourages them to connect with the traditions of Hajj and share the joy with their families and friends, creating lasting memories and a deeper understanding of this important part of one of the 5 pillars of Islam.",
    images: hajjEventImages,
  };

  return (
    
      <VStack id='events'  spacing={8} p={4} >
        <Heading as="h1" size="xl" textAlign="center" color="#008080" mt={4} >
          Kayan Events
        </Heading>
        <Event
          title={ramadanEvent.title}
          description={ramadanEvent.description}
          images={ramadanEvent.images}
          bgcolor="#008080"

        />
        <Event
          title={hajjEvent.title}
          description={hajjEvent.description}
          images={hajjEvent.images}
          bgcolor="#F49754"


        />
      </VStack>
   
  );
};

export default Events;
