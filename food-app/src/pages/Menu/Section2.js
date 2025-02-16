import React, { Fragment } from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap';
import Pizza from '../../assets/menu/image.png';
import Burger from '../../assets/menu/burger.png';
import Salad from '../../assets/menu/sandwitch.jpg';

const handleCardClick=()=>{
    console.log(' Salad Card is Clik');
    
}
function Section2() {

    
  return (
    
    <Container className='menu-container'>
        <Row lg={3} md={6} sm={8}>
            <Col className='menu-card text-center'>
                <h2>Pizza</h2>
                <Image src={Pizza} alt="pizza" className='img-fluid'></Image>
            </Col>
            <Col className='menu-card text-center'>
                <h2>Burger</h2>
                <Image src={Burger} alt="pizza" className='img-fluid'></Image>
            </Col> <Col className='menu-card text-center fw-bold ' onClick={handleCardClick}>
                <h2>Salad</h2>
                <Image src={Salad} alt="pizza" className='img-fluid'></Image>
            </Col> 
        </Row>
    </Container>
    
   )
}

export default Section2