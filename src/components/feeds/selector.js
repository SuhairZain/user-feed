import { createSelector } from 'reselect'

const userFeedsSelector = state => state.feeds.user.data
const popularFeedsSelector = state => state.feeds.popular.data

const getImageUris = selector =>
  createSelector([selector], data => {
    return data.map(post => ({
      uri: post.thumbnail
    }))
  })

export const getUserFeed = getImageUris(userFeedsSelector)

export const getPopularFeed = getImageUris(popularFeedsSelector)
