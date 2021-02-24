
exports.createPages = async ({actions, graphql, reporter }) => {
	const { createPage } = actions

	const blogPostTemplate = require.resolve('./src/pages/post.js')

	const result = await graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							slug
						}
					}
				}
			}
		}
	`)

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.slug,
			component: blogPostTemplate,
			context: {
				title: node.frontmatter.title,
				date: node.frontmatter.date,
				content: node.html,
				slug: node.frontmatter.slug
			}
		})
	})
}