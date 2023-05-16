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

    expect(mockPush).toHaveBeenCalledWith('/appointmentlist');
  });

});