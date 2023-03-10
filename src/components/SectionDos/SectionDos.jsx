import {Box,ButtonGroup,Card,CardBody,  CardFooter, Center, Divider, Heading, Image, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import ecommerce from '../../img/ecommerce.png'
import appClima from '../../img/app-clima.png'
import movieApp from '../../img/movie-app.png'
import crud from '../../img/crud.png'
import chat from '../../img/chat.png'
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Reveal from 'react-reveal/Reveal';
import './SectionDos.scss'

const SectionDos = () => {
  return (
    <Box id='proyectos' style={{display:'flex',flexDirection:'column'}}>
            <Box style={{margin:'auto',marginTop:'200px'}}>
        <h1 style={{fontSize:'40px',fontWeight:'600',color:'black'}}>Proyectos</h1>
        </Box> 
        <Wrap justify='center' >
          <Zoom>
                <Reveal effect="fadeInUp">
                <a href="https://crud-firebase-azure.vercel.app/">
<WrapItem  style={{padding:'30px'}}>
<Card  className='items' maxW='300px' H='100px'>
  <CardBody className='icon-wrapper'>
    <Image
      src={crud}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      className='image'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' className='project-name'>Crud-Firebase</Heading>
      <p>
        This sofa is perfect for modern tropical spaces, baroque inspired
        
      </p>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      
      
    </ButtonGroup>
  </CardFooter>
</Card>

     </WrapItem>

                </a>

                     
        
     
           </Reveal>
          </Zoom>
    
          




     
          <Zoom>
                <Reveal effect="fadeInUp">
                  <a href="https://chat-app-liart-phi.vercel.app/">
                             <WrapItem  style={{padding:'30px'}}>
                             <Card  className='items' maxW='300px' H='100px'>
  <CardBody className='icon-wrapper'>
    <Image
      src={chat}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      className='image'
    />
    <Stack mt='6' spacing='3'>
      <Heading className='project-name' size='md'>ChatApp-Firebase</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Center>
      
      </Center>
    </ButtonGroup>
  </CardFooter>
</Card>
     </WrapItem>
                  </a>
        
        </Reveal>
          </Zoom> 
          
          
          <Zoom>
                <Reveal effect="fadeInUp">
                  <a href="https://danielfranchi555.github.io/Ecommerce-React/">

                                     <WrapItem  style={{padding:'30px'}}>
                                     <Card className='items' maxW='300px' H='100px'>
  <CardBody className='icon-wrapper'>
    <Image
      src={ecommerce}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      className='image'

    />
    <Stack mt='6' spacing='3'>
      <Heading className='project-name' size='md'>Ecommerce-React</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
      
      </Text>

    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      
      
    </ButtonGroup>
  </CardFooter>
</Card>

     </WrapItem>
                  </a>
 
           </Reveal>
          </Zoom>



    <Zoom>
      
                <Reveal effect="fadeInUp">
                  <a href="https://app-movies-co61.vercel.app/">
                                   <WrapItem  style={{padding:'30px'}}>
                                   <Card className='items' maxW='300px' H='100px'>
  <CardBody className='icon-wrapper'>
    <Image
      src={movieApp}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      className='image'

    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>App-movies</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      
      
    </ButtonGroup>
  </CardFooter>
</Card>

     </WrapItem>
                  </a>
   
           </Reveal>
          </Zoom>

    <Zoom>
                <Reveal effect="fadeInUp">
                  <a href="https://danielfranchi555.github.io/App-Weather/">

                             <WrapItem  style={{padding:'30px'}}>
                 <Card className='items' maxW='300px' H='100px'>
  <CardBody className='icon-wrapper'>
    <Image
      src={appClima}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      className='image'

    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>App-Weather</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      
      
    </ButtonGroup>
  </CardFooter>
</Card>

     </WrapItem> 
                  </a>
        
           </Reveal>
          </Zoom>
        </Wrap>  
    </Box>
  )
}

export default SectionDos