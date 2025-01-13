
import React from 'react';
import { Form, Link } from 'react-router';
import { Row, Col, Container } from 'react-bootstrap';

import Burger from '../../assets/hero/burger.png';

function Section1() {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
           
              <img src={Burger} alt="burger" className="img-fluid" />
              <div className="price_badge" >
                <div className="badge_text">
                  <h4 className='h4_xs'>Only</h4>
                  <h4 className="h3_lg">$6.55</h4>
                </div>
              </div>
            </div>
          </Col>
            <Col lg={5}>
            <div className='hero_text text-center'>
                <h3 className='  text-white display-flex justify-center font-3xl '> New Burger</h3>
                <h2 className='text-white'> With Onion</h2>
                <p className='text-white pt-2 pb-4'>
                    {/*  burger  */}
                    Lets the party begins with our burger , we provide the high quality burger for you,
                    with the best ingredient and the best taste.
                    
                </p>
                <Link to='/menu' className='btn btn-primary'>Order Now</Link>
            </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section1;
