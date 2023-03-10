import { Box, Center, Image, Wrap, WrapItem } from '@chakra-ui/react'
import foto from '../../img/about-me.png'
import React from 'react'

const SectionTres = () => {
  return (
    <Box id='sobreMi' style={{alignItems:'center',marginTop:'100px'}}>
       <Box mb='50px'>
        <Center>
        <h1 style={{fontSize:'30px',color:'black'}}>Sobre Mi</h1>
        </Center>
        </Box>
        <Center>
                      <Wrap   spacing='30px' justify='center' style={{width:'900px'}} >
    <WrapItem >
        <Center m='10px' >
            <Image src={foto} style={{width:'200px'}} alt='Dan Abramov' />
        </Center>
   </WrapItem>
         <WrapItem style={{ width:'300px'}}>
            <Center m='0px'>
        <p style={{color:'black',fontSize:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ex omnis praesentium blanditiis quos natus harum aut eaque et rem. Consectetur vel voluptatibus odit facilis quidem laborum consequatur! Sapiente, neque!</p>
            </Center>
         </WrapItem>
  </Wrap>
    
        </Center>
 
 
    </Box>
    
  )
}

export default SectionTres