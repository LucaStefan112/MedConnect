import React from 'react';
import { render, screen } from '@testing-library/react';
import SideMenu from './SideMenu';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/',
  }),
}));

describe('SideMenu', () => {
  it('renders all menu buttons', () => {
    render(<SideMenu />);
    const homeButton = screen.getByText(/home/i);
    const accountButton = screen.getByText(/my account/i);
    const appointmentsButton = screen.getByText(/appointments/i);
    const analysesButton = screen.getByText(/analyses/i);

    expect(homeButton).toBeInTheDocument();
    expect(accountButton).toBeInTheDocument();
    expect(appointmentsButton).toBeInTheDocument();
    expect(analysesButton).toBeInTheDocument();
  });
});
