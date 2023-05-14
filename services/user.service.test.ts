import UserService, { IAppointment } from './user.service';
import { IGetAnalysesResponse, IGetAppointmentResponse, IGetAppointmentsResponse, IGetUserNewsResponse, IGetUserResponse, IGetUsersResponse } from "./response.interfaces";

import axios from 'axios';

jest.mock('axios');

describe('UserService', () => {
  describe('addApppointment', () => {
    it('should call axios.post with the correct URL and data', async () => {
      const mockAppointment: IAppointment = { date: new Date(), specialisation: { _id: '1', name: 'Cardiology' }, doctor: { _id: '1', fullName: 'Dr. John Doe' , specialisation: s } };
      const mockResponse: IGetAppointmentsResponse = { success: true, data: [{ id: 1, ...mockAppointment }] };
      (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValueOnce({ data: mockResponse });

      const result = await UserService.addApppointment(mockAppointment);

      expect(axios.post).toHaveBeenCalledWith(`${process.env.SERVER}/add_appointment`, mockAppointment);
      expect(result).toEqual(mockResponse);
    });

    it('should return an error response when axios.post throws an error', async () => {
      const mockAppointment: IAppointment = { date: new Date(), specialisation: { id: 1, name: 'Cardiology' }, doctor: { id: 1, name: 'Dr. John Doe' } };
      const mockError = new Error('Something went wrong');
      (axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValueOnce(mockError);

      const result = await UserService.addApppointment(mockAppointment);

      expect(axios.post).toHaveBeenCalledWith(`${process.env.SERVER}/add_appointment`, mockAppointment);
      expect(result).toEqual({ success: false, message: 'Error setting appointment' });
    });
  });

  describe('getAppointments', () => {
    it('should call axios.get with the correct URL', async () => {
      const mockResponse: IGetAppointmentsResponse = { success: true, data: [] };
      (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: mockResponse });

      const result = await UserService.getAppointments();

      expect(axios.get).toHaveBeenCalledWith(`${process.env.SERVER}/get_appointments`);
      expect(result).toEqual(mockResponse);
    });

    it('should return an error response when axios.get throws an error', async () => {
      const mockError = new Error('Something went wrong');
      (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(mockError);

      const result = await UserService.getAppointments();

      expect(axios.get).toHaveBeenCalledWith(`${process.env.SERVER}/get_appointments`);
      expect(result).toEqual({ success: false, message: 'Error getting appointments' });
    });
  });

  describe('getAppointment', () => {
    it('should call axios.get with the correct URL', async () => {
      const mockId = '1';
      const mockResponse: IGetAppointmentsResponse = { success: true, data: [] };
      (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: mockResponse });

      const result = await UserService.getAppointment(mockId);

      expect(axios.get).toHaveBeenCalledWith(`${process.env.SERVER}/get_appointment/${mockId}`);
      expect(result).toEqual(mockResponse);
    });

    it('should return an error response when axios.get throws an error', async () => {
      const mockId = '1';
      const mockError = new Error('Something went wrong');
      (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(mockError);

        const result = await UserService.getAppointment(mockId);

        expect(axios.get).toHaveBeenCalledWith(`${process.env.SERVER}/get_appointment/${mockId}`);
        expect(result).toEqual({ success: false, message: 'Error getting appointment' });
    });
    });

});
