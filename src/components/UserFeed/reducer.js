import { FETCHING_DATA } from '../../constants'

import { repeat } from '../../utils/arrays'

const initialState = {
  loaded: false,
  error: undefined,
  sliderIndex: 0,
  data: repeat({ uri: FETCHING_DATA }, 6)
}

const FETCH_USER_FEED_SUCCESS = 'FETCH_USER_FEED_SUCCESS'
const fetchUserFeedSuccess = images => ({
  type: FETCH_USER_FEED_SUCCESS,
  images
})

const FEED_SLIDER_INDEX_CHANGED = 'FEED_SLIDER_INDEX_CHANGED'
export const feedSliderIndexChanged = index => ({
  type: FEED_SLIDER_INDEX_CHANGED,
  index
})

export const getUserFeed = () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(fetchUserFeedSuccess(repeat({ uri: 'https://i.ytimg.com/vi/sr_vL2anfXA/maxresdefault.jpg' }, 4)))
    }, 3000)
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
  case FETCH_USER_FEED_SUCCESS:
    return { ...state, data: action.images }
  case FEED_SLIDER_INDEX_CHANGED:
    return { ...state, sliderIndex: action.index }
  default:
    return state
  }
}
