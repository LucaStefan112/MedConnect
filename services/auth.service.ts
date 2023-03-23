import { ServerRoutes } from "@/utils/ServerRoutes";
import axios from "axios";
import { IBasicResponse } from "./response.interfaces";

export default class AuthService {
  public static async login(data: any): Promise<any> {
    try {
      const res = await axios.post(process.env.SERVER + ServerRoutes.LOGIN, data);
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error logging in" };
    }
  }
  
  public static async checkAuth(token: string): Promise<IBasicResponse> {
    try {
      const res = await axios.get(process.env.SERVER + ServerRoutes.CHECK_AUTH(token));
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error checking auth" };
    }
  }
}