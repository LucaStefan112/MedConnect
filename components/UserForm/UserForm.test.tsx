import { render, screen, fireEvent } from '@testing-library/react';
import UserForm from './UserForm';
import { IUserData, IProps } from './UserForm';

describe('UserForm', () => {
    const mockUserData: IUserData = {
        firstName: 'John',
        lastName: 'Doe',
        cnp: 1234567890,
        birthDate: new Date('1990-01-01'),
        sex: 'Male',
        citizenship: 'US',
        country: 'US',
        county: 'CA',
        city: 'Los Angeles',
        completeAdress: '123 Main St',
        phoneNumber: 5551234,
        email: 'john.doe@example.com',
        maritalStatus: 'Single',
        emergencyContact: 'Jane Doe',
        specialization: 'Cardiologie'
    };


    const mockProps: IProps = {
        user: mockUserData,
        isChild: false
    };

    it('renders the user form', () => {
        render(<UserForm {...mockProps} />);
        expect(screen.getByText('First Name')).toBeInTheDocument();
        expect(screen.getByText('Last Name')).toBeInTheDocument();
        expect(screen.getByText('CNP')).toBeInTheDocument();
        expect(screen.getByText('Birth Date')).toBeInTheDocument();
        expect(screen.getByText('Sex')).toBeInTheDocument();
        expect(screen.getByText('Citizenship')).toBeInTheDocument();
        expect(screen.getByText('Country')).toBeInTheDocument();
        expect(screen.getByText('County')).toBeInTheDocument();
        expect(screen.getByText('City')).toBeInTheDocument();
        expect(screen.getByText('Complete Adress')).toBeInTheDocument();
        expect(screen.getByText('Phone Number')).toBeInTheDocument();
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Marital Status')).toBeInTheDocument();
        expect(screen.getByText('Cardiologie')).toBeInTheDocument();

    });

    it('populates the input fields with user data', () => {
        render(<UserForm {...mockProps} />);
        expect(screen.getByDisplayValue('John')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Doe')).toBeInTheDocument();
        expect(screen.getByDisplayValue('1234567890')).toBeInTheDocument();
        expect(screen.getByDisplayValue('1990-01-01')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Male')).toBeInTheDocument();
        expect(screen.getByDisplayValue('CA')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Los Angeles')).toBeInTheDocument();
        expect(screen.getByDisplayValue('123 Main St')).toBeInTheDocument();
        expect(screen.getByDisplayValue('5551234')).toBeInTheDocument();

    });

    it('does not render the additional input fields when isChild is true', () => {
        const mockChildProps: IProps = {
            user: mockUserData,
            isChild: true
        };

        render(<UserForm {...mockChildProps} />);

        expect(screen.queryByLabelText('Phone Number')).not.toBeInTheDocument();
        expect(screen.queryByLabelText('Email')).not.toBeInTheDocument();
        expect(screen.queryByLabelText('Marital Status')).not.toBeInTheDocument();
        expect(screen.queryByLabelText('Children')).not.toBeInTheDocument();
        expect(screen.queryByLabelText('Emergency Contact')).not.toBeInTheDocument();
    });
});