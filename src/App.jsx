import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionOne from './components/SectionOne/SectionOne';
import SectionDos from './components/SectionDos/SectionDos';
import Footer from './components/Footer/Footer';
import 'animate.css';
import Flecha from './components/Flecha/Flecha';
import SectionTres from './components/SectionTres/SectionTres';
import SectionFour from './components/SectionFour/SectionFour';
import SectionFIve from './components/SectionFive/SectionFive';

function App() {

  return (
    <ChakraProvider>
       <NavBar/>
      <div className="App" >
          <SectionOne/>    
        <SectionDos/>
        <SectionFour/>
        <SectionFIve/>
      </div>
      <Footer/>
    </ChakraProvider>

  )
}

export default App
