import { UserDataLocalStorage } from 'src/pages/authentication/interfaces/Authentication'
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

  getDetails(): UserDataLocalStorage | null {
    const isUserLogedIn = this.validateCredentials()
    if(!isUserLogedIn){
      return null
    }
    return LocalStorageHelper.GetUserData()
  }
}

export default new AuthenticationService()
