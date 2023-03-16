//create a singleton class for routes
export class Routes {
  //create an enum with all the routes
  public static readonly REDIRECT_FROM_AUTH = '/auth-redirect/:token';
  public static readonly HOME = '/';
  public static readonly SCHEDULE = '/schedule';
  public static readonly APPOINTMENTS = '/appointments';
  public static readonly APPOINTMENT = '/appointment/:id';
  public static readonly ANALYSES = '/analyses';
  public static readonly ANALYSIS = '/analysis/:id';
  public static readonly USER = '/user/:id';
}