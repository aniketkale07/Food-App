import React from 'react'
import Layout from '../../components/Layouts/layout'
import Section1 from './Section1'
import '../../styles/menu.css';
import Section2 from './Section2';
function Menu() {
  return (
    <Layout>
      <div>Menu</div>
      <Section1/>
      <Section2/>
    </Layout>
  )
}

export default Menu