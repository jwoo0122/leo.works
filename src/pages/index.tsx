// Ext
import React from "react"
import { graphql } from "gatsby"

// Int
import Layout from 'Components/Layout'
import PostLink from 'Components/PostLink'
import SEO from 'Components/seo'
import Search from 'Components/Search'
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
        <Search />
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
