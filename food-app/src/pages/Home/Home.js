import React, { Fragment } from 'react'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Layout from '../../components/Layouts/layout';
import Section1 from './Section1';
import '../../styles/home.css';
import Section2 from './Section2';

function Home() {
  return (
    <Fragment>
        
        <Layout>
          
       <Section1/>
      <Section2/>
        </Layout>
    </Fragment>
  )
}

export default Home