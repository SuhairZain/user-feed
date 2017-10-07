import { createSelector } from 'reselect'

const getData = state => state.popularphotos.data

export const getImageUris = createSelector([getData], data => {
  return data.map(post => ({
    uri: post.thumbnail
  }))
})
