import React, { Fragment } from 'react'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Layout from '../../components/Layouts/layout';
import Section1 from './Section1';
import '../../styles/home.css';

function Home() {
  return (
    <Fragment>
        
        <Layout>
          
       <Section1/>
      
        </Layout>
    </Fragment>
  )
}

export default Home