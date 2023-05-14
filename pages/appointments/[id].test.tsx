import { render } from '@testing-library/react';
import React, { useEffect } from 'react';
import Appointment from './[id]';
import UserService from '@/services/user.service';

jest.mock('@/services/user.service', () => ({
  getAppointment: jest.fn().mockResolvedValue('Mocked appointment data'),
}));

describe('Appointment', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('fetches and logs appointment data when id is provided', async () => {
    const mockId = '123';
    const { getByText } = render(<Appointment id={mockId} />);

    expect(UserService.getAppointment).toHaveBeenCalledWith(mockId);
    await expect(UserService.getAppointment).resolves.toBe('Mocked appointment data');
    expect(console.log).toHaveBeenCalledWith('Mocked appointment data');
  });

  test('does not fetch appointment data when id is not provided', async () => {
    const { getByText } = render(<Appointment />);

    expect(UserService.getAppointment).not.toHaveBeenCalled();
    expect(console.log).not.toHaveBeenCalled();
  });

  // Add more tests as needed for other scenarios or assertions
});
