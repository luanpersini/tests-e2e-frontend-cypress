import envConfig from '../config/envConfig'

const { apiUrl } = envConfig

const apiPath = {
  authentication: {
    login: `${apiUrl}/login`,
    passwordReset: `${apiUrl}/authentication/password-reset`,
    signup: `${apiUrl}/signup`
  },
  users: {
    basePath: `${apiUrl}/users`
  },
  account: {
    basePath: `${apiUrl}/account`,
    verificationEmail: `${apiUrl}/account/request-verification-email`,
    verify: `${apiUrl}/account/verify`
  },
  userManagement: {
    basePath: `${apiUrl}/:identifier/user-management`,
    users: `${apiUrl}/:identifier/user-management/users`,
    roles: `${apiUrl}/:identifier/user-management/roles`,
    details: `${apiUrl}/:identifier/user-management/:id`
  },
  inviter: {
    basePath: `${apiUrl}/:identifier/inviter`,
    cancel: `${apiUrl}/:identifier/inviter/:id`,
    roles: `${apiUrl}/:identifier/inviter/roles`
  },
  invitee: {
    basePath: `${apiUrl}/invitee`
  },
  register: {
    basePath: `${apiUrl}/register`,
    invitee: `${apiUrl}/register/invitee`,
    inviteeDetails: `${apiUrl}/register/invitee/:id`
  },
  project: {
    basePath: `${apiUrl}/:identifier/project`,
    details: `${apiUrl}/:identifier/project/:id`,
    delete: `${apiUrl}/:identifier/project/:id`
  },
  task: {
    basePath: `${apiUrl}/:identifier/task`,
    details: `${apiUrl}/:identifier/task/:id`,
    delete: `${apiUrl}/:identifier/task/:id`
  },
  taskStatus: {
    basePath: `${apiUrl}/:identifier/task-status`
  }
}
export const apiPaths = {
  authentication: {
    login: `${apiUrl}/login`,
    signup: `${apiUrl}/signup`
  },
  users: {
    basePath: `${apiUrl}/users`
  }
}

export default apiPath
