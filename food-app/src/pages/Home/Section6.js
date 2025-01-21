import React from 'react'
import { Col, Container, Row, Carousel } from 'react-bootstrap'
import User1 from '../../assets/blog/review-author-1.jpg';
import User2 from '../../assets/blog/review-author-2.jpg';
import User3 from '../../assets/blog/review-author-3.jpg';
import User4 from '../../assets/blog/review-author-5.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';
function Section6() {
    return (
        <>
            <section className="blog_section">
                <Carousel data-bs-theme="dark">
                    {/* ------------------------------FIRST USER REVIEW----------------- */}
                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className='user-img'>
                                <img src={User1} alt='user' className='img-fluid'></img>
                            </div>

                            <p className='mb-3'>
                            The burger had a great balance of taste and texture. The patty was well-seasoned, and the sauces added a tangy twist. Highly recommend it for a quick and tasty meal!"
                            </p>

                            <div className='item_rating mb-2'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                            <h5>BY AMELIE  NEWLOVE</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* ------------------------------SECOND USER REVIEW----------------- */}
                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className='user-img'>
                                <img src={User2} alt='user' className='img-fluid'></img>
                            </div>

                            <p>
                            "I loved the variety of pizzas offered. The flavors were rich, and the cheese melted just right, making every bite delightful. A perfect choice for a pizza night."                            </p>
                            <div className='item_rating mb-2'>
                                <i className='bi bi-star-fill '></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                            <h5>BY AMELIE  NEWLOVE</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* ------------------------------THIRD USER REVIEW----------------- */}

                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className='user-img'>
                                <img src={User3} alt='user' className='img-fluid'></img>
                            </div>

                            <p>
                            "The burger was juicy and cooked to perfection. The combination of the fresh veggies, soft bun, and flavorful patty made it unforgettable. Easily one of the best burgers I’ve had!"
                            </p>
                            <div className='item_rating mb-2'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                            <h5>BY AMELIE  NEWLOVE</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* ------------------------------FOURTH USER REVIEW----------------- */}
                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className='user-img'>
                                <img src={User4} alt='user' className='img-fluid'></img>
                            </div>

                            <p>
                            "The pizza was absolutely delicious! The crust was perfectly crispy, and the toppings were fresh and flavorful. It\’s a must-try for anyone who loves authentic pizza."
                            </p>
                            <div className='item_rating mb-2'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                            <h5>BY Amul ColDFKJLJ </h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        </>
    )
}

export default Section6