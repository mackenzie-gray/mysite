import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import styles from './base.module.css'
import './layout.css'

import Header from '../Header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Homepage of Mack Gray, web + app developer, Toronto.',
            },
            {
              name: 'keywords',
              content:
                'Mack Gray, mack, gray, web, developer, engineer, ios, app, site, frontend',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className={styles.container}>
          <Header />
          <div className={styles.content}>
            <div className={styles.contentContainer}>{children}</div>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
