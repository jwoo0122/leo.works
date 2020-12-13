// Ext
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SITE_NAME = "by Leo Jeong"

interface SeoProps {
  title?: string
  author?: string
  date?: string
  description?: string
  lang?: string
  image?: string
}

export default function Seo({
  title,
  author = 'Leo Jeong',
  date = '',
  description = '',
  lang = 'ko',
  image,
}: SeoProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      defaultTitle={SITE_NAME}
      titleTemplate={`%s ${SITE_NAME}`}
    >
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content={author} />
      <meta name="date" content={date} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
