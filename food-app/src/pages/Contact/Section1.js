import React, { useState } from 'react'
import ContactImg from '../../assets/blog/reviews.jpg';
import {Row , Col , Container} from 'react-bootstrap';
function Section1() {

const [name, setName] = useState('');
const [email , setEmail] = useState('');
const [subject, setSubject] = useState('');
const [message , setMessage] = useState('');


  return (
    <>
    <section className='section1 '> 
   
    <h1> Contact us</h1>
    </section>

    <section className='contact-form-section pt-5 pb-5'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={6}>
                <div className='contact-form'>
                  <div className='form-group'>
                  <label for='name' className='form-label'>Name</label>
                  <input type='text' id='name' name='name'className='form-control' placeholder='Your name..'></input>
                  </div>
                    <div className='form-group'>
                    <label for='email' className='form-label'>Email</label>
                    <input type='email' id='email' name='email'className='form-control'
                    placeholder='Your email..'></input>
                    </div>

                    <div className='form-group'>
                    <label for='subject' className='form-label'>Subject</label>
                    <input type='text' id='subject' name='subject'className='form-control'
                    placeholder='Subject..'></input>
                    </div>

                    <div className='form-group'>
                    <label for='message' className='form-label'>Message</label>
                    <textarea id='message' name='message'className='form-control'
                    placeholder='Your message..'></textarea>
                    </div>

                    <div className='btn-group'>
                      <a href='/' className='btn btn-outline-primary'>Send Message</a>

                    </div>
                   
                </div>
                </Col>
            </Row>
           
        </Container>
        <hr className='mt-5 mb-5 hr'></hr>
    </section>
    </>
  )
}

export default Section1