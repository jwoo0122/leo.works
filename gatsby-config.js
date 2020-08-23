const transformer = ({ data }) => {
  return data.allMarkdownRemark.edges.map(({ node }) => node)
}

module.exports = {
  siteMetadata: {
    title: `by Leo Jeong`,
    author: `Leo Jeong`,
    description: `공부하며 개발하는 정진우의 블로그입니다.`,
    siteUrl: 'https://leo.works',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `markdown-pages`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://leo.works',
        sitemap: 'https://leo.works/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
              disableBgImage: true,
              withWebp: true,
              loading: 'lazy',
            },
          },
          {
            resolve: "gatsby-remark-emoji",
            options: {
              emojiConversion: "shortnameToUnicode",
              ascii: true,
            },
          },
          `gatsby-remark-sub-sup`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Leo.works`,
        short_name: `Leo`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/static/images/cat.jpeg`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID || "",
        apiKey: process.env.ALGOLIA_ADMIN_API_KEY || "",
        indexName: process.env.ALGOLIA_INDEX_NAME || "",
        queries: [
          {
            query: `{
            allMarkdownRemark {
              edges {
                node {
                  objectID: id
                  frontmatter {
                    path
                    title
                    date
                    description
                  }
                }
              }
            }
          }`,
            transformer,
          },
        ],
      },
    },
    `gatsby-plugin-typescript`,
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Inter`,
    //         variants: [`100`, `400`, `700`],
    //       },
    //       {
    //         family: `Montserrat`,
    //         variants: [`400`, `700`, `900`],
    //       },
    //       {
    //         family: `Noto Sans KR`,
    //         subsets: [`korean`],
    //         variants: [`100`, `400`, `700`],
    //       },
    //     ],
    //     stats: false,
    //   },
    // },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
