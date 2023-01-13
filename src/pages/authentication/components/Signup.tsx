import navigationPath from 'src/common/path/navigationPath'
import { ButtonCancel, ButtonSave } from 'src/components/buttons'
import { FormSubmitErrorMessage, Input } from 'src/components/form'
import { PageTitle } from 'src/components/template/page-title'
import { useFormHandler } from 'src/hooks/useFormHandler'
import { Page } from 'src/interfaces/page'
import { FormEventFnc, FormEventInput } from 'src/react'
import * as Yup from 'yup'
import { useSignup } from '../api/useSignup'
import { SignupParams } from '../interfaces/Authentication'

const SignupFormValidationSchema: any = {
  name: Yup.string().required().min(5).max(100).label('Name'),
  email: Yup.string().required().max(100).email().label('Email'),
  password: Yup.string().required().min(4).max(50).label('Password'),
  zipCode: Yup.string().min(8).max(8).label('Zipcode'),
}

export function Signup(props: Page) {
  const { signup } = useSignup()
  const { handleChange, handleSubmit, data, errors, submitErrors } = useFormHandler<SignupParams>(SignupFormValidationSchema)
  
  return (
    <div>      
      <PageTitle title={props.title} />
      <form
      onSubmit={(evt: FormEventFnc) => handleSubmit(evt, data, () => signup(data), navigationPath.home)}
      id="SignupForm"
    >
      <Input name="name" label="Name" errors={errors} onChange={(evt: FormEventInput) => handleChange(evt, data)} inputvalue={data} />
      <Input name="email" label="Email" errors={errors} onChange={(evt: FormEventInput) => handleChange(evt, data)} inputvalue={data} />
      <Input name="password" label="Password" errors={errors} onChange={(evt: FormEventInput) => handleChange(evt, data)} inputvalue={data} />
      <Input name="zipCode" label="Zipcode" errors={errors} onChange={(evt: FormEventInput) => handleChange(evt, data)} inputvalue={data} />

      <FormSubmitErrorMessage submitErrors={submitErrors} />
      <ButtonCancel />
      <ButtonSave {...props} type="submit" label="Save" />
    </form>    
    </div>
  )
}
