const path = require("path")

// create individual blog post pages
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/siteposts.js")
  const response = await graphql(`
    query {
      allContentfulSitePost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  response.data.allContentfulSitePost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}