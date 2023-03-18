export class ServerRoutes {
  public static CHECK_AUTH = (token: string) => `/check-auth/${token}`;
  public static GET_USER = '/user';
}