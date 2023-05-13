import { ServerRoutes } from "@/utils/ServerRoutes";
import axios from "axios";
import { IGetDoctorsResponse, IGetSpecialisationsResponse } from "./response.interfaces";

export interface ISpecialisation {
  _id: string;
  name: string;
}

export default class AppService {
  public static async getSpecialisations(): Promise<IGetSpecialisationsResponse> {
    try {
      const res = await axios.get(process.env.SERVER + ServerRoutes.GET_SPECIALISATIONS, { withCredentials: true });
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error getting specialisations"};
    }
  }
}