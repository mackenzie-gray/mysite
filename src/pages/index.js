import React from 'react'

import Layout from '../components/Layout'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Projects from '../components/Projects'

const IndexPage = () => (
  <Layout>
    <About />
    <Projects />
    <Experience />
    <Contact />
  </Layout>
)

export default IndexPage
