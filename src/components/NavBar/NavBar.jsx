import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss'

const NavBar = () => {
  return (
    <div >
    <Navbar style={{backgroundColor:' #38598b'}} expand="lg">
      <Container >
        <Navbar.Brand href="#home"  style={{color:'#e7eaf6',fontWeight:'600'}}>Daniel Franchi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav >
            <Nav.Link className='nav-item' style={{color:'white'}} href="#sobreMi">Sobre mi</Nav.Link>
            <Nav.Link  className='nav-item' style={{color:'white'}} href="#proyectos">Proyectos</Nav.Link >
            <Nav.Link className='nav-item' style={{color:'white'}} href="#skills">Tecnologias</Nav.Link>
            <Nav.Link className='nav-item' style={{color:'white'}} href="#link">Descargar Cv</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar