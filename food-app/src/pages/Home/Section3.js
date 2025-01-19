import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router';
import Image1 from '../../assets/menu/burger-11.jpg';
import Image2 from '../../assets/menu/burger-12.jpg';
import Image3 from '../../assets/menu/burger-13.jpg';
import Image4 from '../../assets/menu/burger-14.jpg';
import Image5 from '../../assets/menu/burger-15.jpg';
import Image6 from '../../assets/menu/burger-16.jpg';
import Image7 from '../../assets/menu/burger-17.jpg';
import Image8 from '../../assets/menu/burger-18.jpg';
import Cards from '../../components/Layouts/Cards';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Section3() {
  const mockData = [
    {
      id: '0001',
      image: Image1,
      title: 'Crispy Chicken Burger',
      paragraph: 'Our classic Italian pizza, made with love and care.',
      rating: 2.5,
      price: 99.13,
    },
    {
      id: '0002',
      image: Image2,
      title: 'Ultimate Bacon',
      paragraph: 'Our classic Italian pizza, made with love and care.',
      rating: 3.5,
      price: 99.13,
    },
    {
      id: '0003',
      image: Image3,
      title: 'Black Sheep',
      paragraph: 'American cheese, lettuce, tomato, pickles, onions, mayo, mustard',
      rating: 1.5,
      price: 91.13,
    },
    {
      id: '0004',
      image: Image4,
      title: 'The Vegan Burger',
      paragraph: 'House-made vegan patty, lettuce, tomato, pickles, onions',
      rating: 5.0,
      price: 95.13,
    },
    {
      id: '0005',
      image: Image5,
      title: 'Double Burger',
      paragraph: '2 patties, cheddar cheese, mustard, ketchup, pickles',
      rating: 4.5,
      price: 89.13,
    },
    {
      id: '0006',
      image: Image6,
      title: 'Turkey Burger',
      paragraph: 'Turkey patty, lettuce, tomato, pickles, onions, mayo',
      rating: 1.5,
      price: 94.13,
    },
    {
      id: '0007',
      image: Image7,
      title: 'Smokey House',
      paragraph: 'Patty, cheddar cheese, bacon, lettuce, tomato, pickles, onions',
      rating: 0.5,
      price: 98.13,
    },
    {
      id: '0008',
      image: Image8,
      title: 'The Classic Burger',
      paragraph: 'Patty, cheddar cheese, lettuce, tomato, pickles, onions, mayo',
      rating: 2.5,
      price: 99.13,
    },
  ];

  const renderRatingIcon = (rating) => {
    const stars = [];
    let i = 0;
    for (i = 0; i < Math.floor(rating); i++) {
      stars.push(<i key={i} className='bi bi-star-fill'></i>);
    }
    if (rating % 1 !== 0) {
      stars.push(<i key={i} className='bi bi-star-half'></i>);
      i++;
    }
    while (i < 5) {
      stars.push(<i key={i} className='bi bi-star'></i>);
      i++;
    }
    return stars;
  };

  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>OUR CRAZY BURGERS</h2>
            <p className='para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis imperdiet.
            </p>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
          {mockData.map((cardData) => (
            <Cards
              key={cardData.id} // Use unique id as key
              image={cardData.image}
              rating={renderRatingIcon(cardData.rating)} // Pass rendered rating icon here
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
            />
          ))}
        </Row>
        <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4>Get YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn-outline-danger px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2 mb-5 mb-md-0">
              <h4>Get YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn-outline-danger px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;
