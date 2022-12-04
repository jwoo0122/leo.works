const transformer = ({ data }) => {
  return data.allMdx.edges.map(({ node }) => node);
};

module.exports = {
  siteMetadata: {
    title: `by Leo Jeong`,
    author: `Leo Jeong`,
    description: `공부하며 개발하는 정진우의 블로그입니다.`,
    siteUrl: "https://leo.works",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              disableBgImage: true,
              quality: 100,
              withWebp: true,
              loading: "lazy",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://leo.works",
        sitemap: "https://leo.works/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
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
            allMdx {
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
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassRuleTest: /.^/,
        sassRuleModulesTest: /\.s(a|c)ss$/,
        useResolveUrlLoader: true,
      },
    },
  ],
};
