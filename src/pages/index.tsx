import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import PostLink from '../components/PostLink'
import SEO from "../components/seo"
import styles from './index.module.scss'

export default function IndexPage({
  data: {
    allMarkdownRemark: { edges },
  },
}) {

  return (
    <Layout>
      <SEO title="leo.works" />
      <div className={styles.titleContainer}>
        <span className={styles.titleBy}>by<br /></span>
        Leo Jeong
      </div>
      <div>
        {
          edges
            .filter(edge => true)
            .map(edge => 
              <PostLink
                key={edge.node.id}
                post={edge.node}
              />
            )
        }
      </div>
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