import { render } from '@testing-library/react';
import UserService from '../../services/user.service';
import React from 'react';
import Appointment from './[id]';

// Mock the UserService module
jest.mock('../../services/user.service', () => ({
  getAppointment: jest.fn().mockResolvedValue('mocked response'),
}));

describe('Appointment', () => {
  test('calls UserService.getAppointment with the correct id', async () => {
    render(<Appointment />);

    expect(UserService.getAppointment).toHaveBeenCalledWith('123');
  });

  test('logs the response from UserService.getAppointment', async () => {
    render(<Appointment />);

    // Wait for the asynchronous operation to complete
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(console.log).toHaveBeenCalledWith('mocked response');
  });


});
