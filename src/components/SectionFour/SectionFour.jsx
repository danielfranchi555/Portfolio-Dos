import React from 'react'
import js from '../../img/js.png'
import react from '../../img/react.png'
import firebase from '../../img/firebase.png'
import bootstrap from '../../img/bootstrap.png'
import sass from '../../img/sass.png'
import css from '../../img/css.png'
import html from '../../img/html.png'
import chakra from '../../img/chakra.png'
import Zoom from 'react-reveal/Zoom';
import Reveal from 'react-reveal/Reveal';

const SectionFour = () => {
  return (
    <Zoom>
       <div id='skills' style={{marginTop:'150px'}}>
        <div style={{display:'flex',justifyContent:'center'}}>
          <h1   style={{fontSize:'30px',color:'black'}}>Skills</h1>  
        </div>
        
      <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{padding:'20px'}}>
     <img src={js} style={{width:'50px'}} alt="" />
        </div>
        <div style={{padding:'20px'}}  >
        <img src={react} style={{width:'50px'}} alt="" />
        </div>
        <div style={{padding:'20px'}} >
        <img src={firebase} style={{width:'50px'}} alt="" />
        </div>
        <div style={{padding:'20px'}} >
        <img src={bootstrap} style={{width:'50px'}} alt="" />
        </div>
      </div>

      <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{padding:'20px'}}>
     <img src={sass} style={{width:'50px'}} alt="" />
        </div>
        <div style={{padding:'20px'}}  >
        <img src={css} style={{width:'50px'}} alt="" />
        </div>
        <div style={{padding:'20px'}} >
        <img src={html} style={{width:'50px'}} alt="" />
        </div>
        <div style={{padding:'20px'}} >
        <img src={chakra} style={{width:'50px'}} alt="" />
        </div>
      </div>
    </div>
    </Zoom>
   
  )
}

export default SectionFour