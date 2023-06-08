import {createStore} from 'redux'

import { todoAction, userAction} from './actions'

import reducer from './reducer'

const store = createStore(reducer)

store.dispatch(userAction({username: 'Adebola', previlege: 'Admin'}))
store.dispatch(todoAction('do this'))
store.dispatch(todoAction('do that'))

export default store