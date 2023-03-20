import { ISpecialisation } from "@/services/app.service";
import { IDoctor } from "@/services/doctor.service";

export class ServerRoutes {
  public static CHECK_AUTH = (token: string) => `/check-auth/${token}`;
  public static GET_SPECIALISATIONS = '/specialisations';
  public static ADD_APPOINTMENT = '/appointment';
  public static GET_APPOINTMENTS = '/appointments';
  public static GET_DOCTORS_BY_SPECIALISATION = (specialisation: ISpecialisation) =>
    `/doctors/specialisation/${specialisation.id}`;
  public static GET_DOCTOR_AVAILABLE_DAYS = (doctor: IDoctor) => `/doctor/${doctor.id}/available-days`;
  public static GET_DOCTOR_AVAILABLE_HOURS = (doctor: IDoctor, date: Date) => 
    `/doctor/${doctor.id}/available-hours/${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  public static GET_NEWS = '/news';
}