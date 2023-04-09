import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import fotoCv from "../../img/foto-cv.png";
import React from "react";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github-3.png";
import react from "../../img/logo-react.png";
import Fade from "react-reveal/Fade";
import './sectionOne.scss'

const SectionOne = () => {
  return (
    <Stack
      m='70px'
      bg="#222831"
      py={{ base: "20px", md: "0px" }}
      justify="center"
      align="center"
      direction={["column","column", "row"]}
      w={{ base: "auto", md: "auto" }}
      h={{ base: "auto", md: "400px" }}
    >
      <Fade bottom>
           <Box  w={{base:"auto",md:'300px'}}  boxShadow="2xl" p="6" rounded="md" h="300px">
        <Image
          borderRadius="10px"
          boxSize={{base:'210px',md:'100%'}}
          objectFit="cover"
          src={fotoCv}
          bg="#222831"
        />
      </Box>
      </Fade>
   <Fade bottom>
      <Stack
   
        align="center"
        justify="center"
        w={{ base: "100%", md: "450px" }}
        h={{ base: "320px", md: "300px" }}
      >
        <Stack justify='center' align='center'  direction="column" >
            <Text textAlign='center'  fontSize={{ base: "25px", md: "30px" }} color="white">
          Bienvenido/a a mi portfolio
        </Text>
        <Stack  direction='row'>
           <Stack   border='solid 2px teal' borderRadius='10px' w='170px' justify='center' h='40px'>
            <Center  >
            <Avatar   size='xs' src={react} />
             <Text ml={1} color='white'> Frontend/React js</Text>
            </Center>
           </Stack>
              <Stack justify='center' spacing={3} align='center' direction='row'  borderRadius='20px' w='75px' h='40px'>
            <Box className="logo"  bg='white'>
                <a href="https://www.linkedin.com/in/daniel-franchi-409359238/" target="_blank">
                          <Avatar  size='sm'  src={linkedin} />
            </a>
            </Box>
          
        
           <Box className="logo" bg='white'>
            <a href="https://github.com/danielfranchi555" target="_blank">
            <Avatar  size='sm' src={github}/>
            </a>
           </Box>

           
           </Stack>
        </Stack>
        <Box w='auto'  >
            <Text
            textAlign='center'
          color="white"
          fontSize="16px"
          p={{base:'0px',md:'10px'}}
        >
          Mi nombre es <span style={{ color: "teal", fontWeight: "900" }}>Daniel Franchi</span> tengo 22 años actualmente vivo en Córdoba, Argentina. Me encuentro en     la búsqueda de mi primer oportunidad laboral. Estoy con muchas ganas de ser el mejor en lo que hago y encontrar ese lugar donde pueda contribuir con mi experiencia y conocimiento!
        </Text>
        </Box>
      
        </Stack>
        
        
         
       
      
      

      </Stack>
   </Fade>
    
    </Stack>
  );
};

export default SectionOne;
