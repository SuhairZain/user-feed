import { FETCHING_DATA } from '../../utils/constants'

import { user } from '../../api'

const initialState = {
  loaded: false,
  error: undefined,
  data: {
    bio: FETCHING_DATA,
    name: FETCHING_DATA,
    profileThumbnail: FETCHING_DATA
  }
}

const FETCH_USER_DETAILS_SUCCESS = 'FETCH_USER_DETAILS_SUCCESS'
const fetchUserDetailsSuccess = user => ({
  type: FETCH_USER_DETAILS_SUCCESS,
  user
})

export const getUserDetails = () => {
  return async (dispatch, getState) => {
    const result = await user()
    dispatch(fetchUserDetailsSuccess(result.data))
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
  case FETCH_USER_DETAILS_SUCCESS:
    return { ...state, data: action.user }
  default:
    return state
  }
}
