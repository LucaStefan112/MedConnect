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

export interface IGetDoctorAvailableDaysResponse extends IBasicResponse {
  availableDays?: Date[];
}

export interface IGetDoctorAvailableHoursResponse extends IBasicResponse {
  availableHours?: Date[];
}

export interface IGetUserNewsResponse extends IBasicResponse {
  news?: IUserNews[];
}

export interface IGetUsersResponse extends IBasicResponse {
  users?: IUser[];
}

export interface IGetAnalysesResponse extends IBasicResponse {
  analyses?: IAnalysis[];
}