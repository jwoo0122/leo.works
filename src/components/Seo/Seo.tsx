// Ext
import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SITE_NAME = "by Leo Jeong"

interface SeoProps {
  title: string
  author?: string
  description?: string
  lang?: string
  meta?: Array<any>
}

export default function Seo({
  title,
  author = 'Leo Jeong',
  description = '',
  lang = 'ko',
  meta = [],
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
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />

      <style type="text/css">{`
        html {
          height: 100%;
          transition: all 200ms ease-in-out;
        }
        @media (prefers-color-scheme: dark) {
          html {
            background-color: rgb(20, 20, 20);
            transition: all 200ms ease-in-out;
          }
        }
        body {
          margin: 0;
          height: 100%;
        }
      `}
      </style>
    </Helmet>
  )
}
