// Ext
import React from 'react'
import { graphql, Link } from 'gatsby'
import RehypeReact from 'rehype-react'

// Int
import { profileUrl } from 'Constants/Gravatar'
import Layout from 'Components/Layout'
import Utterances from 'Components/Utterances'
import SEO from 'Components/Seo'
import PostHead from 'Components/PostHead'
import styles from './blogTemplate.module.scss'
import {
  Heading,
  Heading2,
  Bold,
  Italic,
  Paragraph,
  Quote,
  Horizon,
  Anchor,
  SuperScript,
  CodeBlock,
  CodePiece,
  OrderedList,
  UnorderedList,
} from './content'

interface TemplateProps {
  data: {
    markdownRemark: {
      frontmatter: {
        date: string
        title: string
        author: string
        description: string
      }
      htmlAst: any
    }
  }
}

const rehype = new RehypeReact({
    createElement: React.createElement,
    components: {
      h1: Heading,
      h2: Heading2,
      strong: Bold,
      em: Italic,
      blockquote: Quote,
      hr: Horizon,
      sup: SuperScript,
      a: Anchor,
      p: Paragraph,
      pre: CodeBlock,
      code: CodePiece,
      ol: OrderedList,
      ul: UnorderedList,
    }
  }).Compiler


export default function blogTemplate({
  data,
}: TemplateProps) {
  const { markdownRemark } = data
  const { frontmatter: { title, date, author, description }, htmlAst } = markdownRemark
  console.log(title, date, author, description)

  return (
    <Layout>
      <SEO
        title={title}
        author={author}
        date={date}
        description={description}
      />
      <PostHead postTitle={title} />
      <div className={styles.postContainer}>
        <div className={styles.postMeta}>
          <Link to="/" style={{ textDecoration: 'none', display: 'block' }}>
            <img
              className={styles.profileImg}
              src={profileUrl}
            />
            <div className={styles.postAuthorWrapper}>
              <span className={styles.postAuthor}>{author}</span>
            </div>
          </Link>
          <div className={styles.postTitle}>
            {title}
          </div>
          <div className={styles.postDate}>
            {date}
          </div>
        </div>
        <div className={styles.content}>
          { rehype(htmlAst) }
        </div>
      </div>
      <Utterances repo="jwoo0122/leo.works"/>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        path
        title
        author
        description
      }
    }
  }
`
