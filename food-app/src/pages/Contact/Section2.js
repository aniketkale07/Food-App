import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../styles/contact.css';

function Section2() {
  return (
<>
<section className='section2 '> 
<Container>
    <Row className='justify-content-center'>
       <Col className='text-center pt-5' lg={6} sm={6}>
       <div className='location'>
       <h1>Our Location</h1>
        <p>123 Main Street</p>
        <p>Pune, Maharashtra, 12345</p>
        <p>India</p>
        <p className='contact-number'>Phone: 123-456-7890</p>
        
       </div>
       </Col>
        <Col lg={3} sm={6} className='text-center pt-5 '>
       <div className='contact'>
       <h1 className=''>Get in touch </h1>
        <p>Have a question or need more information?</p>
        <Link to='/contact' className='btn btn-primary'>Contact us</Link>
       </div>
        </Col>

    </Row>
</Container>
</section>
</>
  )
}

export default Section2