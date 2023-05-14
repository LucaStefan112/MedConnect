import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Profile from './my-account';

describe('Profile component', () => {
  test('renders save button', () => {
    render(<Profile />);
    const saveButton = screen.getByRole('button', { name: /save/i });
    expect(saveButton).toBeInTheDocument();
  });

  test('clicking save button renders', () => {
    render(<Profile />);
    const saveButton = screen.getByRole('button', { name: /save/i });
    userEvent.click(saveButton);
    expect(saveButton).toBeInTheDocument();
   
  });

  test('see Sex options', () => {
    render(<Profile />);
    expect(screen.getByDisplayValue('Prefer not to say')).toBeInTheDocument(); 
  });

  test('see Marital Status options', () => {
    render(<Profile />);
    expect(screen.getByDisplayValue('Prefer not to say')).toBeInTheDocument(); 
  });
});
