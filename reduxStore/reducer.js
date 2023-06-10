import { combineReducers} from 'redux'

import { UPDATE_TODO, UPDATE_USER, LOG_IN_FULFILLED, LOG_IN_REJECTED, LOG_IN_SENT} from './actions'


const todoReducer = (state = [], action) => {

    switch(action.type){
    
        case UPDATE_TODO: return [ ...state, action.payload]
        default: return state
       
    }

}

const userReducer = (state={}, action) => {

    switch(action.type){
        case UPDATE_USER: return { ...state, ...action.payload}
        case LOG_IN_FULFILLED: return {...state, ...action.payload}
        default: return state
    }
}


export default combineReducers({
    todos: todoReducer,
    user: userReducer
})

