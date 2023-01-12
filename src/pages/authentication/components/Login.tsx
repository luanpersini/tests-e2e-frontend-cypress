import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Button } from 'src/components/buttons'
import { Page } from 'src/interfaces/page'
import { FormEventFnc } from 'src/react'
import * as Yup from 'yup'
import navigationPath from '../../../common/path/navigationPath'

import validate from '../../../common/validation/YupAdapter'
import { Input } from '../../../components/form'
import { FormSubmitErrorMessage } from '../../../components/form/form-submit-error-message'
import { PageTitle } from '../../../components/template/page-title'
import AuthenticationService from '../../../services/AuthenticationService'

export function Login(props: Page) {
  const location: any = useLocation()
  const state = location.state as any
  const email: string = state?.email

  const [errors, setErrors] = React.useState<any[]>([])
  const [submitErrors, setSubmitErrors] = React.useState<string | undefined>(undefined)
  const [data, setData] = useState({
    email: email,
    password: ''
  })

  const validationSchema: any = {
    email: Yup.string().required().max(80).email().label('Email'),
    password: Yup.string().required().min(5).max(25).label('Password')
  }

  async function handleChange({ currentTarget: input }: any) {
    setSubmitErrors(undefined)
    const formData: any = { ...data }
    const { name, value } = input
    formData[name] = value
    setData(formData)
   
    const errorsFound = { ...errors }
    const errorMessage = await validate.One(name, value, validationSchema)

    if (errorMessage) {
      errorsFound[input.name] = errorMessage
    } else delete errorsFound[input.name]
    setErrors(errorsFound)       
  }

  async function handleSubmit(event: FormEventFnc): Promise<void> {
    event.preventDefault()

    const response = await AuthenticationService.login(data.email, data.password)
    if (response?.error) {
      setSubmitErrors(response.error)
      return
    }

    if (!response.body.isVerified) {
      window.location = navigationPath.settings.emailVerification.resolve() as unknown as Location
      return
    }

    if (response.body.hasPendingInvitations) {
      window.location = navigationPath.settings.receivedInvitations.resolve() as unknown as Location
      return
    }

    //TODO encapsulate logic for previous location
    let previousLocation = undefined
    if (location.state !== null) {
      if (location.state?.from !== undefined) {
        previousLocation = location.state?.from
      }
    }
    if (previousLocation !== undefined && previousLocation !== navigationPath.auth.login.resolve()) {
      window.location = previousLocation as unknown as Location
      return
    }

    const identifier = getDefaultAssociation(response.body.associations)

    if (identifier) {
      window.location = navigationPath.tasks.home.resolveWithIdentifier(identifier) as unknown as Location
      return
    }

    window.location = navigationPath.settings.home.resolve() as unknown as Location
    return
  }

  function getDefaultAssociation(associations: string[]) {
    if (associations && associations.length > 0) return associations[0]
    else return ''
  }

  return (
    <div>
      <PageTitle title={props.title} />
      <form onSubmit={handleSubmit}>
        <Input name="email" label="Email" errors={errors} onChange={handleChange} inputvalue={data} />
        <Input name="password" label="Password" type="password" errors={errors} onChange={handleChange} inputvalue={data} />
        <FormSubmitErrorMessage submitErrors={submitErrors} />
        <Button type="submit" label="Login" />
      </form>
      <div className="mt-3">
        <NavLink className="div mt-5" to={navigationPath.auth.reset.resolve()}>
          I lost my password
        </NavLink>
      </div>
    </div>
  )
}
