import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router';

function Section7() {
  return (
    <>
    <section className="contact-section">
        <Container>
            <Row className='justify-content-center'>
                <Col lg={8} className='text-center'>
                <h4>We Guarantee</h4>
                <h2>30 Minutes Delivery!</h2>
                <p>Our delivery service is fast and reliable. We guarantee that your food will be delivered to you within 30 minutes of placing your order.</p>
                <Link to='/' className="btn btn-danger px-4 py-2 rounded-0">
                 
                call: 99-555-1234
                </Link>
                </Col>

</Row>        </Container>
        </section>
    </>
  )
}

export default Section7