import { Box, Wrap, WrapItem, Button, Image, Text, Center } from "@chakra-ui/react";
import fotoCv from "../../img/foto-cv.png"
import React from "react";
import linkedin from '../../img/linkedin.png'
import github from '../../img/github.png'
import './SectionOne.scss'
import  Zoom  from "react-reveal/Zoom";

const SectionOne = () => {
  return (
    
     <div>
    
       <div className="container " style={{maxWidth:'100%',height:'500px', display:'flex',justifyContent:'center',alignItems:'center', backgroundColor:'#455d7a'}}>
     <div className="row" >
      <div className="col-md " style={{display:'flex',justifyContent:'center'}}>
        <Zoom>
            <div>
        <Image
  borderRadius='50px'
  objectFit='cover'
  boxSize='250px'
  maxW={{base:'200px',md:'300px'}}
  maxH={{base:'200px',md:'500px'}}
  src={fotoCv}
  alt='Dan Abramov'
  bg='#e3e3e3'
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
        <p style={{color:'#f95959',fontWeight:'800'}}>Frontend/React js</p>
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
   
     </div>
    
    
  );
};

export default SectionOne;
