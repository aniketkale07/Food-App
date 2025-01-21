import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router'; 
import Logo from '../assets/logo/logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/header.css';



function Header() {
  const [nav, setNav] = useState(false);

  const changeOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    setNav(scrollValue > 100);
  };

  // Attach scroll event listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', changeOnScroll);
    return () => {
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
            <Link to="/" className="logo">
              <img src={Logo} alt="logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={'/'}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={'/about'}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to={'/menu'}>
                Our Menu
              </Nav.Link>
              <Nav.Link as={Link} to={'/shop'}>
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to={'/blog'}>
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to={'/contact'}>
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
