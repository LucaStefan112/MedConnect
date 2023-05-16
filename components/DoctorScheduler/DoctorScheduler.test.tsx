import { render, screen, fireEvent } from '@testing-library/react';
import DoctorScheduler from './DoctorScheduler';

describe('DoctorScheduler', () => {
  test('toggles availability when interval is clicked', () => {
    render(<DoctorScheduler />);

    // Find the first interval of Monday
    const firstInterval = screen.getAllByTestId('interval-Monday')[0];

    // Click on the interval to toggle availability
    fireEvent.click(firstInterval);

    // Assert that the availability is toggled
    expect(firstInterval).toHaveClass('bg-white');

    // Click on the interval again to toggle availability back
    fireEvent.click(firstInterval);

    // Assert that the availability is toggled back
    expect(firstInterval).toHaveClass('bg-blue-300');
  });

  test('displays the selected intervals when Save button is clicked', () => {
    render(<DoctorScheduler />);

    // Find all intervals
    const intervals = screen.getAllByTestId(/^interval-/);

    // Click on some intervals to select them
    fireEvent.click(intervals[0]);
    fireEvent.click(intervals[5]);
    fireEvent.click(intervals[10]);

    // Find the Save button and click it
    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    // Assert that the selected intervals are displayed or stored as expected
    // Add your assertions here based on your component's behavior
  });
});
