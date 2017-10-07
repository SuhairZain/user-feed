import { FETCHING_DATA } from '../../utils/constants'

import { repeat } from '../../utils/arrays'
import { userFeed, popularPhotos } from '../../api'

const initialState = {
  user: {
    loaded: false,
    error: undefined,
    data: repeat({ thumbnail: FETCHING_DATA }, 6)
  },
  popular: {
    loaded: false,
    error: undefined,
    data: repeat({ thumbnail: FETCHING_DATA }, 6)
  }
}

const FETCH_USER_FEED_SUCCESS = 'FETCH_USER_FEED_SUCCESS'
const fetchUserFeedSuccess = images => ({
  type: FETCH_USER_FEED_SUCCESS,
  images
})

export const fetchUserFeed = () => {
  return async (dispatch, getState) => {
    const result = await userFeed()
    dispatch(fetchUserFeedSuccess(result.data.result.posts))
  }
}

const FETCH_POPULAR_FEED_SUCCESS = 'FETCH_POPULAR_FEED_SUCCESS'
const fetchPopularFeedSuccess = images => ({
  type: FETCH_POPULAR_FEED_SUCCESS,
  images
})

export const fetchPopularFeed = () => {
  return async (dispatch, getState) => {
    const result = await popularPhotos()
    dispatch(fetchPopularFeedSuccess(result.data.result.posts))
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
  case FETCH_USER_FEED_SUCCESS:
    return { ...state, user: { data: action.images } }
  case FETCH_POPULAR_FEED_SUCCESS:
    return { ...state, popular: { data: action.images } }
  default:
    return state
  }
}
