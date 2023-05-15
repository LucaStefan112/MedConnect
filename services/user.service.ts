import axios from "axios";
import { IBasicResponse, IGetAnalysesResponse, IGetAnalysisResponse, IGetAppointmentResponse, IGetAppointmentsResponse, IGetUserDataResponse } from "./response.interfaces";
import { ServerRoutes } from "@/utils/ServerRoutes";
import { ISpecialisation } from "./app.service";
import { IDoctor } from "./doctor.service";
import { IUserData } from "@/components/UserForm/UserForm";

export interface IUser {
  _id: number;
  name: string;
  email: string;
}

export interface IAppointment {
  _id?: string;
  date: string | Date;
  specialisation: string;
  doctor: IDoctor;
  type?: string;
  message?: string;
}

export interface IAnalysis {
  _id: string;
  name: string;
  file: File;
  description: string;
  type: string;
  date: string;
  person?: IUser;

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

  public static async setAppointmentMessage(id: string, message: string): Promise<IGetAppointmentResponse> {
    try {
      const res = await axios.put(process.env.SERVER + ServerRoutes.SET_APPOINTMENT_MESSAGE(id), { message }, { withCredentials: true });
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error setting appointment message" };
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

  public static async getAnalysis(id: string): Promise<IGetAnalysisResponse> {
    try {
      const res = await axios.get(process.env.SERVER + ServerRoutes.GET_ANALYSIS(id), { withCredentials: true });
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error getting analysis" };
    }
  }

  public static async addAnalysis(analysis: FormData): Promise<IBasicResponse> {
    try {
      const res = await axios.post(process.env.SERVER + ServerRoutes.ADD_ANALYSIS, analysis, { withCredentials: true });
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error adding analysis" };
    }
  }

  public static async deleteAnalysis(id: string): Promise<IBasicResponse> {
    try {
      const res = await axios.delete(process.env.SERVER + ServerRoutes.DELETE_ANALYSIS(id), { withCredentials: true });
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error deleting analysis" };
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