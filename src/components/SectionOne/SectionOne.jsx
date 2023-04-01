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
import Zoom from "react-reveal/Zoom";

const SectionOne = () => {
  return (
    <Stack
      bg="#222831"
      py={{ base: "20px", md: "0px" }}
      justify="center"
      align="center"
      direction={["column", "row"]}
      w={{ base: "auto", md: "auto" }}
      h={{ base: "auto", md: "500px" }}
    >
      <Box w="300px" boxShadow="2xl" p="6" rounded="md" h="300px">
        <Image
          borderRadius="10px"
          boxSize="100%"
          objectFit="cover"
          src={fotoCv}
          bg="#222831"
        />
      </Box>
      <Stack
      spacing='10px'
        align="center"
        justify="center"
        w={{ base: "100%", md: "450px" }}
        h={{ base: "320px", md: "300px" }}
      >
        <Text align='center' fontSize={{ base: "25px", md: "35px" }} color="white">
          {" "}
          Bienvenido/a a mi portfolio
        </Text>
        <Stack gap='0px'  direction="row" spacing={0}>
          <Tag
            size="lg"
            color="white"
            colorScheme="teal"
            variant="outline"
            borderRadius="full"
          >
            <Avatar src={react} w="auto" h="20px" ml={-1} mr={2} />
            <TagLabel fontWeight="900">Frontend/React Js</TagLabel>
          </Tag>
          <Tag bg="none" size="lg">
            <a href="https://github.com/danielfranchi555" target="_blank">
              <Avatar src={github} w="auto" h="34px" />
            </a>
          </Tag>

          <Tag bg="none" size="lg">
            <a
              href="https://www.linkedin.com/in/daniel-franchi-409359238/"
              target="_blank"
            >
              <Avatar w="auto" h="35px" src={linkedin} />
            </a>
          </Tag>
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
    </Stack>
  );
};

export default SectionOne;
