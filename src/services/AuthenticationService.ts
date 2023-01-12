import { LocalStorageHelper } from '../common/helpers/LocalStorageHelper'

export class AuthenticationService {

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
