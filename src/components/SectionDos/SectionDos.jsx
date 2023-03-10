import { Avatar, Box,Card,CardBody,  CardHeader, Flex, Heading, Image, Text, Wrap, WrapItem } from '@chakra-ui/react'
import ecommerce from '../../img/ecommerce.png'
import appClima from '../../img/app-clima.png'
import movieApp from '../../img/movie-app.png'
import crud from '../../img/crud.png'
import chat from '../../img/chat.png'
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Reveal from 'react-reveal/Reveal';

const SectionDos = () => {
  return (
    <Box
    style={{display:'flex',flexDirection:'column'}}
    >
            <Box style={{margin:'auto',marginTop:'200px'}}>
        <h1 style={{fontSize:'40px',fontWeight:'600',color:'white'}}>Proyectos</h1>
        </Box>  
        <Wrap justify='center' >
          <Zoom>
                <Reveal effect="fadeInUp">
                 <WrapItem  style={{padding:'30px'}}>
     <Card style={{backgroundColor:'black'}}    maxW={{ base: '200px', sm: '300px' }}>
  <CardHeader>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Box>
          <Heading style={{color:'white'}} size='sm'>Segun Adebayo</Heading>
          <Text style={{color:'white'}}>Creator, Chakra UI</Text>
        </Box>
      </Flex>
  </CardHeader>

  <Image
    objectFit='cover'
    src={crud}
    alt='Chakra UI'
  />

</Card>

     </WrapItem> 
           </Reveal>
          </Zoom>
    
          




     
          <Zoom>
                <Reveal effect="fadeInUp">
                 <WrapItem  style={{padding:'30px'}}>
     <Card style={{backgroundColor:'black'}}    maxW={{ base: '200px', sm: '300px' }}>
     <CardHeader>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Box>
          <Heading style={{color:'white'}} size='sm'>Segun Adebayo</Heading>
          <Text style={{color:'white'}}>Creator, Chakra UI</Text>
        </Box>
      </Flex>
  </CardHeader>
  <Image
    objectFit='cover'
    src={chat}
    alt='Chakra UI'
  />
</Card>
     </WrapItem>
        </Reveal>
          </Zoom> 
          
          
          <Zoom>
                <Reveal effect="fadeInUp">
                 <WrapItem  style={{padding:'30px'}}>
     <Card style={{backgroundColor:'black'}}    maxW={{ base: '200px', sm: '300px' }}>
     <CardHeader>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Box>
          <Heading style={{color:'white'}} size='sm'>Ecommerce</Heading>
          <Text style={{color:'white'}}>Creator, Chakra UI</Text>
        </Box>
      </Flex>
  </CardHeader>
  <Image
    objectFit='cover'
    src={ecommerce}
    alt='Chakra UI'
  />

</Card>

     </WrapItem> 
           </Reveal>
          </Zoom>



    <Zoom>
      
                <Reveal effect="fadeInUp">
                 <WrapItem  style={{padding:'30px'}}>
     <Card style={{backgroundColor:'black'}}    maxW={{ base: '200px', sm: '300px' }}>
     <CardHeader>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Box>
          <Heading style={{color:'white'}} size='sm'>Segun Adebayo</Heading>
          <Text style={{color:'white'}}>Creator, Chakra UI</Text>
        </Box>
      </Flex>
  </CardHeader>
  <Image
    objectFit='cover'
    src={movieApp}
    alt='Chakra UI'
  />

</Card>

     </WrapItem> 
           </Reveal>
          </Zoom>

    <Zoom>
                <Reveal effect="fadeInUp">
                 <WrapItem  style={{padding:'30px'}}>
     <Card style={{backgroundColor:'black'}}    maxW={{ base: '200px', sm: '300px' }}>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
        <Box>
          <Heading size='sm' style={{color:'white'}} >Segun Adebayo</Heading>
          <Text style={{color:'white'}}>Creator, Chakra UI</Text>
        </Box>
      </Flex>
    </Flex>
  </CardHeader>
  <CardBody>
  
  </CardBody>
  <Image
    objectFit='cover'
    src={appClima}
    alt='Chakra UI'
  />

</Card>

     </WrapItem> 
           </Reveal>
          </Zoom>
        </Wrap>  
    </Box>
  )
}

export default SectionDos