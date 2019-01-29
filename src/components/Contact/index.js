import React, { Component } from 'react'

import styles from './contact.module.css'

export default class Contact extends Component {
  render() {
    return (
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
    )
  }
}
