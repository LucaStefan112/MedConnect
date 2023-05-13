import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Profile from './my-account';

describe('Profile', () => {
    it('should render the profile page correctly', () => {
      render(<Profile />);
  
      // Assert that the PersonIcon component is rendered
      const personIcon = screen.getByRole('img', { name: /person icon/i });
      expect(personIcon).toBeInTheDocument();
  
      // Assert that the Save button is rendered
      const saveButton = screen.getByRole('button', { name: /save/i });
      expect(saveButton).toBeInTheDocument();
    });
  
    it('should handle the save button click', () => {
      // Mock any necessary functions or dependencies
  
      render(<Profile />);
  
      // Simulate a click on the Save button
      const saveButton = screen.getByRole('button', { name: /save/i });
      userEvent.click(saveButton);
  
      // Assert that the expected action or behavior occurred
      // For example, check if the save function was called or if a message is displayed
    });
  });
  
  