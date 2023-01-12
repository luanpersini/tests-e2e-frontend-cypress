import { LocalStorageHelper } from 'src/common/helpers/LocalStorageHelper'
import navigationPath from 'src/common/path/navigationPath'
import { ButtonSave } from 'src/components/buttons'
import { FormSubmitErrorMessage, Input } from 'src/components/form'
import { PageTitle } from 'src/components/template/page-title'
import { useFormHandler } from 'src/hooks/useFormHandler'
import { Page } from 'src/interfaces/page'
import { FormEventFnc, FormEventInput } from 'src/react'
import * as Yup from 'yup'
import { useLogin } from '../api/useLogin'
import { LoginParams } from '../interfaces/Authentication'

const LoginFormValidationSchema: any = {
  email: Yup.string().required().max(100).email().label('Email'),
  password: Yup.string().required().min(4).max(50).label('Password')
}



export function Login(props: Page) {
  const { login } = useLogin()
  const { handleChange, handleSubmit, data, errors, submitErrors } = useFormHandler<LoginParams>(LoginFormValidationSchema)
  
  async function loginUser(data: LoginParams) {  
    const loggedUser: any = await login(data)
       
    if (loggedUser) {
      LocalStorageHelper.SetAccessToken(loggedUser.loginToken)
      LocalStorageHelper.SetUserData({ name: loggedUser.name, id: loggedUser.id })
    } else {
      LocalStorageHelper.removeAll()
    } 
  }

  return (
    <div>
      <PageTitle title={props.title} />
      <form onSubmit={(evt: FormEventFnc) => handleSubmit(evt, data, () => loginUser(data), navigationPath.home)} id="LoginForm">
        <Input name="email" label="Email" errors={errors} onChange={(evt: FormEventInput) => handleChange(evt, data)} inputvalue={data} />
        <Input
          name="password"
          label="Password"
          type="password"
          errors={errors}
          onChange={(evt: FormEventInput) => handleChange(evt, data)}
          inputvalue={data}
        />

        <FormSubmitErrorMessage submitErrors={submitErrors} />       
        <ButtonSave {...props} type="submit" label="Login" />
      </form>
    </div>
  )
}
