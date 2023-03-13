import { Box, Center, Image, Wrap, WrapItem } from '@chakra-ui/react'
import foto from '../../img/about-me.jpg'
import React from 'react'

const SectionTres = () => {
  return (
    <Box bg='#ffffff' id='sobreMi' m='100px' style={{alignItems:'center'}}>
       <Box mb='50px'>
        <Center>
        <h1 style={{fontSize:'30px',fontWeight:'600',color:'#455d7a'}}>Sobre Mi</h1>
        </Center>
        </Box>
        <Center>
                      <Wrap   spacing='30px' justify='center' style={{width:'900px'}} >
    <WrapItem >
        <Center m='10px' >
            <Image src={foto} style={{width:'400px'}} alt='Dan Abramov' />
        </Center>
   </WrapItem>
         <WrapItem style={{ width:'300px'}}>
            <Center m='0px'>
        <p style={{color:'black',fontSize:'20px'}}>Mi nombre es Daniel Franchi tengo 22 años
actualmente vivo en Córdoba, Argentina.
Me encuentro en la búsqueda de mi primer oportunidad laboral.
Estoy con muchas ganas de ser el mejor en lo que hago y encontrar ese lugar donde pueda contribuir
con mi experiencia y conocimiento!</p>
            </Center>
         </WrapItem>
  </Wrap>
    
        </Center>
 
 
    </Box>
    
  )
}

export default SectionTres