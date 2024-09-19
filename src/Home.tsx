import '@fontsource/poppins'; 
import Footer from "./components/Footer"
import Welcome from "./components/Welcome"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Events from "./pages/Events"
import VisionAndMission from "./pages/VisionAndMission"
import Program from './pages/Program';
// import VideoPlayer from './components/VideoPlayer';

export const Home = () => {
  return (
    <div>
       <Welcome/>
       <VisionAndMission/>
       {/* <VideoPlayer/> */}
       <AboutUs />
       <Program/>
       <Events/>
       <ContactUs/>
       <Footer />
    </div>
  )
}
