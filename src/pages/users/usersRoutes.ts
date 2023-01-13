import { Route } from 'src/interfaces/route'
import navigationPath from '../../common/path/navigationPath'
import { UserData } from './components/UserData'
import { Users } from './components/Users'

export const usersRoutes: Route[] = [
  {
    path: navigationPath.users.home,
    title: 'Users',
    element: Users,
    isProtected: true
  },
  {
    path: navigationPath.users.edit + ':id',
    title: 'Edit User',
    element: UserData,
    isProtected: true
  }
]
