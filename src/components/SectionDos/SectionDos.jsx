import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Reveal from "react-reveal/Reveal";
import Zoom from "react-reveal/Zoom";
import proyectos from '../../proyectos'
import "./SectionDos.scss";

const SectionDos = () => {
  return (
    <Box
      className="container-dos"
      id="proyectos"
      style={{
        backgroundColor:'#e3e3e3',
        width:'100%',
        display: "flex",
        flexDirection: "column",       
        padding: "30px",
        justifyContent:'center',
        alignItems:'center',
        border:'solid 1px'
      
      }}
    >
      <Box >
        <Center>
           <h1 style={{ fontSize: "40px", fontWeight: "600", color: "#455d7a" }}>
          Proyectos
        </h1>
        </Center>
       
      </Box>
     
  <Wrap border='solid #e3e3e3' justify='center' w='100%' height={{base:'100%',md:'800px'}}  >
      {proyectos.map((item)=>(    
            <WrapItem>
              <Zoom>
                 <Center  h='370px'  >
      
     <div class="card-dos">
                        <div class="face face1">
                            <div class="content">
                                <img src={item.img}/>
                                <h3>{item.title}</h3>
                            </div>
                        </div>
                        <div class="face face2">

<div class="content">
                                <p>{item.description}</p>
                                    <a href={item.link} target="_blank">Deploy</a>
                                    <a href={item.Code} target="_blank">Github</a>

                            </div>
                            
                        </div>
                    </div>               
    </Center>      
              </Zoom>
                          
        </WrapItem>
 
      ))}
 
      </Wrap>
      
   
    
        
    </Box>
  );
};

export default SectionDos;
