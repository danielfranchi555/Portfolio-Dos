import { Box, Center, Heading, Image, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import about from '../../img/about-me-dos.png'
import Fade from 'react-reveal/Fade';

import React from 'react'


const SectionTres = () => {
  return (
      <Stack id='sobreMi' h={{base:'auto',md:'300px'}} bg='#455d7a' w='100%'>
       <Fade left>  
    <Center>
    <Heading p={1} color='white' >Sobre mi</Heading>
    </Center>
   <Stack  p={6} justify='center' align='center'  direction={['column', 'row']} h= {{base:'auto',md:'220px'}} w='auto'>
   <Image
     boxSize={{base:'150px',md:'200px'}}
    objectFit='contain'
    src={about}
    alt='Dan Abramov'
    p={6}
  />
  
     <Text fontSize='20px' color='white' w= {{base:'auto',md:'600px'}} h='auto' align='center' p={3}>
  Mi nombre es <span style={{color:'#f95959'}}>Daniel Franchi</span> tengo 22 años
actualmente vivo en Córdoba, Argentina.
Me encuentro en la búsqueda de mi primer oportunidad laboral.
Estoy con muchas ganas de ser el mejor en lo que hago y encontrar ese lugar donde pueda contribuir
con mi experiencia y conocimiento!
  </Text>
 
   </Stack>
    </Fade> 
  </Stack>
  

   
    
  )
}

export default SectionTres