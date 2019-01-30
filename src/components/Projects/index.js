import React, { Component } from 'react'

import styles from './project.module.css'
import hq from './hq.png'
import github from './github.svg'
import atlas from './atlas.png'

export default class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <h2>Projects</h2>
        <div className={styles.projects}>
          <div className={styles.project}>
            <img src={atlas} className={styles.image} />
          </div>
          <div className={styles.project}>
            <img src={hq} className={styles.image} />
          </div>
          <div className={styles.project}>
            <img src={github} className={styles.image} />
          </div>
        </div>
        {/* <p>
          Check out some other things I've built on on my{' '}
          <a
            href="https://github.com/mackenzie-gray"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          .
        </p> */}
      </section>
    )
  }
}
