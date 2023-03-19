import axios from "axios";
import { ISpecialisation } from "./app.service";
import { IGetDoctorAvailableDaysResponse, IGetDoctorAvailableHoursResponse, IGetDoctorsResponse } from "./response.interfaces";
import { ServerRoutes } from "@/utils/ServerRoutes";

export interface IDoctor {
  id: number;
  name: string;
  specialisation: ISpecialisation;
}

export default class DoctorService {
  public static async getDoctors(specialisation: ISpecialisation): Promise<IGetDoctorsResponse> {
    try {
      const res = await axios.get(process.env.SERVER + ServerRoutes.GET_DOCTORS_BY_SPECIALISATION(specialisation));
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error getting doctors"};
    }
  }
  
  public static async getDoctorAvailableDays(doctor: IDoctor): Promise<IGetDoctorAvailableDaysResponse> {
    try {
      const res = await axios.get(process.env.SERVER + ServerRoutes.GET_DOCTOR_AVAILABLE_DAYS(doctor));
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error getting doctor available days"};
    }
  }
  
  public static async getDoctorAvailableHours(doctor: IDoctor, date: Date): Promise<IGetDoctorAvailableHoursResponse> {
    try {
      const res = await axios.get(process.env.SERVER + ServerRoutes.GET_DOCTOR_AVAILABLE_HOURS(doctor, date));
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error getting doctor available hours"};
    }
  }
}