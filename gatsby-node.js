const path = require(`path`);
const readingTime = require("reading-time");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`./src/templates/blogTemplate.tsx`);
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            path
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMdx.nodes.forEach((node) => {
    createPage({
      path: node.frontmatter.path,
      component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // component: node.internal.contentFilePath,
      context: {
        id: node.id,
      },
    });
  });
};

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
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `readingTime`,
      value: readingTime(node.body),
    });
  }
};
