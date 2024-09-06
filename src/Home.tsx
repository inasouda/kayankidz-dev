import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import Welcome from "./components/Welcome"

import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Events from "./pages/Events"
import VisionAndMission from "./pages/VisionAndMission"

export const Home = () => {
  return (
    <div>
       <Carousel />
       <VisionAndMission/>

       <AboutUs />
       <Welcome/>

       <Events/>
       <ContactUs/>
       <Footer />
    </div>
  )
}
