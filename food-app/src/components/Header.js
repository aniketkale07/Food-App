import React, { Fragment } from 'react'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, Link } from 'react-router';
import Logo from '../assets/logo/logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Internale css
import '../styles/header.css';

function Header() {
  return (
    <header>
 <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
          <Link className='logo'>
          <img src={Logo} alt='logo' className='img-fluid'></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'about'}>About</Nav.Link>
            <Nav.Link as={Link} to={'menu'}>Our Menu</Nav.Link>
            <Nav.Link as={Link} to={'shop'}>Shop</Nav.Link>
            <Nav.Link as={Link} to={'blog'}>Blog</Nav.Link>
            <Nav.Link as={Link} to={'contact'}>Contact</Nav.Link>
            <Nav.Link as={Link} to={'/'}>
            <div className='cart'>
              <i class="bi bi-bag fs-5"></i>
              <em className="roundpoint">2</em>
            </div>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    
  )
}

export default Header