import {Box,Button,ButtonGroup,Card,CardBody,  CardFooter, Heading, Image, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import ecommerce from '../../img/ecommerce.png'
import appClima from '../../img/app-clima.png'
import movieApp from '../../img/movie-app.png'
import crud from '../../img/crud.png'
import chat from '../../img/chat.png'
import Reveal from 'react-reveal/Reveal';
import './SectionDos.scss'

const SectionDos = () => {
  return (
    <Box className='section-dos-container'  id='proyectos' style={{display:'flex',flexDirection:'column',marginTop:'10px',marginBottom:'20px' ,padding:'30px'}}>
            <Box style={{margin:'auto',marginTop:'60px'}}>
        <h1 style={{fontSize:'40px',fontWeight:'600',color:'#455d7a'}}>Proyectos</h1>
        </Box> 
        <Wrap justify='center' >
          <Zoom>
                <Reveal effect="fadeInUp">
                <a href="https://crud-firebase-azure.vercel.app/">
 <WrapItem  style={{padding:'30px'}}>
 <Card className='items' maxW='xs'>
  <CardBody className='icon-wrapper'>
    <Image
      src={crud}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      className='image'
      h='130px'
      w='100%'
    />
    <Stack mt='6' spacing='3'>
      <Heading  size='md'>Crud-Firebase</Heading>
      <Text h='100px'>
      Este proyecto es una aplicación web que
utiliza React y Firebase Firestore como
Base de Datos para Insertar, Actualizar y
Eliminar productos
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
    <ButtonGroup spacing='1'>
     <Button bg='#455d7a'color='white' w='90px' size='md'>Demo</Button>
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
                             <Card className='items' maxW='xs'>
  <CardBody className='icon-wrapper'>
    <Image
      src={chat}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      className='image'
      h='130px'
      w='100%'
    />
    <Stack mt='6' spacing='3'>
      <Heading  size='md'>ChatApp - Firebase</Heading>
      <Text h='100px'>
      App creada con React+Vite utilizando a
Firebase como base de datos y Authentication

      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
    <ButtonGroup spacing='1'>
     <Button bg='#455d7a'color='white' w='90px' size='md'>Demo</Button>
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
                                     <Card className='items' maxW='xs'>
  <CardBody className='icon-wrapper'>
    <Image
      src={ecommerce}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      className='image'
      h='130px'
      w='100%'
    />
    <Stack mt='6' spacing='3'>
      <Heading  size='md'>Ecommerce -React
</Heading>
      <Text h='100px'>
      App Ecommerce consumiendo un Api de
productos donde el cliente puede realizar una
compra satisfactoriamente

      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
    <ButtonGroup spacing='1'>
     <Button bg='#455d7a'color='white' w='90px' size='md'>Demo</Button>
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
                                   <Card className='items' maxW='xs'>
  <CardBody className='icon-wrapper'>
    <Image
      src={movieApp}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      className='image'
      h='130px'
      w='100%'
    />
    <Stack mt='6' spacing='4'>
      <Heading  size='md'>AppMovies-React</Heading>
      <Text h='100px'>
      App de peliculas con Authentication de Auth0
para el inicio de Sesion y consumiendo la Api de TMDB
para mostrar el trailer y detalle de cada pelicula
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
    <ButtonGroup spacing='2'>
     <Button bg='#455d7a'color='white' w='90px' size='md'>Demo</Button>
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
                             <Card className='items' maxW='xs'>
  <CardBody className='icon-wrapper'>
    <Image
      src={appClima}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      className='image'
      h='130px'
      w='100%'
    />
    <Stack mt='6' spacing='3'>
      <Heading  size='md'>AppWheater-React</Heading>
      <Text h='100px'>
      Aplicacion consumiendo la Api de OpenWheater para
mostar los datos de la ciudad ingresada por el usuario
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
    <ButtonGroup spacing='1'>
     <Button bg='#455d7a'color='white' w='90px' size='md'>Demo</Button>
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