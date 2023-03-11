import React from 'react'
import js from '../../img/js.png'
import react from '../../img/react.png'
import firebase from '../../img/firebase.png'
import bootstrap from '../../img/bootstrap.png'
import sass from '../../img/sass.png'
import css from '../../img/css.png'
import html from '../../img/html.png'
import chakra from '../../img/chakra.png'
import Zoom from 'react-reveal/Zoom';
import Reveal from 'react-reveal/Reveal';
import Slide from 'react-reveal/Slide';
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'

const SectionFour = () => {
  return (
    <Box bg='#d3d6db' id='skills' style={{marginTop:'150px',marginBottom:'100px',height:'400px'}}>
       <div style={{display:'flex',justifyContent:'center'}}>
          <h1   style={{fontSize:'40px',color:'#455d7a',fontWeight:'600',padding:'20px'}}>Skills</h1>  
        </div>

         <Zoom>
  <Slide left >
      <Box gap='13px'm='20px' mt='10px' style={{display:'flex',justifyContent:'center'}}>
      <Card  maxW='100px'>
  <CardBody>
    <Image
      src={js}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
  </CardBody>
  <Divider />
</Card>
<Card  maxW='100px'>
  <CardBody>
    <Image
      src={react}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
  </CardBody>
  <Divider />
</Card><Card maxW='100px'>
  <CardBody>
    <Image
      src={firebase}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
  </CardBody>
  <Divider />
</Card><Card maxW='100px'>
  <CardBody>
    <Image
      src={chakra}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
  </CardBody>
  <Divider />
</Card>
</Box>
  </Slide>
  </Zoom>




  <Zoom >
  <Slide left >
      <Box gap='13px' m='20px' mt='50px'  style={{display:'flex',justifyContent:'center'}}>
      <Card maxW='100px' >
  <CardBody>
    <Image
      src={css}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
  </CardBody>
  <Divider />
</Card>
<Card maxW='100px'>
  <CardBody>
    <Image
      src={html}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
  </CardBody>
  <Divider />
</Card><Card maxW='100px'>
  <CardBody>
    <Image
      src={bootstrap}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
  </CardBody>
  <Divider />
</Card><Card maxW='100px'>
  <CardBody>
    <Image
      src={sass}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
  </CardBody>
  <Divider />
</Card>
      </Box>
  </Slide>
  </Zoom>

    
    
    
    </Box>
 
   
  )
}

export default SectionFour