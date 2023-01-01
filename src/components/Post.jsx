import React from "react"
const Post = ({ id, title, body }) => {
    return (
        <div>
            <p>{id}</p>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}
export default Post