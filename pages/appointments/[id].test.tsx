import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import React from 'react';
import UserService from '../../services/user.service';
import Appointment from './[id]';

jest.mock('../../services/user.service', () => ({
  getAppointment: jest.fn().mockResolvedValue('Mocked appointment data'),
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Appointment', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('fetches and logs the appointment data', async () => {
    const mockQuery = { id: '123' };
    (useRouter as jest.Mock).mockReturnValue({ query: mockQuery });

    render(<Appointment />);

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(UserService.getAppointment).toHaveBeenCalledWith(mockQuery.id);

    expect(console.log).toHaveBeenCalledWith('Mocked appointment data');
  });

});
