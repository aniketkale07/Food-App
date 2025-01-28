import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
function Section2() {

    const mentor=[
        {
            image:Image1,
            name:'Aniket Kale',
            role:'Motivation',
        },
        {
            image:Image2,
            name:'Arohi Deshmukh',
            role:'Insperation',
        },
        {
            image :Image3,
            name:'Aniket Kale',
            role:'Founder',
        },
        {
            image:Image4,
            name:'Mayuri Chavan',
            role:"Co-Founder",
        },
    ]
        
    
    return (
        <>
            <section className='section2'>
                <Container>
                    <Row lg={4} md={3} sm={1}>
                        <Col className='card'>
                            <div>
                                <img src='' alt='owner' className='imgfluid'></img>
                                <h1>Aniket Kale</h1>
                                <p>Motivation </p>
                            </div>
                        </Col>
                        <Col  className='card'> 
                            <div>
                                <img src='' alt='owner' className='imgfluid'></img>
                                <h1>Aniket Kale</h1>
                                <p>Founder </p>
                            </div>
                        </Col>
                        <Col className='card'>
                            <div>
                                <img src='' alt='owner' className='imgfluid'></img>
                                <h1>Aniket Kale</h1>
                                <p>Co-Founder</p>
                            </div>
                        </Col>
                        <Col className='card'>
                            <div>
                                <img src='' alt='owner' className='imgfluid'></img>
                                <h1>Aniket Kale</h1>
                                <p>Founder of Tasty Burger</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section2