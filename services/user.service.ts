import axios from "axios";
import { IGetAnalysesResponse, IGetAppointmentResponse, IGetAppointmentsResponse, IGetUserDataResponse } from "./response.interfaces";
import { ServerRoutes } from "@/utils/ServerRoutes";
import { ISpecialisation } from "./app.service";
import { IDoctor } from "./doctor.service";
import { IUserData } from "@/components/UserForm/UserForm";

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IAppointment {
  id?: number;
  date: Date;
  specialisation: ISpecialisation;
  doctor: IDoctor;
  type?: string;
}

export interface IAnalysis {
  id: string;
  title: string;
  description: string;
  type: string;
  date: Date;
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
      console.log(appointment, process.env.SERVER + ServerRoutes.ADD_APPOINTMENT)
      const res = await axios.post(process.env.SERVER + ServerRoutes.ADD_APPOINTMENT, appointment, { withCredentials: true });
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error setting appointment" };
    }
  }

  public static async getAppointments(): Promise<IGetAppointmentsResponse> {
    try {
      const res = await axios.get(process.env.SERVER + ServerRoutes.GET_APPOINTMENTS, { withCredentials: true });
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error getting appointments" };
    }
  }

  public static async getAppointment(id: string): Promise<IGetAppointmentResponse> {
    try {
      const res = await axios.get(process.env.SERVER + ServerRoutes.GET_APPOINTMENT(id), { withCredentials: true });
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error getting appointment" };
    }
  }

  public static async getUserData(): Promise<IGetUserDataResponse> {
    try {
      const res = await axios.get(process.env.SERVER + ServerRoutes.GET_USER_DATA, { withCredentials: true });
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error getting user data" };
    }
  }


  public static async getAnalyses(): Promise<IGetAnalysesResponse> {
    try {
      const res = await axios.get(process.env.SERVER + ServerRoutes.GET_ANALYSES, { withCredentials: true });
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error getting analyses" };
    }
  }

  public static async updateUserData(userData: IUserData): Promise<IGetUserDataResponse> {
    try {
      const res = await axios.put(process.env.SERVER + ServerRoutes.UPDATE_USER_DATA, userData, { withCredentials: true });
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error updating user data" };
    }
  }
}