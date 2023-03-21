export enum Routes {
  AUTH_APP = 'http://localhost:3000',
  HOME = '/',
  
  REDIRECT_FROM_AUTH = '/auth-redirect/:token',
  ADD_APPOINTMENT = '/appointments/add',
  APPOINTMENTS = '/appointments',
  APPOINTMENT = '/appointments/:id',
  ANALYSES = '/analyses',
  ANALYSIS = '/analysis/:id',
  MY_ACCOUNT = '/my-account',
  SIGNUP = '/signup',
  SIGNIN = '/signin',
  LOGOUT = '/logout'
}