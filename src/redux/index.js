import { combineReducers, createStore } from 'redux'

import user from '../components/UserInfo/reducer'

let store

/* Would help us set up the store with initial values if the future if needed */
export const setupStore = () => {
  if (!store) {
    store = createStore(
      combineReducers({
        user
      })
    )
  }
  return store
}
