import { UserDataLocalStorage } from 'src/pages/authentication/interfaces/Authentication'

const tokenKey = 'persiniAuthToken'
const userDataKey = 'persiniUserData'

export class LocalStorageHelper {
  public static GetAccessToken(): string | null {
    return localStorage.getItem(tokenKey)
  }

  public static GetUserData(): UserDataLocalStorage | null {
    const userData = localStorage.getItem(userDataKey)
    if (userData) {     
      return JSON.parse(userData)
    }
    return null
  }
  
  public static SetAccessToken(value: string): void {
    localStorage.setItem(tokenKey, value)
  }

  public static SetUserData(user: UserDataLocalStorage): void {
    localStorage.setItem(userDataKey, JSON.stringify(user))
  }

  public static removeAll(): void {
    localStorage.removeItem(tokenKey)
    localStorage.removeItem(userDataKey)
  }
}
