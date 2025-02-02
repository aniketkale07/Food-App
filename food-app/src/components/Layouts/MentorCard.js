import React from 'react'
import { Col } from 'react-bootstrap'
import '../../styles/mentorCard.css';

function MentorCard({image, name, role}) {
  return (
    <>
      <Col sm={12} lg={3} md={6}>

        <div className='mt-5 mentor-card'>
          <img src={image} alt='owner' className='imgfluid'></img>
          <h4 className=''>{name}</h4>
          <p>{role}</p>
        </div>
      </Col>

    </>
  )
}

export default MentorCard