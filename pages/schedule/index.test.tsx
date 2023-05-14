
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Appointments from './index';

describe('Appointments', () => {
    beforeEach(() => {
        render(<Appointments />);
    });

    it('renders the SearchBar component', () => {
        expect(screen.getByPlaceholderText('Search appointment...')).toBeInTheDocument();
    });

    it('renders the "New Appointment" button', () => {
        expect(screen.getByRole('button', { name: 'New Appointment' })).toBeInTheDocument();
    });

    it('renders the "My Appointments" heading', () => {
        expect(screen.getByText('My Appointments')).toBeInTheDocument();
    });

    it('renders the VerticalList component with appointment items', () => {
        const appointmentItems = screen.getAllByRole('listitem');
        expect(appointmentItems).toHaveLength(9); // Adjust the value based on the number of appointments provided

        // Example assertion for the first appointment item
        expect(appointmentItems[0]).toHaveTextContent('Specialisation 1 with Marian Popescu on 2021-10-11 at [time]');
    });

    it('navigates to the add appointment page when "New Appointment" button is clicked', () => {
        const addAppointmentButton = screen.getByRole('button', { name: 'New Appointment' });
        userEvent.click(addAppointmentButton);
        // Add your assertions for the navigation behavior
    });

    it('navigates to the appointment details page when an appointment item is clicked', () => {
        const firstAppointment = screen.getAllByRole('listitem')[0];
        userEvent.click(firstAppointment);
        // Add your assertions for the navigation behavior
    });

});
