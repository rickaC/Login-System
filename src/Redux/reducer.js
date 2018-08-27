import _posts from '../Data/posts'
import {combineReducers} from 'redux'


function posts(state = _posts, action) {
    switch (action.type) {
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADD_POST': return [...state, action.post]
        case 'LOAD_POSTS': return action.posts
        default: return state

    }

    
}

const rootReducer = combineReducers({posts})

export default rootReducer