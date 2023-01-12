import { PageTitle } from 'src/components/template/page-title'
import { Page } from 'src/interfaces/page'
import { useSignup } from '../api/useSignup'

import { SignupForm } from './SignupForm'

export function Signup(props: Page) {
  const { signup } = useSignup()
   
  return (
    <div>      
      <PageTitle title={props.title} />
      <SignupForm onSubmit={signup} />    
    </div>
  )
}
