import axios from "axios";
import { ISpecialisation } from "./app.service";
import { IGetDoctorBusyIntervalsResponse, IGetDoctorsResponse } from "./response.interfaces";
import { ServerRoutes } from "../utils/ServerRoutes";

export interface IDoctor {
  _id: string;
  fullName: string;
  specialisation: ISpecialisation;
}

export default class DoctorService {
  public static async getDoctors(specialisation: ISpecialisation): Promise<IGetDoctorsResponse> {
    try {
      const res = await axios.get(process.env.SERVER + ServerRoutes.GET_DOCTORS_BY_SPECIALISATION(specialisation));
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error getting doctors"};
    }
  }
  
  public static async getDoctorBusyIntervals(doctor: IDoctor): Promise<IGetDoctorBusyIntervalsResponse> {
    try {
      const res = await axios.get(process.env.SERVER + ServerRoutes.GET_DOCTOR_BUSY_INTERVALS(doctor));
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error getting doctor busy intervals"};
    }
  }
}