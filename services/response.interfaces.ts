import { IUserData } from "@/components/UserForm/UserForm";
import { ISpecialisation } from "./app.service";
import { IDoctor } from "./doctor.service";
import { IAnalysis, IAppointment, IUser, IUserNews } from "./user.service";

export interface IBasicResponse {
  success: boolean;
  message: string;
}

export interface IGetUserResponse extends IBasicResponse {
  user?: IUser;
}

export interface IGetSpecialisationsResponse extends IBasicResponse {
  specialisations?: ISpecialisation[];
  success: boolean;
}

export interface IGetAppointmentResponse extends IBasicResponse {
  appointment?: IAppointment;
}

export interface IGetAppointmentsResponse extends IBasicResponse {
  appointments?: IAppointment[];
}

export interface IGetDoctorsResponse extends IBasicResponse {
  doctors?: IDoctor[];
}

export interface IGetDoctorBusyIntervalsResponse extends IBasicResponse {
  busyIntervals?: string[];
}

export interface IGetUserNewsResponse extends IBasicResponse {
  news?: IUserNews[];
}

export interface IGetUserDataResponse extends IBasicResponse {
  user?: IUserData;
}

export interface IGetAnalysesResponse extends IBasicResponse {
  analyses?: IAnalysis[];
}

export interface IGetAnalysisResponse extends IBasicResponse {
  path?: string;
}