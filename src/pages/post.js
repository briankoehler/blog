import React from 'react'
import styled from 'styled-components'
import Post from '../components/post'
import Navbar from '../components/navbar'


const Container = styled.div`
    width: 50%;
    margin: auto;
`


const PostPage = ({ data }) => {
	const { markdownRemark } = data
	const { frontmatter, html } = markdownRemark
	return (
		<div>
			<Navbar />
			<Container>
				<Post title={frontmatter.title} date={frontmatter.date} content={html} />
			</Container>
		</div>
	)
}

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(frontmatter: {slug: {eq: $slug}}) {
			html
			frontmatter {
				date
				slug
				title
			}
		}
	}
`


export default PostPage
