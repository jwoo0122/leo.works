import React from 'react'
import { graphql, Link } from 'gatsby'
import RehypeReact from 'rehype-react'

import Layout from '../components/layout'
import styles from './blogTemplate.scss'
import {
  Quote,
  Horizon,
  Anchor,
} from './content'

interface TemplateProps {
  data: any
}

const rehype = new RehypeReact({
    createElement: React.createElement,
    components: {
      blockquote: Quote,
      hr: Horizon,
      a: Anchor,
    }
  }).Compiler

export default function Template({
  data,
}: TemplateProps) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div className={styles.postContainer}>
        <div className={styles.postMeta}>
          <div className={styles.postTitle}>
            {frontmatter.title}
          </div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className={styles.postAuthorWrapper}>
              <span>by </span>
              <span className={styles.postAuthor}>{frontmatter.author} </span>
            </div>
          </Link>
          <div className={styles.postDate}>
            {frontmatter.date}
          </div>
        </div>
        <div className={styles.content}>
          {rehype(markdownRemark.htmlAst)}
          {/* <div
            dangerouslySetInnerHTML={{ __html: html }}
          /> */}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMM DD, YYYY, H : S")
        path
        title
        author
      }
    }
  }
`