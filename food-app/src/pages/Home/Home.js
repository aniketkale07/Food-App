import React, { Fragment } from 'react'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Layout from '../../components/Layouts/layout';
import Section1 from './Section1';
import '../../styles/home.css';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';

function Home() {
  return (
    <Fragment>
        
        <Layout>
          {/*For Banner Section  */}
       <Section1/>

{/* For About Section */}
      <Section2/>

{/* For Menu Purpose */}
      <Section3/>

{/* For Promotion purpose */}
      <Section4/>


      {/* shop Section */}
      <Section5/>

      {/* Blog Section */}
      <Section6/>

      {/* Contact section */}
      <Section7/>
        </Layout>
    </Fragment>
  )
}

export default Home