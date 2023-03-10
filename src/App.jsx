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

function App() {

  return (
    <ChakraProvider>
       <NavBar/>
      <div className="App" style={{maxWidth:'780px',margin:'0 auto'}}>
        <SectionOne/>
        <Flecha/>
        <SectionDos/>
        <SectionTres/>
        <SectionFour/>
      </div>
      <Footer/>
    </ChakraProvider>

  )
}

export default App
