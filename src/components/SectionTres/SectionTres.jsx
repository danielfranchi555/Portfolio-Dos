import { Box, Center, Image, Text, Wrap, WrapItem } from '@chakra-ui/react'
import about from '../../img/about-me-dos.png'
import Fade from 'react-reveal/Fade';

import React from 'react'


const SectionTres = () => {
  return (
  <>
    
  <div className='mb-5' id='sobreMi'  style={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center',height:'500px',gap:'20px',backgroundColor:'#455d7a',flexDirection:'column'}}>
    <div className='row' style={{color:'white',fontSize:'40px',marginTop:'20px'}}> <h1>Sobre Mi</h1></div>
   <div className='row'  >
   <div className='col-md' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <div  >
      <div>
              <Image
    objectFit='cover'
    src={about}
    maxW={{base:'100px', md:'200px'}}
    alt='Dan Abramov'
  />
      </div>
    
      
  
    </div>
   </div>
   <div className='col-md' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <Fade bottom>
      <Text style={{width:'300px',margin:'10px'}} color='white' fontSize={{base:'18px', md:'20px'}}>
    Mi nombre es <span style={{color:'#f95959'}}>Daniel Franchi</span> tengo 22 años
actualmente vivo en Córdoba, Argentina.
Me encuentro en la búsqueda de mi primer oportunidad laboral.
Estoy con muchas ganas de ser el mejor en lo que hago y encontrar ese lugar donde pueda contribuir
con mi experiencia y conocimiento!
    </Text>
    </Fade>
    

   </div>
   </div>
   
   </div>
  </>
   
    
  )
}

export default SectionTres