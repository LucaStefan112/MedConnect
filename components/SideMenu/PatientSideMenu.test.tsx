import React from 'react';
import { render, screen } from '@testing-library/react';
import PatientSideMenu from './PatientSideMenu';
import Routes from '../../utils/Routes';

describe('PatientSideMenu', () => {
  test('renders side menu with correct links and icons', () => {
    render(<PatientSideMenu />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toHaveAttribute('href', Routes.HOME);
    expect(screen.getByTestId('homeIcon')).toBeInTheDocument();

    const accountLink = screen.getByRole('link', { name: /my account/i });
    expect(accountLink).toHaveAttribute('href', Routes.MY_ACCOUNT);
    expect(screen.getByTestId('accountIcon')).toBeInTheDocument();

    const appointmentsLink = screen.getByRole('link', { name: /appointments/i });
    expect(appointmentsLink).toHaveAttribute('href', Routes.APPOINTMENTS);
    expect(screen.getByTestId('appointmentsIcon')).toBeInTheDocument();

    const analysesLink = screen.getByRole('link', { name: /analyses/i });
    expect(analysesLink).toHaveAttribute('href', Routes.ANALYSES);
    expect(screen.getByTestId('analysesIcon')).toBeInTheDocument();
  });
});
