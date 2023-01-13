const navigationPath = {
  home: '/',
  users: {
    home: `/users/`,
    edit: '/users/edit/'
  },  
  notFound: {
    item: '/notfound/',
    all: '*'
  },  
  auth: {
    login: '/login',
    logout: '/logout',    
    signup: '/signup',
  }  
}

export default navigationPath
