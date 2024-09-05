import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { Home } from './Home';
import NavBar from './components/NavBar';
import theme from "./theme";
import Register from './pages/Register';
import ConfirmationPage from './pages/Confirmation';


function App() {

  return (
    <ChakraProvider theme={theme}>
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />

      </Routes>
    </Router>
  </ChakraProvider>
  )
}

export default App
