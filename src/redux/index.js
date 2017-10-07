import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools'

import rootReducer from './rootReducer'

let store

/* Would help us set up the store with initial values if the future if needed */
export const setupStore = () => {
  if (!store) {
    store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))
  }
  return store
}
