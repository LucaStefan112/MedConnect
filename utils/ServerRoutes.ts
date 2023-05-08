import { ISpecialisation } from "@/services/app.service";
import { IDoctor } from "@/services/doctor.service";

export class ServerRoutes {
  public static LOGIN = '/users/login';
  public static GET_USERS = '/users/all';
  public static CHECK_AUTH = (token: string) => `/check-auth/${token}`;
  public static GET_SPECIALISATIONS = '/specialisations';
  public static ADD_APPOINTMENT = '/appointments';
  public static GET_APPOINTMENT = (id: string) => `/appointments/${id}`;
  public static GET_APPOINTMENTS = '/appointments';
  public static GET_DOCTORS_BY_SPECIALISATION = (specialisation: ISpecialisation) => `/doctors/specialisation/${specialisation._id}`;
  public static GET_DOCTOR_BUSY_INTERVALS = (doctor: IDoctor) => `/doctors/${doctor._id}/busy-intervals`;
  public static GET_NEWS = '/news';
  public static GET_ANALYSES = '/analyses';
}