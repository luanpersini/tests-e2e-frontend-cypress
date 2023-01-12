import navigationPath from './common/path/navigationPath'
import { NotFound } from './components/general/NotFound'
import { Route } from './interfaces/route'
import { authRoutes } from './pages/authentication/authRoutes'
import { Homepage } from './pages/homepage/Homepage'

const mainRoutes: Route[] = [
  {
    path: navigationPath.home,
    title: 'Homepage',
    element: Homepage,
    isProtected: false
  }  
]

const notFound: Route[] = [
  {
    path: navigationPath.notFound.item,
    title: 'Not Found',
    element: NotFound,
    isProtected: false
  },
  {
    path: navigationPath.notFound.all,
    title: 'Not Found',
    element: NotFound,
    isProtected: false
  }
]
const routes: Route[] = [
  ...mainRoutes,
  ...notFound,
  ...authRoutes
]

export default routes
