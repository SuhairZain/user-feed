import { FETCHING_DATA } from '../../utils/constants'

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
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(
        fetchUserDetailsSuccess({
          bio:
            'This is a long bio which is supposed to be split into multiple lines and also to be made sure that it doesnt go above threee lines',
          name: 'Suhair Zain',
          profileThumbnail: 'https://i.ytimg.com/vi/sr_vL2anfXA/maxresdefault.jpg'
        })
      )
    }, 2000)
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
