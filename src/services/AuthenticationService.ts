import { LocalStorageHelper } from '../common/helpers/LocalStorageHelper'
import httpClient from '../common/http/httpFactory'
import apiPath from '../common/path/apiPath'
import { HttpMethod, HttpResponse } from '../interfaces/http-client'

export class AuthenticationService {
 
  async login(email: string, password: string): Promise<HttpResponse> {
    const response = await httpClient.request({
      url: apiPath.authentication.login,
      method: HttpMethod.post,
      body: { email, password }
    })
    if (!response.error) {
      LocalStorageHelper.SetAccessToken(response.body.accessToken)
      LocalStorageHelper.SetUserData({ name: response.body.user.name, id: response.body.user.id })
    } else {
      LocalStorageHelper.removeAll()
    }
    return response
  }

  logout(): string {
    LocalStorageHelper.removeAll()
    return 'loged out'
  }

  validateCredentials(): boolean {
    const token = LocalStorageHelper.GetAccessToken()
    if (!token) {
      return false
    }
    return true
  }
}

export default new AuthenticationService()
