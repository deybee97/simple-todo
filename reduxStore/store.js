import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'

import { todoAction, userAction} from './actions'

import reducer from './reducer'


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, reducer)
 


const thunk = store => next => action => {
    if(typeof(action) === 'function'){
        action(store.dispatch)
    }else{
        next(action)
    }
}

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export let persistor = persistStore(store)


// store.dispatch(userAction({username: 'Adebola', previlege: 'Admin'}))
// store.dispatch(todoAction('do this'))
// store.dispatch(todoAction('do that'))

// export default store