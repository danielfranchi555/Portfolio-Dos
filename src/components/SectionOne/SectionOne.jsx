import { Box, Center, Wrap, WrapItem, Image, Button } from "@chakra-ui/react";
 import fotoCv from "../../img/foto-cv.png"
 import React from "react";
import linkedin from '../../img/linkedin.png'
import github from '../../img/github.png'

const SectionOne = () => {
  return (
    <Wrap justify="center" style={{ marginTop: "180px" }} spacing="40px">
      <WrapItem 
>
         <Image
          bg='#455d7a'
          src={fotoCv}
          fallbackSrc="https://via.placeholder.com/150"
          h="300px"
          borderRadius='full'
        /> 
      </WrapItem>
      <WrapItem
        maxW={{ base: "290px", sm: "300px" }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
        <h1 style={{fontSize:'40px',color:'black',textAlign:'center'}} >Bienvenido/a  a mi portfolio</h1>
        </Box>
        <Box>
          <p className="animate__animated animate__backInRight" style={{ textAlign: "center",fontWeight:'800', padding: "10px", color:'#455d7a' }}> FrontEnd/React Developer </p>

        </Box>
       <Box style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
            <Button bg='black' color='white'>Contact me</Button>
            <Box>
          <img src={linkedin} style={{width:'30px'}} alt="" />
          </Box>
          <Box>
            <img src={github} style={{width:'30px'}} alt="" />
          </Box>
        </Box>
        
      </WrapItem>
    </Wrap>
  );
};

export default SectionOne;
