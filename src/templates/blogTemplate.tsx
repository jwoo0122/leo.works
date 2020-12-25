// Ext
import { createElement } from 'react'
import { graphql } from 'gatsby'
import RehypeReact from 'rehype-react'

// Int
import { profileUrl } from 'Constants/Gravatar'
import Layout from 'Components/Layout'
import Utterances from 'Components/Utterances'
import SEO from 'Components/Seo'
import PostHead from 'Components/PostHead'
import TransitionLink from 'Components/TransitionLink'
import withTwoPassRendering from 'Hocs/withTwoPassRendering'
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
        featuredImage: any
      }
      htmlAst: any
      fields: {
        readingTime: {
          minutes: number
        }
      }
    }
  }
}

const rehype = new RehypeReact({
    createElement,
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


function blogTemplate({
  data,
}: TemplateProps) {
  const { markdownRemark } = data
  const {
    frontmatter: {
      title,
      date,
      author,
      description,
      featuredImage: {
        childImageSharp: {
          fluid: {
            src,
          },
        },
      },
    },
    htmlAst,
    fields: {
      readingTime: {
        minutes,
      },
    },
  } = markdownRemark

  return (
    <Layout>
      <SEO
        title={title}
        author={author}
        date={date}
        description={description}
        image={src}
      />
      <PostHead postTitle={title} />
      <div className={styles.postContainer}>
        <div className={styles.postMeta}>
          <TransitionLink
            direction="up"
            to="/"
            style={{ textDecoration: 'none', display: 'block' }}
          >
            <div className={styles.postAuthorWrapper}>
              <span className={styles.backIcon}>{'〈'}</span>
              <img
                className={styles.profileImg}
                src={profileUrl}
              />
            </div>
          </TransitionLink>
          <div className={styles.postTitle}>
            {title}
          </div>
          <div className={styles.postDate}>
            {`${date} · ${Math.ceil(minutes)}min`}
          </div>
        </div>
        <div className={styles.divider}/>
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 99) {
              src
            }
          }
        }
      }
      fields {
        readingTime {
          minutes
        }
      }
    }
  }
`

export default withTwoPassRendering(blogTemplate)
