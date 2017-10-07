import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools'

import user from '../components/UserInfo/reducer'

let store

/* Would help us set up the store with initial values if the future if needed */
export const setupStore = () => {
  if (!store) {
    const rootReducer = combineReducers({
      user
    })
    store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))
  }
  return store
}
