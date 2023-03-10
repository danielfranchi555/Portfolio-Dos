import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss'

const NavBar = () => {
  return (
    <div >
    <Navbar style={{backgroundColor:' #e4f1fe'}} expand="lg">
      <Container >
        <Navbar.Brand href="#home"  style={{color:'black',fontWeight:'600'}}>Daniel Franchi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav >
            <Nav.Link className='nav-item' style={{color:'black'}} href="#home">Sobre mi</Nav.Link>
            <Nav.Link  className='nav-item' style={{color:'black'}} href="#link">Proyectos</Nav.Link >
            <Nav.Link className='nav-item' style={{color:'black'}} href="#link">Tecnologias</Nav.Link>
            <Nav.Link className='nav-item' style={{color:'black'}} href="#link">Descargar Cv</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar