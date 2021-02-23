import * as React from "react"
import Post from '../components/post'
import { graphql } from 'gatsby'

// markup
const IndexPage = ({ data }) => {
    const posts = data.posts.edges.filter(({ node }) => node)
    return (
        <div>
            <div>
                {posts.map(({ node }, i) => {
                    return (
                        <Post key={i} title={node.frontmatter.title} date={node.frontmatter.date} content={node.html} /> 
                    )
                })}
            </div>
        </div>
    )
}

export const query = graphql`
    query {
        posts: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/posts/" } }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        date
                    }
                    html
                }
            }
        }
    }
`

export default IndexPage
