import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DoctorScheduler from './DoctorScheduler';

describe('DoctorScheduler', () => {
  test('renders all intervals for each day', () => {
    const { getAllByTestId } = render(<DoctorScheduler />);
    
    const intervals = getAllByTestId('interval');
    expect(intervals.length).toBe(70); // 14 intervals per day for 5 days
  });

  test('toggles interval availability when clicked', () => {
    const { getAllByTestId } = render(<DoctorScheduler />);
    
    const interval = getAllByTestId('interval')[0];
    fireEvent.click(interval);
    
    expect(interval).toHaveClass('bg-white'); // Interval should have bg-white class after click
  });

  test('clicking "Save" button triggers save function', () => {
    const { getByText } = render(<DoctorScheduler />);
    const saveButton = getByText('Save');
    
    // Mock save function
    const saveFunction = jest.fn();
    jest.spyOn(React, 'useState').mockReturnValueOnce([{}, saveFunction]);
    
    fireEvent.click(saveButton);
    
    expect(saveFunction).toHaveBeenCalled();
  });
});
