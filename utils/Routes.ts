export default class Routes {
  public static AUTH_APP = 'http://localhost:3000';
  public static HOME = '/';
  
  public static REDIRECT_FROM_AUTH = '/auth-redirect/:token';
  public static ADD_APPOINTMENT = '/appointments/add';
  public static APPOINTMENTS = '/appointments';
  public static APPOINTMENT = (id: any) => `/appointments/${id}`;
  public static ANALYSES = '/analyses';
  public static ANALYSIS = (id: any) => `/analyses/${id}`;
  public static MY_ACCOUNT = '/my-account';
  public static SIGNUP = '/signup';
  public static SIGNIN = '/signin';
  public static LOGOUT = '/logout';
  public static APPOINTMENTLIST= '/appointmentsList';
}