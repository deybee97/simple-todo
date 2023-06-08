import { combineReducers} from 'redux'

import { UPDATE_TODO, UPDATE_USER } from './actions'


const todoReducer = (state = [], action) => {

    switch(action.type){
    
        case UPDATE_TODO: return [ ...state, action.payload]
        default: return state
       
    }

}

const userReducer = (state={}, action) => {

    switch(action.type){
        case UPDATE_USER: return { ...state, ...action.payload}
        default: return state
    }
}


export default combineReducers({
    todos: todoReducer,
    user: userReducer
})

