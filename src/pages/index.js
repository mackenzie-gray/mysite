import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/Layout'
import styles from './styles/index.module.css'

const IndexPage = () => (
  <Layout>
    <div className={styles.container}>
      <section id="about">
        <h1 className="intro">Mack Gray</h1>
        <h4>Web and app developer from Toronto, ON.</h4>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <h4>Wattpad</h4>
        <h4>AGF, Canada Company</h4>
        <h4>NexJ Systems</h4>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>
          Check out projects I've worked on on my{' '}
          <a
            href="https://github.com/mackenzie-gray"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
      </section>
    </div>
  </Layout>
)

export default IndexPage
