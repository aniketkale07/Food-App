import React, { useEffect, useState } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/footer.css';

function Footer() {
  // Scroll state
  const [isVisible, setIsVisible] = useState(false);

  // Scroll-to-top function
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Check scroll position
  const listenToScroll = () => {
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    windowScroll > 250 ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => {
      window.removeEventListener('scroll', listenToScroll);
    };
  }, []);

  return (
    <>
      <footer className="footer-section">
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div>
                <h5>Location</h5>
                <p>At.post 123 Main Street</p>
                <p>Pune, India 411043</p>
              </div>
            </Col>

            <Col sm={6} lg={3} className="mb-4 mb-lg-0 text-center">
              <h5>Working Hours</h5>
              <p>Mon - Fri: 9:00 AM - 10:00 PM</p>
            </Col>

            <Col sm={6} lg={3} className="mb-4 mb-lg-0 text-center">
              <h5>Order Now</h5>
              <p>Get Delivery Within 30 Minutes</p>
              <Link to="tel:9898989898" className="calling">
                989-898-9898
              </Link>
            </Col>

            <Col sm={6} lg={3} className="mb-4 mb-lg-0 text-center">
              <h5>Follow Us</h5>
              <p>Follow Us on Social Media</p>
              <ul className="list-unstyled d-flex justify-content-center mt-2">
                <li className="mx-2">
                  <Link to="/">
                    <i className="bi bi-facebook"></i> arohiSoftware
                  </Link>
                </li>
                <li className="mx-2">
                  <Link to="/">
                    <i className="bi bi-instagram"></i> arohiSoftware
                  </Link>
                </li>
                <li className="mx-2">
                  <Link to="/">
                    <i className="bi bi-twitter"></i> arohiSoftware
                  </Link>
                </li>
                <li className="mx-2">
                  <Link to="/">
                    <i className="bi bi-youtube"></i> arohiSoftware
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>

          <hr />

          {/* Copy Right Content */}
          <Row className="copy-right mt-5">
            <Col sm={12} className="text-center">
              <div className="copy-right-content">
                <ul className="list-unstyled d-flex justify-content-center">
                  <li>
                    <Link to="/">
                      @ 2025 <span className="company-name">ArohiSoftware</span> All Rights Reserved
                    </Link>
                  </li>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Terms of Use</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Scroll to Top Button */}
      {isVisible && (
        <div className="scroll-top" onClick={scrollTop}>
          <i className="bi bi-arrow-up"></i>
        </div>
      )}
    </>
  );
}

export default Footer;
