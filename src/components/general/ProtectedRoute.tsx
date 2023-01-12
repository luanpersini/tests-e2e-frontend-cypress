import { Navigate } from 'react-router-dom'
import navigationPath from '../../common/path/navigationPath'

import AuthenticationService from '../../services/AuthenticationService'

export function ProtectedRoute(props: any) {
  const { children } = props
  const previousLocation = props.from

  if (AuthenticationService.validateCredentials() === false) {
    console.log('Unauthorized, redirecting.')
    return <Navigate to={navigationPath.auth.login.resolve()} state={{ from: previousLocation }} />
  } else {
    return <>{children}</>
  }
}
