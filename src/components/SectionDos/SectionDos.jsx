import {Box,Button,ButtonGroup,Card,CardBody,  CardFooter, Center, Divider, Heading, Image, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
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
    <Box bg='#d3d6db' id='proyectos' style={{display:'flex',flexDirection:'column',marginTop:'10px',marginBottom:'20px' ,padding:'30px'}}>
            <Box style={{margin:'auto',marginTop:'60px'}}>
        <h1 style={{fontSize:'40px',fontWeight:'600',color:'#455d7a'}}>Proyectos</h1>
        </Box> 
        <Wrap justify='center' >
          <Zoom>
                <Reveal effect="fadeInUp">
                <a href="https://crud-firebase-azure.vercel.app/">
 <WrapItem  style={{padding:'30px'}}>
<Card  className='items' maxW='300px' h='390px'>
  <CardBody className='icon-wrapper'>
    <Image
      src={crud}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      className='image'
      h='130px'
      w='100%'
    />
    <Stack mt='5' spacing='0'>
      <Heading size='md' className='project-name'>Crud-Firebase</Heading>
      <p style={{fontSize:'14px'}}>
      Este proyecto es una aplicación web que
utiliza React y Firebase Firestore como
Base de Datos para Insertar, Actualizar y
Eliminar productos
      </p>
    </Stack>
  </CardBody>
  <CardFooter h='auto'>
     <a href="https://crud-firebase-azure.vercel.app/"> <Button bg='#455d7a'color='white' w='90px' size='md'>Demo</Button></a> 
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
                             <Card  className='items' maxW='300px' h='390px'>
                             <CardBody className='icon-wrapper'>
    <Image
      src={chat}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      className='image'
      h='130px'
      w='100%'
    />
    <Stack mt='10' spacing='0'>
      <Heading size='md' className='project-name'>ChatApp-Firebase</Heading>
      <p style={{fontSize:'14px'}}>
      App creada con React+Vite utilizando a
Firebase como base de datos y Authentication
      </p>
    </Stack>
  </CardBody>
  <CardFooter>
  <a href="https://chat-app-liart-phi.vercel.app/"> <Button bg='#455d7a'color='white' w='90px' size='md'>Demo</Button></a> 
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
                                     <Card className='items' maxW='300px' h='390px'>
                                     <CardBody className='icon-wrapper'>
    <Image
      src={ecommerce}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      className='image'
      h='130px'
      w='100%'
    />
    <Stack mt='5' spacing='0'>
      <Heading size='md' className='project-name'>Ecommerce</Heading>
      <p style={{fontSize:'14px'}}>
      App Ecommerce consumiendo un Api de
productos donde el cliente puede realizar una
compra satisfactoriamente utilizando UseContext
      </p>
    </Stack>
  </CardBody>
  <CardFooter>
  <a href="https://danielfranchi555.github.io/Ecommerce-React/"> <Button bg='#455d7a'color='white' w='90px' size='md'>Demo</Button></a> 
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
                                   <Card className='items' maxW='300px'h='390px'>
                                   <CardBody className='icon-wrapper'>
    <Image
      src={movieApp}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      className='image'
      h='130px'
      w='100%'

    />
    <Stack mt='5' spacing='0'>
      <Heading  size='md' className='project-name'>AppMovies-React
</Heading>
      <p style={{fontSize:'14px'}}>
      App de peliculas con Authentication de Auth0
para el inicio de Sesion y consumiendo la Api de TMDB
para mostrar el trailer y detalle de cada pelicula

      </p>
    </Stack>
  </CardBody>
  <CardFooter>
  <a href="https://app-movies-co61.vercel.app/"> <Button bg='#455d7a'color='white' w='90px' size='md'>Demo</Button></a> 
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
                 <Card className='items' maxW='300px' h='390px'>
                 <CardBody className='icon-wrapper'>
    <Image
      src={appClima}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      className='image'
      h='130px'
      w='100%'
    />
    <Stack mt='5' spacing='0'>
      <Heading size='md' className='project-name'>AppWheater-React
</Heading>
      <p style={{fontSize:'14px'}}>
      Aplicacion consumiendo la Api de OpenWheater para
mostar los datos de la ciudad ingresada por el usuario
      </p>
    </Stack>
  </CardBody>
  <CardFooter>
  <a href="https://danielfranchi555.github.io/App-Weather/"> <Button bg='#455d7a'color='white' w='90px' size='md'>Demo</Button></a> 
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