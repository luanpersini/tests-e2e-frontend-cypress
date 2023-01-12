const organizationPath = '/organization/:identifier'

const navigationPath = {
  home: '/',
  people: {
    home: `${organizationPath}/people`,    
    sentInvitations: `${organizationPath}/people/sent-invitations`,
    invite: `${organizationPath}/people/invite`,
    edit: `${organizationPath}/people/edit/:id`
  },
  projects: {
    home: `${organizationPath}/projects`,
    create: `${organizationPath}/projects/create`,
    edit: `${organizationPath}/projects/edit/:id`,
    view: `${organizationPath}/projects/view/:id`
  },
  tasks: {
    home: `${organizationPath}/tasks`,
    create: `${organizationPath}/tasks/create`,
    edit: `${organizationPath}/tasks/edit/:id`
  },
  notFound: {
    item: '/notfound/:id',
    all: '*'
  },
  registration: {
    register: '/register',
    registerInvitee: '/register/invitee/:id'
  },
  auth: {
    login: '/login',
    logout: '/logout',
    reset: '/reset',
    signup: '/signup',
  },
  settings: {
    home: '/settings',
    profile: '/settings/profile',
    changeEmail: '/settings/change-email',
    changeName: '/settings/change-name',
    changePassword: '/settings/change-password',
    emailVerification: '/settings/email-verification',
    receivedInvitations: `/settings/received-invitations`,
  },
  error: {
    forbidden: `/forbidden`
  }
}

export default navigationPath
