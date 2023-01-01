import { FETCH_POSTS, NEW_POSTS } from './types'


const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    console.log('reducer', action.type, state)
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                item: action.payload
            }
            break;
        case NEW_POSTS:
            break;
        default:
            console.log('state', state)
            return state;
    }
}