import { Box, Center, Wrap, WrapItem, Image, Button } from "@chakra-ui/react";
 import fotoCv from "../../img/foto-cv.png"
 import React from "react";
import { color } from "framer-motion";

const SectionOne = () => {
  return (
    <Wrap justify="center" style={{ marginTop: "80px" }} spacing="40px">
      <WrapItem>
         <Image
          src={fotoCv}
          fallbackSrc="https://via.placeholder.com/150"
          h="300px"
        /> 
      </WrapItem>
      <WrapItem
        maxW={{ base: "290px", sm: "500px" }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
        <h1 style={{fontSize:'40px',color:'white'}} >Bienvenido/a  a mi portfolio</h1>
        </Box>
        <Box>
          <p className="animate__animated animate__backInRight" style={{ textAlign: "center", padding: "10px", color:'#8dc6ff' }}> FrontEnd/React Developer </p>
        </Box>
       <Box>
            <Button bg='black' color='white'>Contact me</Button>
        </Box>
        
      </WrapItem>
    </Wrap>
  );
};

export default SectionOne;
