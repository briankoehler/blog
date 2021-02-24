import React from 'react'

const Post = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.date}</h3>
            <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
    )
}

export default Post