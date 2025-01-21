import React from 'react'
import {Row , Col , Container} from 'react-bootstrap';
import PromotionImage from '../../assets/promotion/pro.png';
function Section4() {
  return (
    <>
 <section className='promotion_section'>
    <Container style={{fontFamily: 'Poppins'}}>
      <Row className='align-items-center'>
        <Col lg={6} md={6} sm={12} className='text-center mb-lg-0'> 
          <img src={PromotionImage} alt='Promotion' className='img-fluid'/>

         </Col >
         <Col lg={6} md={6} sm={12} className='text-center px-5 mb-5 '>
         <h2>Nothing brings people together like a good burger!</h2>
         <p>Pasfkj f kfjkalfj afj jlkjfalk jflaj fjalkfjj fjfjkafj  ksfj kajfkljfkj fths i s m y bes =s fkdflsjdf  skjflsfj 
          dskfja fj f  but the out pizza is the best pizza.
         </p>
         <ul>
          <li>
            <p>
              fringilia risus llluctis marus adkfj aklf kdf alkfj  fakfjklaj l flajl al aflja flajfl jljfljf lajfl 
            </p>
          </li>
          <li>
            <p>
              fringilia risus llluctis marus adkfj aklf kdf alkfj  fakfjklaj l flajl al aflja flajfl jljfljf lajfl 
            </p>
            </li>
            <li>
              <p>
                fringilia risus llluctis marus adkfj aklf kdf
              </p>
            </li>
         </ul>
         </Col>
      </Row>
      </Container>
 </section>

<section className='bg-parellex'>

</section>
 </>
 
  )
}

export default Section4