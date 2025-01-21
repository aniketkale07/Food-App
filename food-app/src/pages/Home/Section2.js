import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router';
import Pizza from '../../assets/about/pizza.png';
import Salad from '../../assets/about/salad.png';
import Pasta from '../../assets/about/delivery-bike.png';
import '../../styles/home.css';
function Section2() {
  const mockData = [
    {
      image: Pizza,
      title: 'Share the Joy',
      description: 'Perfect for sharing with family and friends, our pizzas are made to bring people together. Grab a slice and enjoy the moment!',
    },
    {
      image: Pasta,
      title: 'Fast & Reliable Delivery',
      description: 'Get your favorite meals delivered to your doorstep quickly and efficiently. Our delivery team ensures your food is fresh, hot, and on time, every time.',
    },
    {
      image: Salad,
      title: 'Vegan & Vegetarian Options',
      description: 'Satisfy your cravings with our exclusive range of vegan and vegetarian dishes. Made with love and packed with flavor, they’re perfect for every palate.',
    },
  ];

  return (
    <section>
      {/* About Section */}
      <section className="about_section " >
        <Container>
          <Row >
            <Col lg={{ span: 8, offset: 2 }} className="text-center mt-4">

              <h2>The Burger Tastes Better When You Eat It With Your Family.</h2>
              <p>
              Sharing a burger with loved ones makes every bite more enjoyable. Our delicious burgers are made to create unforgettable moments together.
              </p>
              <Link to="/menu" className="btn order_now btn_red text-dark btn-outline-danger">
                Explore Full Menu
              </Link>

            </Col>
          </Row>
        </Container>
      </section>

      {/* Menu Cards Section */}
      <section className="about-wrapper">
        <Container>
          <Row className="mt-5">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4" key={index}>
                <div className="about_box text-center">

                  <img src={cardData.image} alt={cardData.title} className="img-fluid about_icon" />
                  <h4 className=''>{cardData.title}</h4>
                  <p>{cardData.description}</p>
                </div>
              </Col>
            ))}

          </Row>
        </Container>
      </section>
    </section>
  );
}

export default Section2;
