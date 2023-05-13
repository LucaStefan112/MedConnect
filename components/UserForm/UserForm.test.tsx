import { render, screen, fireEvent } from '@testing-library/react';
import UserForm from './UserForm';
import{ IUserData, IProps } from './UserForm';

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
    children: [],
    emergencyContact: 'Jane Doe'
  };

  const mockProps: IProps = {
    user: mockUserData,
    isChild: false
  };

  it('renders the user form', () => {
    render(<UserForm {...mockProps} />);

    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('CNP')).toBeInTheDocument();
    expect(screen.getByLabelText('Birth Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Sex')).toBeInTheDocument();
    expect(screen.getByLabelText('Citizenship')).toBeInTheDocument();
    expect(screen.getByLabelText('Country')).toBeInTheDocument();
    expect(screen.getByLabelText('County')).toBeInTheDocument();
    expect(screen.getByLabelText('City')).toBeInTheDocument();
    expect(screen.getByLabelText('Complete Adress')).toBeInTheDocument();
  });

  it('populates the input fields with user data', () => {
    render(<UserForm {...mockProps} />);

    expect(screen.getByLabelText('First Name')).toHaveValue(mockUserData.firstName);
    expect(screen.getByLabelText('Last Name')).toHaveValue(mockUserData.lastName);
    expect(screen.getByLabelText('CNP')).toHaveValue(mockUserData.cnp);
    expect(screen.getByLabelText('Birth Date')).toHaveValue('1990-01-01');
    expect(screen.getByLabelText('Sex')).toHaveValue(mockUserData.sex);
    expect(screen.getByLabelText('Citizenship')).toHaveValue(mockUserData.citizenship);
    expect(screen.getByLabelText('Country')).toHaveValue(mockUserData.country);
    expect(screen.getByLabelText('County')).toHaveValue(mockUserData.county);
    expect(screen.getByLabelText('City')).toHaveValue(mockUserData.city);
    expect(screen.getByLabelText('Complete Adress')).toHaveValue(mockUserData.completeAdress);
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
