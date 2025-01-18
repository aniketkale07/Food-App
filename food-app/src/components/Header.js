import React, { Fragment, useState, useEffect } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
import Logo from '../assets/logo/logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Internal CSS
import '../styles/header.css';

function Header() {
  const [nav, setNav] = useState(false);

  const changeOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    setNav(scrollValue > 100);
  };

  useEffect(() => {
    // Attach scroll listener on mount
    window.addEventListener('scroll', changeOnScroll);
    return () => {
      // Remove listener on unmount
      window.removeEventListener('scroll', changeOnScroll);
    };
  }, []);

  return (
    <header>
      <Navbar
        expand="lg"
        className={`${nav ? 'sticky' : ''} bg-body-tertiary`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link className="logo">
              <img src={Logo} alt="logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={'/'}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={'about'}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to={'menu'}>
                Our Menu
              </Nav.Link>
              <Nav.Link as={Link} to={'shop'}>
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to={'blog'}>
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to={'contact'}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to={'/'}>
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
