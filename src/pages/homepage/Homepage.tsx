import navigationPath from 'src/common/path/navigationPath'
import AuthenticationService from 'src/services/AuthenticationService'
import { PageTitle } from '../../components/template/page-title'
import { Page } from '../../interfaces/page'

export function Homepage(props: Page) {
  const userData = AuthenticationService.getDetails() 
  const loggedIn = `Welcome ${userData?.name}`  
  const LoginLink = () => <p>Please <a href={navigationPath.auth.login}>Login</a> to navigate.</p>
  

  return (
    <div>
      <PageTitle title={userData ? loggedIn : 'Welcome!'} />
      {!userData && <LoginLink/>}
    </div>
  )
}
