export type SignupParams = {
  name: string
  email: string
  password: string
  zipCode?: string
}
export type LoginParams = {
  email: string
  password: string
}

export type LoggedUserParams = {
  name: string
  id: string
  loginToken: string
}
