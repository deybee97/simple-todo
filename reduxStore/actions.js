import login from "../api/login"

export const UPDATE_TODO ='UPDATE_TODO'

export const UPDATE_USER =  'UPDATE_USER'

export const LOG_IN_SENT = 'LOG_IN_SENT'
export const LOG_IN_FULFILLED = 'LOG_IN_FULFILLED'
export const LOG_IN_REJECTED = 'LOG_IN_REJECTED'


export const todoAction = (update) => ({
    type: UPDATE_TODO,
    payload: update
})

export const userAction = (update) => ({
    type: UPDATE_USER,
    payload: update
})

export const loginUser = (email, password) => dispatch  => {

    dispatch({type: LOG_IN_SENT})

    login(email, password).then((token)=> dispatch({type:LOG_IN_FULFILLED, payload:{token}})).catch((e)=> dispatch({type:LOG_IN_REJECTED}))
    
} 






