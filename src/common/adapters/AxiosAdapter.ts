import Axios, { AxiosRequestConfig } from 'axios'
import { HttpStatusCode } from 'src/interfaces/http-client'

import { LocalStorageHelper } from '../helpers/LocalStorageHelper'
import navigationPath from '../path/navigationPath'

export type ErrorResponse = {
  status: number
  message: string
}

function authRequestInterceptor(config: AxiosRequestConfig) {
  const authorizationToken = LocalStorageHelper.GetAccessToken()

  config.headers = { Accept: 'application/json' }
  if (authorizationToken) {
    config.headers.authorization = `Bearer ${authorizationToken}`
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

    //TODO (FD) Remove hardcoded condition, move it to a interceptor
    if (error.message === 'user-unverified') {
      window.location = navigationPath.settings.emailVerification.resolve() as unknown as Location
      return
    }

    if (error.status === HttpStatusCode.forbidden) {
      window.location = navigationPath.error.forbidden.resolve() as unknown as Location
    }

    //TODO implement error - Log storage here - notification system to warn us about certain error
    //TODO (FD) Remove hardcoded condition, move it to a interceptor
    if (process.env.NODE_ENV !== 'production') {
      console.log(error)
    }

    return Promise.reject(error)
  }
)
