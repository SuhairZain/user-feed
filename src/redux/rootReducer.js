import { combineReducers } from 'redux'

import feeds from '../components/feeds/reducer'
import user from '../components/UserInfo/reducer'

export default combineReducers({
  feeds,
  user
})
