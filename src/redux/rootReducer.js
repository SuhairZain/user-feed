import { combineReducers } from 'redux'

import popularphotos from '../components/PopularPhotos/reducer'
import user from '../components/UserInfo/reducer'
import userfeed from '../components/UserFeed/reducer'

export default combineReducers({
  popularphotos,
  user,
  userfeed
})
