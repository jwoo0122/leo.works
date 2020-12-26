// Ext
import { graphql } from "gatsby"

// Int
import SEO from "Components/Seo"
import Search from "Components/Search"
import IndexTitle from 'Components/IndexTitle'
import withTwoPassRendering from "Hocs/withTwoPassRendering"

function IndexPage() {
  return (
    <>
      <SEO />
      <IndexTitle />
      <Search />
    </>
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

export default withTwoPassRendering(IndexPage)
