import { createSelector } from 'reselect'

const getData = state => state.userfeed.data

export const getImageUris = createSelector([getData], data => {
  return data.map(post => ({
    uri: post.thumbnail
  }))
})
