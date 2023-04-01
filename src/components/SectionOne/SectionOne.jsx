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
import github from "../../img/github-2.png";
import react from "../../img/logo-react.png";
import Fade from "react-reveal/Fade";

const SectionOne = () => {
  return (
    <Stack
      bg="#222831"
      py={{ base: "20px", md: "0px" }}
      justify="center"
      align="center"
      direction={["column","column", "row"]}
      w={{ base: "auto", md: "auto" }}
      h={{ base: "auto", md: "500px" }}
    >
      <Fade>
           <Box w={{base:"auto",md:'300px'}}  boxShadow="2xl" p="6" rounded="md" h="300px">
        <Image
          borderRadius="10px"
          boxSize="100%"
          objectFit="cover"
          src={fotoCv}
          bg="#222831"
        />
      </Box>
      </Fade>
   <Fade>
      <Stack
      spacing='10px'
        align="center"
        justify="center"
        w={{ base: "100%", md: "450px" }}
        h={{ base: "320px", md: "300px" }}
      >
        <Text  fontSize={{ base: "25px", md: "35px" }} color="white">
          {" "}
          Bienvenido/a a mi portfolio
        </Text>
        <Stack bg='blue' width='auto' direction="row" >
           
           <Box bg='blue' w='200px' h='30px'>
            <Center>
             <Text color='white'> Frontend/React js</Text>
            </Center>
           </Box>
    {/*       <Tag bg="none"size={{base:'xs',md:'lg'}}>
            <a href="https://github.com/danielfranchi555" target="_blank">
              <Avatar src={github} w="auto" h="34px" />
            </a>
          </Tag>

          <Tag bg="none" size={{base:'xs',md:'lg'}}>
            <a
              href="https://www.linkedin.com/in/daniel-franchi-409359238/"
              target="_blank"
            >
              <Avatar w="auto" h="35px" src={linkedin} />
            </a>
          </Tag> */}
        </Stack>

        <Text
          color="white"
          justify="center"
          textAlign="center"
          w="auto"
          h="auto"
          fontSize="18px"
        >
          Mi nombre es{" "}
          <span style={{ color: "teal", fontWeight: "900" }}>
            Daniel Franchi
          </span>{" "}
          tengo 22 años actualmente vivo en Córdoba, Argentina. Me encuentro en
          la búsqueda de mi primer oportunidad laboral. Estoy con muchas ganas
          de ser el mejor en lo que hago y encontrar ese lugar donde pueda
          contribuir con mi experiencia y conocimiento!
        </Text>
      </Stack>
   </Fade>
    
    </Stack>
  );
};

export default SectionOne;
