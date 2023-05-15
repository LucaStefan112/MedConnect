import { ISpecialisation } from "@/services/app.service";
import { IDoctor } from "@/services/doctor.service";

export class ServerRoutes {
  public static LOGIN = '/users/login';
  public static GET_USERS = '/users/all';
  public static CHECK_AUTH = `/check-auth`;
  public static LOGOUT = `/logout`;
  public static GET_SPECIALISATIONS = '/specialisations';
  public static ADD_APPOINTMENT = '/appointment';
  public static GET_APPOINTMENT = (id: string) => `/appointments/${id}`;
  public static GET_APPOINTMENTS = '/appointments';
  public static GET_DOCTORS_BY_SPECIALISATION = (specialisation: ISpecialisation) =>
    `/doctors/specialisation/${specialisation.id}`;
  public static GET_DOCTOR_AVAILABLE_DAYS = (doctor: IDoctor) => `/doctor/${doctor.id}/available-days`;
  public static GET_DOCTOR_AVAILABLE_HOURS = (doctor: IDoctor, date: Date) => 
    `/doctor/${doctor.id}/available-hours/${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  public static GET_NEWS = '/news';
  public static GET_ANALYSES = '/analyses';
}