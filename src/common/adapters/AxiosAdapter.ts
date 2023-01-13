import Axios, { AxiosRequestConfig } from 'axios'

import { LocalStorageHelper } from '../helpers/LocalStorageHelper'

export type ErrorResponse = {
  status: number
  message: string
}

function authRequestInterceptor(config: AxiosRequestConfig) {
  const authorizationToken = LocalStorageHelper.GetAccessToken()

  config.headers = { Accept: 'application/json' }
  if (authorizationToken) {
    config.headers.authorization = authorizationToken
  }
  return config
}

export const axiosClient = Axios.create()

axiosClient.interceptors.request.use(authRequestInterceptor)
axiosClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  (e) => {
    let error: ErrorResponse

    if (e?.response?.data) {
      error = {
        status: e.response.data.statusCode,
        message: e.response.data.message
      }
    } else {
      error = {
        status: e.status || 500,
        message: e.message
      }
    }
    
    //TODO implement error - Log storage here - notification system to warn us about certain error
    if (process.env.NODE_ENV !== 'production') {
      console.log(error)
    }

    return Promise.reject(error)
  }
)
