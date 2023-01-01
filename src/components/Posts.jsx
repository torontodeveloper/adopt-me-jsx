import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/actions'
const Posts = (props) => {
    const [responseData, setResponseData] = useState()
    function buttonHandler() {
        fetchPosts()
    }
    return (
        <div>
            Posts
            <button onClick={buttonHandler}>GET POSTS!!</button>
            {
                props.posts?.map(data => (
                    <div key={data.id}>
                        <li>{data.userId}</li>
                        <li>{data.title}</li>
                        <li>{data.body}</li>
                    </div>
                ))
            }
        </div>
    )
}
const mapStateToProps = (state) => (
    {
        posts: state.posts.items
    }
)
export default connect(mapStateToProps, { fetchPosts })(Posts)