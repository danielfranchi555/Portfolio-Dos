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
    <div >
    <Navbar fixed='top' style={{backgroundColor:' white'}} expand="lg">
      <Container >
        <Navbar.Brand href="#home"  style={{color:'#455d7a',fontWeight:'800'}}>Daniel Franchi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav >
            <Nav.Link className='nav-item hover' style={{color:'black',fontWeight:'500',marginTop:'4px'}} href="#sobreMi">Sobre mi</Nav.Link>
            <Nav.Link  className='nav-item hover' style={{color:'black',fontWeight:'500',marginTop:'4px'}} href="#proyectos">Proyectos</Nav.Link >
            <Nav.Link className='nav-item hover' style={{color:'black',fontWeight:'500',marginTop:'4px'}} href="#skills">Tecnologias</Nav.Link>
           <Center> <a  style={{color:'black',fontWeight:'500'}} href={pdf} download="Curriculum">  <Button size='sm' bg='#455d7a' color='white'> Descargar Cv</Button> </a> </Center> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar