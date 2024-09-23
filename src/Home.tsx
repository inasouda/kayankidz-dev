import '@fontsource/poppins'; 
import Footer from "./components/Footer"
import Welcome from "./components/Welcome"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Events from "./pages/Events"
import VisionAndMission from "./pages/VisionAndMission"
import Program from './pages/Program';
import Library from './pages/Library';

export const Home = () => {
  return (
    <div>
       <Welcome/>
       <VisionAndMission/>
       <AboutUs />
       <Program/>
       <Library/>
       <Events/>
       <ContactUs/>
       <Footer />
    </div>
  )
}
