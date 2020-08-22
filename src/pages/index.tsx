// Ext
import React from "react"
import { graphql } from "gatsby"

// Int
import Layout from "Components/Layout"
import SEO from "Components/Seo"
import Search from "Components/Search"
import IndexTitle from 'Components/IndexTitle'

export default function IndexPage() {
  return (
    <Layout>
      <SEO />
      <IndexTitle />
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
