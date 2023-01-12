import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios'
import { HttpClient, HttpRequest, HttpResponse } from '../../interfaces/http-client'
import { LocalStorageHelper } from '../helpers/LocalStorageHelper'
import navigationPath from '../path/navigationPath'


export class AxiosHttpAdapter implements HttpClient {
  async request(httpRequest: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    let headers: AxiosRequestHeaders = httpRequest.headers
    const { url, method, body } = httpRequest

    const authorizationToken = LocalStorageHelper.GetAccessToken()

    if (authorizationToken) {
      headers = {
        authorization: `Bearer ${authorizationToken}`,
        ...httpRequest.headers
      }
    }

    // TODO this try/catch might hide important error issues, allow the app to capture the exception outside this class
    try {
      axiosResponse = await axios.request({
        url,
        method,
        data: body,
        headers
      })
    } catch (error: any) {

      if (error.response && error.response.status != 0) {

        if (error.response.status === 403) {
          window.location = navigationPath.error.forbidden.resolve() as unknown as Location
        }

        // status 0 happens when the other server is offline
        return {
          statusCode: error.response.status,
          error: error.response.data.message
        }
      } else {
        console.log('Axios Catch 500')
        return {
          statusCode: 500,
          body: error.message
        }
      }
    }

    const { status, data } = axiosResponse

    if (status >= 400) {
      console.log('Axios >= 400')
      return {
        statusCode: status,
        error: data.message
      }
    }

    return {
      statusCode: status,
      body: data
    }
  }
}
