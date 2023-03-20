import { Button, Center } from '@chakra-ui/react';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import pdf from '../../../src/Curriculum Daniel-Franchi.pdf'
import './NavBar.scss'

const NavBar = () => {
  return (
    <div style={{marginBottom:'0px'}} >
    <Navbar  style={{backgroundColor:' #e3e3e3'}} expand="lg">
      <Container >
        <Navbar.Brand href="#home"  style={{color:'#455d7a',fontWeight:'800'}}>Daniel Franchi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav >
            <Nav.Link className='nav-item hover' style={{color:'black',fontWeight:'500',marginTop:'4px'}} href="#sobreMi">Sobre mi</Nav.Link>
            <Nav.Link  className='nav-item hover' style={{color:'black',fontWeight:'500',marginTop:'4px'}} href="#proyectos">Proyectos</Nav.Link >
            <Nav.Link className='nav-item hover' style={{color:'black',fontWeight:'500',marginTop:'4px'}} href="#skills">Tecnologias</Nav.Link>
           <Center> <a  style={{color:'black',fontWeight:'500'}} href={pdf} download="Curriculum">  <Button size='sm' bg='#f95959' color='white'> Descargar Cv</Button> </a> </Center> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar