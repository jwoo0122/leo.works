import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

interface TemplateProps {
  data: any
}

export default function Template({
  data,
}: TemplateProps) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div>
        <div>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`