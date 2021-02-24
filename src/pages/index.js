import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Post from '../components/post'
import Navbar from '../components/navbar'


const Container = styled.div`
    width: 50%;
    margin: auto;
`

// markup
const IndexPage = ({ data }) => {
    const posts = data.posts.edges.filter(({ node }) => node)
    return (
        <div>
            <Navbar />
            <Container>
                <div>
                    {posts.map(({ node }, i) => {
                        return (
                            <Post key={i} title={node.frontmatter.title} date={node.frontmatter.date} content={node.html} /> 
                        )
                    })}
                </div>
            </Container>
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
