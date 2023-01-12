import { Route } from 'src/interfaces/route'
import navigationPath from '../../common/path/navigationPath'
import { Login } from './components/Login'
import { Logout } from './components/Logout'
import { Signup } from './components/Signup'

export const authRoutes: Route[] = [
  {
    path: navigationPath.auth.login,
    title: 'Login',
    element: Login,
    isProtected: false
  },
  {
    path: navigationPath.auth.logout,
    title: 'Logout',
    element: Logout,
    isProtected: false
  },
  {
    path: navigationPath.auth.signup,
    title: 'Signup',
    element: Signup,
    isProtected: false
  }
]
