import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import React from 'react';
import UserService from '../../services/user.service';
import Appointment from './[id]';

// Mock the UserService module
jest.mock('../../services/user.service', () => ({
  getAppointment: jest.fn().mockResolvedValue('Mocked appointment data'),
}));

// Mock the useRouter hook
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Appointment', () => {
  beforeEach(() => {
    // Reset mock implementations and mockReturnValue for each test
    jest.clearAllMocks();
  });

  test('fetches and logs the appointment data', async () => {
    // Set up the mocked router query
    const mockQuery = { id: '123' };
    (useRouter as jest.Mock).mockReturnValue({ query: mockQuery });

    // Render the Appointment component
    render(<Appointment />);

    // Wait for the asynchronous code in useEffect to complete
    await new Promise((resolve) => setTimeout(resolve, 0));

    // Expect the getAppointment method to be called with the correct ID
    expect(UserService.getAppointment).toHaveBeenCalledWith(mockQuery.id);

    // Expect the logged appointment data to be displayed in the console
    expect(console.log).toHaveBeenCalledWith('Mocked appointment data');
  });

  // Add more tests as needed for other scenarios or assertions
});
