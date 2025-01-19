import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router';

function Cards({ image, title, paragraph, rating, price }) {
  return (
    <Col sm={6} md={4} lg={3} className="mb-4">
      <Card style={{ width: '18rem' }} className='d-flex justify-content-between'>
        <div className="card-img-top overflow-hidden">
          <Card.Img variant="top" src={image} alt={title} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="item_rating">Rating: {rating}</div>
            <div className="wishlist">
              <i className="bi bi-heart fs-5"></i>
            </div>
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>
          <div className="d-flex align-items-center justify-content-between mt-3">
            <h5 className="menu_price mb-0">${price.toFixed(2)}</h5>
            <div className="add_to_cart">
              <Link to="/cart" className="btn btn-primary">
                <i className="bi bi-bag me-2"></i> Add to Cart
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;
