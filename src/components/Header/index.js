import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.triangleTop} />
      <div className={styles.logo}>
        <span>MG</span>
      </div>
      <p className={styles.tagline}>Web and app developer from Toronto, ON.</p>
      <ul className={styles.navList}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Header
