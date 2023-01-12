import { AxiosResponse } from 'axios'
import navigationPath from 'src/common/path/navigationPath'
import { ButtonSave } from 'src/components/buttons'
import { ButtonCancel } from 'src/components/buttons/button-cancel'
import { FormSubmitErrorMessage, Input } from 'src/components/form'
import { useFormHandler } from 'src/hooks/useFormHandler'

import { FormEventFnc, FormEventInput } from 'src/react'
import * as Yup from 'yup'
import { SignupParams } from '../interfaces/Signup'

interface Props {
  onSubmit: ((data: SignupParams) => Promise<AxiosResponse<any, any>>) | (() => never[]) 
  optimistic?: boolean
}

export const SignupFormValidationSchema: any = {
  name: Yup.string().required().min(5).max(100).label('Name'),
  email: Yup.string().required().max(100).email().label('Email'),
  password: Yup.string().required().min(4).max(50).label('Password'),
  zipCode: Yup.string().min(8).max(8).label('Zipcode'),
}

export function SignupForm(props: Props) {
  const { onSubmit, optimistic = false } = props
  const { handleChange, handleSubmit, data, errors, submitErrors } = useFormHandler<SignupParams>(SignupFormValidationSchema)
  
  return (
    <form
      onSubmit={(evt: FormEventFnc) => handleSubmit(evt, data, () => onSubmit(data), navigationPath.projects.home.resolve(), optimistic)}
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
  )
}
