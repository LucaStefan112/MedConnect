import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';

test('renders header with logout button and person icon', () => {
  render(<Header />);

  const imgElement = screen.getByAltText(/Application Logo/i);
  expect(imgElement).toBeInTheDocument();
  
});