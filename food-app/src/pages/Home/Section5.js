import React from 'react'
import {Row, Container,Col} from 'react-bootstrap';
import storeIOS from '../../assets/shop/appstore.png';
import PlayStore from '../../assets/shop/googleplay.png';
import Eshop from '../../assets/shop/e-shop.png';
import Brand1 from '../../assets/brands/brand-11.png';
import Brand2 from '../../assets/brands/brand-12.png';
import Brand3 from '../../assets/brands/brand-13.png';
import Brand4 from '../../assets/brands/brand-14.png';
import Brand5 from '../../assets/brands/brand-15.png';
import Brand6 from '../../assets/brands/brand-16.png';
import Brand7 from '../../assets/brands/brand-17.png';
import Brand8 from '../../assets/brands/brand-18.png';
import Carousel from 'react-bootstrap/Carousel';

import {Link} from 'react-router';

function Section5() {
  return (
    <>
    <section className="shop_section">
        <Container>
            <Row className='align-items-center'>
                <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
                <h4>Download mobile App and</h4>
                <h2>Get 10% off</h2>
                <p>Download our mobile app and get 10% off on your first order</p>
                <Link to="/">
                <img src={storeIOS} alt='ios' className='img-fluid me-3 store'>
                </img>
                </Link>
                <Link to="/">
                <img src={PlayStore} alt='ios' className='img-fluid me-3 store'>
                </img>
                </Link>
                </Col>
                <Col lg={6} >
                <img src={Eshop} alt='e-shop' className='img-fluid '>
                </img>
                </Col>
            </Row>
        </Container>
    </section>


    <section className='brand_section'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Carousel.Caption>
         <div className='d-flex align-items-center justify-content-between'>
         <div className='brand-image'>
                <img src={Brand1} alt='brand-1' className='img-fluid'>
                </img>
            </div>
            <div className='brand-image'>
                <img src={Brand2} alt='brand-2' className='img-fluid'>
                </img>
            </div>
            <div className='brand-image'>
                <img src={Brand3} alt='brand-3' className='img-fluid'>
                </img>
            </div>
            <div className='brand-image'>
                <img src={Brand4} alt='brand-4' className='img-fluid'>
                </img>
            </div>
            <div className='brand-image'>
                <img src={Brand5} alt='brand-5' className='img-fluid'>
                </img>
            </div>
            <div className='brand-image'>
                <img src={Brand6} alt='brand-6' className='img-fluid'>
                </img>
            </div>
            <div className='brand-image'>
                <img src={Brand7} alt='brand-7' className='img-fluid'>
                </img>
            </div>
            <div className='brand-image'>
                <img src={Brand8} alt='brand-8' className='img-fluid'>
                </img>
            </div>
            
            </div>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
    </section>
    </>
  )
}

export default Section5