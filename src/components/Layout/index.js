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
            description
            keywords
          }
        }
      }
    `}
    render={data => {
      let meta = data.site.siteMetadata
      return (
        <>
          <Helmet
            title={meta.title}
            meta={[
              {
                name: 'description',
                content: meta.description,
              },
              {
                name: 'keywords',
                content: meta.keywords,
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <div className={styles.container}>
            <Header />
            <div className={styles.content}>
              <div className={styles.headerImage} />
              <div className={styles.contentContainer}>{children}</div>
            </div>
          </div>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
