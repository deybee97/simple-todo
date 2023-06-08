
export const UPDATE_TODO ='UPDATE_TODO'

export const UPDATE_USER =  'UPDATE_USER'


export const todoAction = (update) => ({
    type: UPDATE_TODO,
    payload: update
})

export const userAction = (update) => ({
    type: UPDATE_USER,
    payload: update
})






