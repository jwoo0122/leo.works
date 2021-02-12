const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.tsx`)
  const result = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        Constants: path.resolve(__dirname, "./src/constants"),
        Components: path.resolve(__dirname, "./src/components"),
        Static: path.resolve(__dirname, "./src/static"),
        Styles: path.resolve(__dirname, "./src/styles"),
        Templates: path.resolve(__dirname, "./src/templates"),
        Hooks: path.resolve(__dirname, "./src/hooks"),
        Hocs: path.resolve(__dirname, "./src/hocs"),
      },
    },
  })
}
