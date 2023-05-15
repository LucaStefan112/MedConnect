import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PatientInfo from './PatientInfo';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  push: jest.fn(),
}));

describe('PatientInfo', () => {
  const mockPatient = {
    firstName: 'John',
    lastName: 'Doe',
    birthDay: '1990-01-01',
    sex: 'Male',
    email: 'john.doe@example.com',
    phoneNumber: '1234567890',
    address: '123 Main Street',
  };

  test('renders patient information', () => {
    render(<PatientInfo patient={mockPatient} />);

    expect(screen.getByText(`First Name: ${mockPatient.firstName}`)).toBeInTheDocument();
    expect(screen.getByText(`Last Name: ${mockPatient.lastName}`)).toBeInTheDocument();
    expect(screen.getByText(`Birthday: ${mockPatient.birthDay}`)).toBeInTheDocument();
    expect(screen.getByText(`Sex: ${mockPatient.sex}`)).toBeInTheDocument();
    expect(screen.getByText(`Contact: ${mockPatient.email} ${mockPatient.phoneNumber}`)).toBeInTheDocument();
    expect(screen.getByText(`Address: ${mockPatient.address}`)).toBeInTheDocument();
  });

  test('navigates to analyses page when "Go to patient\'s analysis" button is clicked', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    render(<PatientInfo patient={mockPatient} />);

    const goToAnalysesButton = screen.getByRole('button', { name: 'Go to patient\'s analysis' });
    fireEvent.click(goToAnalysesButton);

    expect(pushMock).toHaveBeenCalledWith('/analyses');
  });

  test('displays the patient code', () => {
    render(<PatientInfo patient={mockPatient} />);
    const patientCodeElement = screen.getByText(/^Code: /);
    expect(patientCodeElement).toBeInTheDocument();
  });

  test('displays doctor\'s request', () => {
    render(<PatientInfo patient={mockPatient} />);
    const requestElement = screen.getByText('Request: Provide detailed analyses.');
    expect(requestElement).toBeInTheDocument();
  });

  test('renders without crashing', () => {
    render(<PatientInfo patient={null} />);
    expect(screen.queryByText('First Name:')).toBeNull();
    expect(screen.queryByText('Last Name:')).toBeNull();
    expect(screen.queryByText('Birthday:')).toBeNull();
    expect(screen.queryByText('Sex:')).toBeNull();
    expect(screen.queryByText('Contact:')).toBeNull();
    expect(screen.queryByText('Address:')).toBeNull();
  });

  // Add more tests as needed for other scenarios or assertions
});
