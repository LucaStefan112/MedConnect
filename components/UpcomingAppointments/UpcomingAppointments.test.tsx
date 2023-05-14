import React from 'react';
import { render, screen } from '@testing-library/react';
import UpcomingAppointments from './UpcomingAppointments';

describe('UpcomingAppointments', () => {
  test('renders upcoming appointments component with correct content', () => {
    render(<UpcomingAppointments />);

    const heading = screen.getByText('Upcoming Appointments');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('text-2xl font-bold');

    const component = screen.getByTestId('upcomingAppointmentsComponent');
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass('flex flex-col items-center bg-blue-600 w-96 h-80 text-white text-center text-2xl rounded-xl padding-10 shadow-xl');
  });
});
