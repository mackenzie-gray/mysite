import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/Layout'
import styles from './styles/index.module.css'

import wp_logo from '../images/wp_logo.png'
import agf_logo from '../images/agf_logo.png'
import nexj_logo from '../images/nexj_logo.png'

const IndexPage = () => (
  <Layout>
    <div className={styles.container}>
      <section id="about">
        <h1 className="intro">Mack Gray</h1>
        <h4>Web and app developer from Toronto, ON.</h4>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <div>
          <h3>Wattpad</h3>
          <img src={wp_logo} height={40} />
        </div>
        <h3>AGF, Canada Company</h3>
        <img src={agf_logo} height={40} />
        <h3>NexJ Systems</h3>
        <img src={nexj_logo} height={40} />
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>
          Check out some of the things I've built on on my{' '}
          <a
            href="https://github.com/mackenzie-gray"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          .
        </p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Want to get in touch? Send me a message.</p>
        <form
          className={styles.form}
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <div className={styles.info}>
            <div>
              <label>Your Name:</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label>Your Email:</label>
              <input type="email" name="email" />
            </div>
          </div>
          <div className={styles.message}>
            <label>Message:</label>
            <textarea name="message" rows="5" />
          </div>
          <button className={styles.send} type="submit">
            Send
          </button>
        </form>
      </section>
    </div>
  </Layout>
)

export default IndexPage
