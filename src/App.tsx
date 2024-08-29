import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css'
import { Home } from './Home';
import NavBar from './components/NavBar';

function App() {

  return (
    <ChakraProvider>
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
         {/* <Route path="/register" element={<RegistrationForm />} /> */}
       

   
      </Routes>
    </Router>
  </ChakraProvider>
  )
}

export default App
