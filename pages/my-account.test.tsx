import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Profile from './my-account';

describe('Profile component', () => {
  test('renders the "Save" button', () => {
    render(<Profile />);
    const saveButton = screen.getByText('Save');
    expect(saveButton).toBeInTheDocument();
  });

  test('clicking the "Save" button triggers a function', () => {
    const mockSaveFunction = jest.fn();
    render(<Profile />);
    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);
    expect(mockSaveFunction).toHaveBeenCalled();
  });
});
