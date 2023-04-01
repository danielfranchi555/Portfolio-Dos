import {  Avatar, Box, Button, Center, Container, Flex, Image, Stack, Tag, TagLabel, Text, } from "@chakra-ui/react";
import fotoCv from "../../img/foto-cv.png"
import React from "react";
import linkedin from '../../img/linkedin.png'
import github from '../../img/github.png'
import react from '../../img/logo-react.png'

import './SectionOne.scss'
import  Zoom  from "react-reveal/Zoom";

const SectionOne = () => {
  return (


    <>
    <Stack bg='#222831' py={{base:'20px',md:'0px'}} justify='center' align='center' direction={['column', 'row']}  w={{base:'auto',md:'auto'}} h={{base:'auto',md:'500px'}} >
    <Box w='300px'  boxShadow='2xl' p='6' rounded='md'  h='300px' >
        <Image 
         borderRadius='10px'
         boxSize='100%'
         objectFit='cover'
         src={fotoCv}
         bg='#222831'
         />
  </Box>
  <Stack align='center' justify='center'   w={{base:'100%',md:'450px'}} h='300px' >
        <Text fontSize={{base:'25px',md:'30px'}}  color='white'> Bienvenido  a  mi portfolio</Text>
        <Tag size='lg' color='white' colorScheme="teal" variant='outline' borderRadius='full'>
  <Avatar
    src={react}
    size='xs'
    ml={-1}
    mr={2}
  />
  <TagLabel fontWeight='900' >Frontend/React Js</TagLabel>
</Tag>
        <Text  color='white' justify='center'  textAlign='center' w='auto' h='auto' fontSize='18px' >
      Mi nombre es <span style={{color:'teal',fontWeight:'900'}}>Daniel Franchi</span> tengo 22 años
      actualmente vivo en Córdoba, Argentina.
      Me encuentro en la búsqueda de mi primer oportunidad laboral.
      Estoy con muchas ganas de ser el mejor en lo que hago y encontrar ese lugar donde pueda contribuir
      con mi experiencia y conocimiento!
      </Text>

  </Stack>


  {/*     <Stack m={{base:'auto',md:'auto'}} justify='center'  align='center'  direction={['column', 'row']}>
         <Box   mt={{base:'20px',md:'0px'}}>
     
      </Box>
      <Stack   justify='center' align='center' gap='10px'>
      <Text  fontSize='25px' color='white'>Bienvenidos a mi portfolio</Text>
      <Text  fontSize='15px' color='#29a19c' fontWeight='900'>Frontend/ReactJs</Text>
      <Text color='white' textAlign='center' fontSize='20px' >
      Mi nombre es <span style={{color:'#29a19c' ,fontWeight:'800'}}>Daniel Franchi</span> tengo 22 años
      actualmente vivo en Córdoba, Argentina.
      Me encuentro en la búsqueda de mi primer oportunidad laboral.
      Estoy con muchas ganas de ser el mejor en lo que hago y encontrar ese lugar donde pueda contribuir
      con mi experiencia y conocimiento!
      </Text>
      </Stack>
      </Stack> */}
         
      </Stack>
    
     
     
    
    </>
  /*    <div>
       <div className="container " style={{maxWidth:'100%',height:'500px', display:'flex',justifyContent:'center',alignItems:'center', backgroundColor:'#393e46'}}>
     <div className="row" >
      <div className="col-md " style={{display:'flex',justifyContent:'center'}}>
        <Zoom>
            <div>
        <Image
  borderRadius='20px'
  objectFit='cover'
  boxSize='330px'
  maxW={{base:'200px',md:'300px'}}
  maxH={{base:'200px',md:'500px'}}
  src={fotoCv}
  alt='Dan Abramov'
  bg='#222831'
 />        </div>
        </Zoom>
      </div>
      <Zoom>
        <div className="col-md"style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}} >

        <div style={{width:'400px',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',margin:'10px'}}>
          <div>
        <h1 style={{fontSize:'30px',margin:'5px',color:'white'}}>Bienvenidos a mi Portfolio</h1>
        </div>
        <div>
        <p style={{color:'#29a19c',fontWeight:'800',fontSize:'20px'}}>Frontend/React js</p>
        <p style={{fontWeight:'800',fontSize:'20px'}}>

        Mi nombre es <span style={{color:'#29a19c' ,fontWeight:'800'}}>Daniel Franchi</span> tengo 22 años
actualmente vivo en Córdoba, Argentina.
Me encuentro en la búsqueda de mi primer oportunidad laboral.
Estoy con muchas ganas de ser el mejor en lo que hago y encontrar ese lugar donde pueda contribuir
con mi experiencia y conocimiento!
        </p>
        </div>
          
        </div>

        <div style={{display:'flex',width:'auto',justifyContent:'center',gap:'20px',marginTop:'10px'}}>
        <div>
         <a href="#formulario"><Button>Contactame</Button></a> 
        </div>
        <div>
          <a href="https://www.linkedin.com/in/daniel-franchi-409359238/" target="_blank">
           <img src={linkedin} style={{width:'40px'}} alt="" />
          </a>
         
        </div>
        <div>
          <a href="https://github.com/danielfranchi555"target="_blank">
                      <img src={github} alt="" style={{width:'40px'}} />
          </a>
        </div>
        </div>
      </div>
      </Zoom>
      
     </div>
    </div>
   
     </div> */
    
    
  );
};

export default SectionOne;
