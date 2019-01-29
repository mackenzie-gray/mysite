import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import styles from './experience.module.css'

export default () => (
  <StaticQuery
    query={experienceQuery}
    render={data => {
      let images = getImagePaths(data.allFile)
      let { experiences } = data.experienceYaml
      return (
        <section id="experience">
          <h2>Experience</h2>
          {experiences.map(experience => {
            let { roles } = experience
            return (
              <div className={styles.experience}>
                <h3>{experience.company}</h3>
                <img src={images[experience.logo]} className={styles.logo} />
                {roles.map(role => (
                  <>
                    <h4>{role.title}</h4>
                    <p>{role.dates}</p>
                    <ul>
                      {role.summary.map(test => (
                        <li>{test}</li>
                      ))}
                    </ul>
                  </>
                ))}
              </div>
            )
          })}
        </section>
      )
    }}
  />
)

const experienceQuery = graphql`
  query ExperienceQuery {
    experienceYaml {
      experiences {
        company
        logo
        roles {
          title
          dates
          summary
        }
      }
    }
    allFile(filter: { extension: { eq: "png" } }) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`
const getImagePaths = data => {
  let imagePaths = {}
  let { edges } = data
  edges.forEach(element => {
    let { node } = element
    imagePaths[node.name] = node.publicURL
  })
  return imagePaths
}
