import axios from "axios";
import { IGetAppointmentResponse, IGetAppointmentsResponse, IGetUserNewsResponse, IGetUserResponse } from "./response.interfaces";
import { ServerRoutes } from "@/utils/ServerRoutes";
import { ISpecialisation } from "./app.service";
import { IDoctor } from "./doctor.service";

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IAppointment {
  id?: number;
  date: Date;
  specialisation?: ISpecialisation;
  doctor: IDoctor;
  type?: string;
}

export interface IUserNews {
  id: number;
  title: string;
  description: string;
  date: Date;
}

export default class UserService {
  public static async addApppointment(appointment: IAppointment): Promise<IGetAppointmentResponse> {
    try {
      const res = await axios.post(process.env.SERVER + ServerRoutes.ADD_APPOINTMENT, appointment);
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error setting appointment" };
    }
  }

  public static async getAppointments(): Promise<IGetAppointmentsResponse> {
    try {
      const res = await axios.get(process.env.SERVER + ServerRoutes.GET_APPOINTMENTS);
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error getting appointments" };
    }
  }

  public static async getNews(): Promise<IGetUserNewsResponse> {
    try {
      const res = await axios.get(process.env.SERVER + ServerRoutes.GET_NEWS);
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error getting news" };
    }
  }
}