import { ServerRoutes } from "@/utils/ServerRoutes";
import axios from "axios";
import { IBasicResponse } from "./response.interfaces";

export default class AuthService {
  public static async login(data: any): Promise<any> {
    try {
      const res = await axios.post(process.env.SERVER + ServerRoutes.LOGIN, data, { withCredentials: true });
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error logging in" };
    }
  }
  
  public static async checkAuth(): Promise<IBasicResponse> {
    try {
      const res = await axios.get(process.env.SERVER + ServerRoutes.CHECK_AUTH, { withCredentials: true });
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error checking auth" };
    }
  }

  public static async logout(): Promise<IBasicResponse> {
    try {
      const res = await axios.get(process.env.SERVER + ServerRoutes.LOGOUT);
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error logging out" };
    }
  }
}