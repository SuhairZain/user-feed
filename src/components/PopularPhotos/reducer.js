import { FETCHING_DATA } from '../../constants'

import { repeat } from '../../utils/arrays'

const initialState = {
  loaded: false,
  error: undefined,
  data: repeat({ uri: FETCHING_DATA }, 6)
}

const FETCH_POPULAR_FEED_SUCCESS = 'FETCH_POPULAR_FEED_SUCCESS'
const fetchPopularFeedSuccess = images => ({
  type: FETCH_POPULAR_FEED_SUCCESS,
  images
})

export const getPopularFeed = () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(fetchPopularFeedSuccess(repeat({ uri: 'https://i.ytimg.com/vi/sr_vL2anfXA/maxresdefault.jpg' }, 9)))
    }, 3000)
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
  case FETCH_POPULAR_FEED_SUCCESS:
    return { ...state, data: action.images }
  default:
    return state
  }
}
