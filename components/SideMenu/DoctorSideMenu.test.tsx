import React from 'react';
import { render, screen } from '@testing-library/react';
import CodSideMenu from './DoctorSideMenu';
import Routes from '../../utils/Routes';

describe('CodSideMenu', () => {
  test('renders side menu with correct links and icons', () => {
    render(<CodSideMenu />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toHaveAttribute('href', Routes.HOME);
    expect(screen.getByTestId('homeIcon')).toBeInTheDocument();

    const calendarLink = screen.getByRole('link', { name: /calendar/i });
    expect(calendarLink).toHaveAttribute('href', Routes.APPOINTMENTS);
    expect(screen.getByTestId('calendarIcon')).toBeInTheDocument();

    // Uncomment the following block if you want to test the "All patients" link
    // const patientsLink = screen.getByRole('link', { name: /all patients/i });
    // expect(patientsLink).toHaveAttribute('href', Routes.MY_ACCOUNT);
    // expect(screen.getByTestId('patientsIcon')).toBeInTheDocument();

    const scheduleLink = screen.getByRole('link', { name: /my schedule/i });
    expect(scheduleLink).toHaveAttribute('href', Routes.SCHEDULE);
    expect(screen.getByTestId('scheduleIcon')).toBeInTheDocument();
  });
});
