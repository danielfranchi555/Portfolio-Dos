import { Button, Center } from '@chakra-ui/react';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Fade from 'react-reveal/Fade'
import { NavLink } from 'react-router-dom';
import cv from '../../../src/Daniel-Andres-Franchi .pdf'
import './NavBar.scss'

const NavBar = () => {
  return (
    <Fade top>
          <div style={{marginBottom:'0px'}} >
    <Navbar  style={{backgroundColor:' #222831'}} expand="lg">
      <Container >
        <Navbar.Brand href="#home"  style={{color:'White',fontWeight:'800'}}>Daniel Franchi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav >
            <Nav.Link className='nav-item hover' style={{color:'white',fontWeight:'500',marginTop:'4px'}} href="#sobreMi">Sobre mi</Nav.Link>
            <Nav.Link  className='nav-item hover' style={{color:'white',fontWeight:'500',marginTop:'4px'}} href="#proyectos">Proyectos</Nav.Link >
            <Nav.Link className='nav-item hover' style={{color:'white',fontWeight:'500',marginTop:'4px'}} href="#skills">Tecnologias</Nav.Link>
           <Center> <a  style={{color:'white',fontWeight:'500'}} href={cv}  download="Daniel Andres Franchi">  <Button size='sm' bg='teal' color='white'> Descargar Cv</Button> </a> </Center> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </Fade>

  )
}

export default NavBar