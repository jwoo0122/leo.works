/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  description?: string
  lang?: string
  meta?: any
  title: string
}

export default function SEO({
  description = '',
  lang = 'en',
  meta = [],
  title,
}: SEOProps) {
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
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
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
