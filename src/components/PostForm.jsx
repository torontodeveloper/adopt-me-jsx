import React from 'react'
import { useState } from 'react'

const PostForm = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    function changeHandler(event) {
        console.log('event', event.target.name)
        if (event.target.name == 'title') {
            setTitle(event.target.value)
        }
        if (event.target.name == 'body') {
            setBody(event.target.value)
        }
    }
    function submitHandler(event) {
        event.preventDefault()
        const post = {
            title: title,
            body: body
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(resp => resp.json()).then(data => console.log('response', data))
    }
    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input type='text' name='title' value={title} onChange={changeHandler} />
                    <br />
                    <br />
                    <label>Body</label>
                    <textarea type='text' name='body' value={body} onChange={changeHandler} />
                    <br />
                    <br />
                    <button type='submit'>Click Me!!</button>
                </div>
            </form>
        </div>
    )
}
export default PostForm