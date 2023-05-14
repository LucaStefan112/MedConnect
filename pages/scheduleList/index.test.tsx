import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@mui/material';
import React from 'react';
import Appointments from './index';

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Appointments', () => {
  test('renders the "New Schedule" button', () => {
    render(<Appointments />);

    const newScheduleButton = screen.getByRole('button', { name: 'New Schedule' });
    expect(newScheduleButton).toBeInTheDocument();
  });

  test('clicking "New Schedule" button navigates to the correct route', () => {
    const mockPush = jest.fn();
    jest.mock('next/router', () => ({
      __esModule: true,
      useRouter: () => ({
        push: mockPush,
      }),
    }));

    render(<Appointments />);

    const newScheduleButton = screen.getByRole('button', { name: 'New Schedule' });
    userEvent.click(newScheduleButton);

    expect(mockPush).toHaveBeenCalledWith('/add-schedule');
  });

  // Add more tests as needed to cover other functionality and assertions
});
