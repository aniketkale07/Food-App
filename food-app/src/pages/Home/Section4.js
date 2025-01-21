import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PromotionImage from '../../assets/promotion/pro.png';

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container style={{ fontFamily: 'Poppins' }}>
          <Row className="align-items-center">
            <Col lg={6} md={6} sm={12} className="text-center mb-lg-0">
              <img src={PromotionImage} alt="Promotion" className="img-fluid" />
            </Col>
            <Col lg={6} md={6} sm={12} className="text-center px-5 mb-5">
              <h2>Nothing brings people together like a good burger!</h2>
              <p>
                Enjoy the perfect combination of flavors with our juicy, handcrafted burgers and wood-fired pizzas. 
                Every bite is a celebration of quality ingredients and authentic recipes, designed to satisfy your cravings.
              </p>
              <ul>
                <li>
                  <p>
                    Our burgers are made with 100% fresh, premium beef and served with crisp lettuce, ripe tomatoes, and our signature sauces.
                  </p>
                </li>
                <li>
                  <p>
                    Experience the rich taste of our pizzas, made with a golden crust, gooey mozzarella, and a variety of fresh toppings to choose from.
                  </p>
                </li>
                <li>
                  <p>
                    Whether you're dining solo or with friends, our menu has something for everyone. Treat yourself today!
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-parellex"></section>
    </>
  );
}

export default Section4;
