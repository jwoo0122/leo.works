const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(
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
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}

const isProd = process.env.NODE_ENV === 'production';
const componentLibPath = path.resolve(__dirname, './component-library');

exports.onCreateWebpackConfig = (
  { actions, loaders },
  { cssLoaderOptions = {}, postCssPlugins, ...sassOptions },
) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.s(a|c)ss$/,
          use: [
            loaders.miniCssExtract(),
            loaders.css({ ...cssLoaderOptions, modules: true }),
            loaders.postcss({ plugins: postCssPlugins }),
            {
              loader: require.resolve('sass-loader'),
              options: {
                sourceMap: !isProd,
                ...sassOptions,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        components: componentLibPath,
      },
      extensions: ['.js', '.jsx'],
    },
  });
};