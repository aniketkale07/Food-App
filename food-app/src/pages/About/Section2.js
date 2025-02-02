import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MentorCard from '../../components/Layouts/MentorCard';
import Image1 from '../../assets/about/founder.jpg';
import Image2 from '../../assets/about/insperation.jpg';
import Image3 from '../../assets/about/founder.jpg';
import Image4 from '../../assets/about/co-founder.jpg';

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
                     {mentor.map((data, index)=>(
                        <MentorCard image={data.image} name={data.name} role={data.role} />
                     ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section2