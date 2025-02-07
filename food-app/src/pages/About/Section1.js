import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Section1() {
    return (

        <>
            <section className='about-heading-section' >
                <div className=' pt-5'>

                    <h1 className='ps-5'>About <span className='ps-1'>Us</span> </h1>
                    <p className='ps-4'>"Our Journey: From Passion <span className='ps-1'> to Perfection"</span> </p>
                </div>
            </section>
            <section className='about-content-section d-flex justify-center'>
                <Container>
                    <Row className='m-0'>
                        <Col lg={12} md={6} className='m-0'>
                            <div className='pt-5 text-center'>
                                <h2 className='gradient-text'>"Crafting the Perfect Burger Experience"</h2>
                                <p>
                                    Welcome to our burger haven, where every bite tells a story of flavor, quality,
                                    and passion. At <span className='fw-bold'>'Tasty Burger'</span>, we believe a great burger is more than just a
                                    meal—it's an experience. From our freshly baked buns to juicy, handcrafted patties,
                                    every ingredient is carefully sourced to ensure the highest quality. Whether you're craving a classic cheeseburger, a gourmet twist, or a plant-based delight, we've got something to satisfy every appetite. With a commitment to freshness and a love for innovation, we aim to bring people together over the universal love of great food. So, come on in, grab a seat, and let us make your burger dreams come true!
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>


            </section>
        </>
    )
}

export default Section1