import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import Appointments from './index';

// Create a manual mock for useRouter
jest.mock('next/router');

describe('Appointments', () => {
  beforeEach(() => {
    // Reset the mock implementation of useRouter before each test
    (useRouter as jest.Mock).mockReset();
  });

  test('renders the "New Schedule" button', () => {
    render(<Appointments />);

    const newScheduleButton = screen.getByRole('button', { name: 'New Schedule' });
    expect(newScheduleButton).toBeInTheDocument();
  });

  test('clicking "New Schedule" button navigates to the correct route', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValueOnce({
      push: mockPush,
    });

    render(<Appointments />);

    const newScheduleButton = screen.getByRole('button', { name: 'New Schedule' });
    userEvent.click(newScheduleButton);

    expect(mockPush).toHaveBeenCalledWith('/add-schedule');
  });

  // Add more tests as needed to cover other functionality and assertions
});
