import React from 'react'
import Layout from '../../components/Layouts/layout';
import '../../styles/about.css';
import Section1 from './Section1';
import Section2 from './Section2';
function About() {
  return (
    <Layout>
      <Section1/>
      <Section2/>
    </Layout>
  )
}

export default About