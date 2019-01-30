import React, { Component } from 'react'

import styles from './about.module.css'
import mack_pic from './mack_hood_blue.png'

const skills = [
  'React',
  'Redux',
  'ReactNative',
  'Webpack',
  'Node',
  'Gatsby.JS',
  'Jest',
  'SASS',
  'Express',
  'Firebase',
  'LESS',
]

export default class About extends Component {
  render() {
    return (
      <section id="about" className={styles.about}>
        <div>
          <h1 className={styles.intro}>Mack Gray</h1>
          <p>
            I’m a web/app developer passionate about building beautiful,
            performant and well-tested applications users love. My go-to
            technology these days tends to be something in the react stack.
            Here's some of the other things that I'm familiar with and excite
            me:
          </p>
          <div className={styles.skills}>
            {skills.map(skill => (
              <span>{`#${skill}`}</span>
            ))}
          </div>
        </div>
        <img src={mack_pic} className={styles.picture} />
      </section>
    )
  }
}
