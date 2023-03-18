import axios from "axios";
import { IGetUserResponse } from "./interfaces";
import { ServerRoutes } from "@/utils/ServerRoutes";

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export default class UserService {
  public static async getUser(id: string): Promise<IGetUserResponse> {
    try {
      const res = await axios.get(process.env.SERVER + ServerRoutes.GET_USER);
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error getting user" };
    }
  }
}