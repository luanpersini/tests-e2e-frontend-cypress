import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import navigationPath from 'src/common/path/navigationPath'
import AuthenticationService from 'src/services/AuthenticationService'

export function Logout() {
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      await AuthenticationService.logout()
      navigate(navigationPath.home, { state: { alertMessage: 'Logged out successfully' } })
      navigate(0)
    })()
  }, [])
}
