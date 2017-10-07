import { FETCHING_DATA } from '../../utils/constants'

import { repeat } from '../../utils/arrays'
import { popularPhotos } from '../../api'

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
  return async (dispatch, getState) => {
    const result = await popularPhotos()
    dispatch(fetchPopularFeedSuccess(result.data.result.posts))
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
