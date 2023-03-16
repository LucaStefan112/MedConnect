import { IUser } from "./user.service";

export interface IBasicResponse {
  success: boolean;
  message: string;
}

export interface IGetUserResponse extends IBasicResponse {
  user?: IUser;
}