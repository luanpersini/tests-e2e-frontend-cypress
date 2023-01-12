const tokenKey = 'persiniAuthToken'
const userDataKey = 'persiniUserData'

type UserLocalStorage = {
  id: string,
  name: string
}

export class LocalStorageHelper {
  public static GetAccessToken(): string | null {
    return localStorage.getItem(tokenKey)
  }

  public static GetUserData(): UserLocalStorage | null {
    const userData = localStorage.getItem(userDataKey)
    if (userData) {     
      return JSON.parse(userData)
    }
    return null
  }
  
  public static SetAccessToken(value: string): void {
    localStorage.setItem(tokenKey, value)
  }

  public static SetUserData(user: UserLocalStorage): void {
    localStorage.setItem(userDataKey, JSON.stringify(user))
  }

  public static removeAll(): void {
    localStorage.removeItem(tokenKey)
    localStorage.removeItem(userDataKey)
  }
}
