import React from 'react';
import { render, screen } from '@testing-library/react';
import UserForm, { IProps } from './UserForm';

describe('UserForm', () => {
  const defaultProps: IProps = {
    user: {
      firstName: 'John',
      lastName: 'Doe',
      cnp: 1234567890,
      birthDate: new Date('1990-01-01'),
      sex: 'Male',
      citizenship: 'US',
      country: 'USA',
      county: 'County',
      city: 'City',
      completeAdress: '123 Street, City, Country',
      phoneNumber: 1234567890,
      email: 'john@example.com',
      maritalStatus: 'Married',
      children: [],
      emergencyContact: 'Jane Doe',
    },
    isChild: false,
  };

  test('renders UserForm component', () => {
    render(<UserForm {...defaultProps} />);

    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    // Add more assertions as needed
  });
});
