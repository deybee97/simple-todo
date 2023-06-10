import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'

import { todoAction, userAction} from './actions'

import reducer from './reducer'

const thunk = store => next => action => {
    if(typeof(action) === 'function'){
        action(store.dispatch)
    }else{
        next(action)
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

store.dispatch(userAction({username: 'Adebola', previlege: 'Admin'}))
store.dispatch(todoAction('do this'))
store.dispatch(todoAction('do that'))

export default store