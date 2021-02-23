import React from 'react'

const Post = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
    )
}

export default Post