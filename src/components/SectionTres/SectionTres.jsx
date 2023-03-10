import { Box, Center, Image, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'

const SectionTres = () => {
  return (
    <Box style={{display:'flex',alignItems:'center'}}>
    {/* <Box>
    <h1 style={{fontSize:'30px'}}>sobre mi </h1>
    </Box> */}
           <Wrap  spacing='30px' justify='center' style={{width:'900px',height:'300px',border:'solid'}} >
    <WrapItem style={{border:'solid 2px red '}}>
        <Center>
            <Image src='https://bit.ly/dan-abramov' style={{width:'200px'}} alt='Dan Abramov' />
        </Center>
   </WrapItem>
         <WrapItem style={{border:'solid 2px red', width:'300px'}}>
            <Center>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ex omnis praesentium blanditiis quos natus harum aut eaque et rem. Consectetur vel voluptatibus odit facilis quidem laborum consequatur! Sapiente, neque!</p>
            </Center>
         </WrapItem>
  </Wrap>
    
 
    </Box>
    
  )
}

export default SectionTres