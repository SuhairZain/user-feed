import axios from 'axios'

const API_URL = 'http://api.pumpup.com'
const STAGING_API_URL = 'http://staging.api.pumpup.com'

const TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g' // eslint-disable-line max-len

axios.defaults.data = {
  _version: '5.0.5',
  _SessionToken: TOKEN
}

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

const USER_BODY = { _method: 'GET' }
export const user = () => {
  return axios.post(`${API_URL}/1/classes/User/318381`, USER_BODY)
}

const USER_FEED_BODY = { isThumbnailsOnly: true, limit: 5, userId: 2707798, _method: 'POST' }
export const userFeed = () => {
  return axios.post(`${API_URL}/1/functions/feed/profile/load-batch`, USER_FEED_BODY)
}

const POPULAR_PHOTOS_BODY = { isThumbnailsOnly: true, limit: 18, _method: 'POST' }
export const popularPhotos = () => {
  return axios.post(`${API_URL}/1/functions/feed/popular/load-batch`, POPULAR_PHOTOS_BODY)
}
