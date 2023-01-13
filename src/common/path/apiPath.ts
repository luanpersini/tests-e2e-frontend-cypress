import envConfig from '../config/envConfig'

const { apiUrl } = envConfig

export const apiPaths = {
  authentication: {
    login: `${apiUrl}/login`,
    signup: `${apiUrl}/signup`
  },
  users: {
    basePath: `${apiUrl}/users/`
  }
}
