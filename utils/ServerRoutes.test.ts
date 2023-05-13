import { ISpecialisation } from '../services/app.service';
import { IDoctor } from '../services/doctor.service';
import { ServerRoutes } from './ServerRoutes';

describe('ServerRoutes', () => {
  it('should have a LOGIN route', () => {
    expect(ServerRoutes.LOGIN).toBe('/users/login');
  });

  it('should have a GET_USERS route', () => {
    expect(ServerRoutes.GET_USERS).toBe('/users/all');
  });

  it('should have a CHECK_AUTH route with a token parameter', () => {
    const token = 'my-token';
    expect(ServerRoutes.CHECK_AUTH(token)).toBe(`/check-auth/${token}`);
  });

  it('should have a GET_SPECIALISATIONS route', () => {
    expect(ServerRoutes.GET_SPECIALISATIONS).toBe('/specialisations');
  });

  it('should have an ADD_APPOINTMENT route', () => {
    expect(ServerRoutes.ADD_APPOINTMENT).toBe('/appointments');
  });

  it('should have a GET_APPOINTMENT route with an id parameter', () => {
    const id = '123';
    expect(ServerRoutes.GET_APPOINTMENT(id)).toBe(`/appointments/${id}`);
  });

  it('should have a GET_APPOINTMENTS route', () => {
    expect(ServerRoutes.GET_APPOINTMENTS).toBe('/appointments');
  });

  it('should have a GET_DOCTORS_BY_SPECIALISATION route with a specialisation parameter', () => {
    const specialisation: ISpecialisation = { _id: '1', name: 'Cardiology' };
    expect(ServerRoutes.GET_DOCTORS_BY_SPECIALISATION(specialisation)).toBe('/doctors/specialisation/1');
  });

  it('should have a GET_DOCTOR_BUSY_INTERVALS route with a doctor parameter', () => {
    const doctor: IDoctor = { _id: '1', fullName: 'John Smith', specialisation: { _id: '2', name: 'Dentistry' } };
    expect(ServerRoutes.GET_DOCTOR_BUSY_INTERVALS(doctor)).toBe('/doctors/1/busy-intervals');
  });

  it('should have a GET_NEWS route', () => {
    expect(ServerRoutes.GET_NEWS).toBe('/news');
  });

  it('should have a GET_ANALYSES route', () => {
    expect(ServerRoutes.GET_ANALYSES).toBe('/analyses');
  });
});
