import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css'
import { Home } from './Home';
import NavBar from './components/NavBar';
import theme from "./theme";
import EventsPage from './pages/Events';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import VisionAndMission from './pages/VisionAndMission';

function App() {

  return (
    <ChakraProvider theme={theme}>
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/register" element={<Home />} />
        <Route path="/#events" element={<EventsPage/>} />
        <Route path="/#about-us" element={<AboutUs/>} />
        <Route path="/#contact-us" element={<ContactUs/>} />
        <Route path="/visionAndMission" element={<VisionAndMission />} /> */}

         {/* <Route path="/register" element={<RegistrationForm />} /> */}
       
   
      </Routes>
    </Router>
  </ChakraProvider>
  )
}

export default App
