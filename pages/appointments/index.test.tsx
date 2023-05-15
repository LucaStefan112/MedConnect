import { render, screen, fireEvent } from '@testing-library/react';
import Appointments from './index';
import { addDays } from 'date-fns';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Appointments', () => {
  test('renders the component', () => {
    render(<Appointments />);
    
    // Assert that the component renders without error
    expect(screen.getByText('My Appointments')).toBeInTheDocument();
  });

  test('navigates to appointment list when date is selected', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: mockPush,
    }));

    render(<Appointments />);
    
    const datePicker = screen.getByRole('datepicker');
    fireEvent.change(datePicker, { target: { value: addDays(new Date(), 1) } });

    // Assert that the router is pushed to the appointment list route
    expect(mockPush).toHaveBeenCalledWith('/appointmentlist');
  });

  // Add more tests as needed for other scenarios or assertions
});
