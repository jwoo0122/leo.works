module.exports = {
  siteMetadata: {
    title: `Leo.works`,
    description: `공부하며 개발하는 정진우의 블로그입니다.`,
    author: `Leo Jeong`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
          {
            resolve: 'gatsby-remark-emoji',
            options: {
              emojiConversion: 'shortnameToUnicode',
              ascii: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              loading: 'eager',
              withWebp: true,
              backgroundColor: 'transparent',
            },
          },
          `gatsby-remark-sub-sup`,
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/star.png`,
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Noto Sans KR`,
            subsets: [`korean`],
            variants: [`100`, `400`, `700`]
          },
          {
            family: `Rubik Mono One`,
          },
          {
            family: `Mansalva`,
          },
          {
            family: `East Sea Dokdo`,
            subsets: [`korean`],
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
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
