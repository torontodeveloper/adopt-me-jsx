import { FETCH_POSTS, NEW_POSTS } from './types'

export function fetchPosts() {
    console.log('dispatch action')
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts').then(resp => resp.json()).then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }))
    }
}
