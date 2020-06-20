// Ext
import React from "react"
import { graphql } from "gatsby"

// Int
import Layout from "Components/Layout"
import SEO from "Components/Seo"
import Search from "Components/Search"
import styles from "./index.module.scss"

export default function IndexPage() {
  return (
    <Layout>
      <SEO />
      <div className={styles.titleContainer}>
        <div className={styles.titleBy}>
          <div className={styles.string}>
            BY LEO JEONG
          </div>
        </div>
      </div>
      <Search />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
