import { Box, Wrap, WrapItem, Button } from "@chakra-ui/react";
 import fotoCv from "../../img/foto-cv.jpg"
 import React from "react";
import linkedin from '../../img/linkedin.png'
import github from '../../img/github.png'
import './SectionOne.scss'
const SectionOne = () => {
  return (
    <Wrap justify="center" style={{ marginTop: "180px" }} spacing="40px">
      <WrapItem>
        <Box>

         <img src={fotoCv} style={{width:'250px',borderRadius:'100px'}} alt="" />
        </Box>
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
          <p className="animate__animated animate__backInDown" style={{ textAlign: "center",fontWeight:'800', padding: "10px", color:'#455d7a' }}> FrontEnd/React Developer </p>
        </Box>
       <Box style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
            <Button bg='black' color='white'>Contact me</Button>
            
            <Box>
              <a href="https://www.linkedin.com/in/daniel-franchi-409359238/">
                          <img src={linkedin} style={{width:'30px'}} alt="" />
              </a>
          </Box>
          <Box>
            <a href="https://github.com/danielfranchi555">
            <img src={github} style={{width:'30px'}} alt="" />
            </a>
          </Box>
        </Box>
        
      </WrapItem>
    </Wrap>
  );
};

export default SectionOne;
