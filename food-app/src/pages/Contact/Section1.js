import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../../styles/contact.css';

function Section1() {
  const [isSubmitForm, setIsSubmitForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const submitForm = (e) => {
    e.preventDefault();   
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }
    console.log('Form Submitted:', formData); 
    setIsSubmitForm(true);
  };

  return (
    <>
      <section className="section1">
        <h1>Contact Us</h1>
      </section>

      {isSubmitForm ? (
        <div className='thankyou-section'>
          <h1 >Thank You</h1>
        </div>
      ) : (
        <section className="contact-form-section pt-5 pb-5">
          <Container>
            <Row className="justify-content-center">
              <Col lg={6}>
                <form onSubmit={submitForm}>
                  <div className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Your name.."
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Your email.."
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        placeholder="Subject.."
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        placeholder="Your message.."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="btn-group">
                      <button type="submit" className="btn btn-outline-primary">Send Message</button>
                    </div>
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
          <hr className="mt-5 mb-5 hr"></hr>
        </section>
      )}
    </>
  );
}

export default Section1;
