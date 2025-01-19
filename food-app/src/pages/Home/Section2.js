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
      title: 'Original Italian Pizza',
      description: 'Our classic Italian pizza, made with love and care.',
    },
    {
      image: Pasta,
      title: 'Spaghetti Bolognese',
      description: 'Our classic Italian pasta dish, made with love and care.',
    },
    {
      image: Salad,
      title: 'Garden Salad',
      description: 'Our fresh and healthy garden salad, made with love and care.',
    },
  ];

  return (
    <section>
      {/* About Section */}
      <section className="about_section " >
        <Container>
          <Row >
            <Col lg={{ span: 8, offset: 2 }} className="text-center mt-4">

              <h2>The burger tastes better when you eat it with your family.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis imperdiet.
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
