import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
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
       <Events/>
       <ContactUs/>
       <Footer />
    </div>
  )
}
