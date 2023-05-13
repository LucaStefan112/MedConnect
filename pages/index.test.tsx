import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './index';

describe('Home component', () => {
  test('renders "New Appointment" button', () => {
    render(<Home />);
    const buttonElement = screen.getByRole('button', { name: 'New Appointment' });
    expect(buttonElement).toBeInTheDocument();
  });

  test('redirects to correct route on "New Appointment" button click', () => {
    render(<Home />);
    const buttonElement = screen.getByRole('button', { name: 'New Appointment' });
    fireEvent.click(buttonElement);
    // Assert the correct route redirection here
  });
});
