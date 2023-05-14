import React from 'react';
import { render, screen } from '@testing-library/react';
import PatientInfo from './PatientInfo';

describe('PatientInfo', () => {
  test('renders patient information correctly', () => {
    const patient = {
      firstName: 'John',
      lastName: 'Doe',
      birthDay: '1990-01-01',
      sex: 'Male',
      email: 'john@example.com',
      phoneNumber: '1234567890',
      address: '123 Main St',
    };

    render(<PatientInfo patient={patient} />);

    const patientInfoHeading = screen.getByText("Patient's Information");
    expect(patientInfoHeading).toBeInTheDocument();

    const patientName = screen.getByText('First Name: John');
    expect(patientName).toBeInTheDocument();

    const patientRequestHeading = screen.getByText("Doctor's request");
    expect(patientRequestHeading).toBeInTheDocument();

    const requestContent = screen.getByText('Request: Provide detailed analyses.');
    expect(requestContent).toBeInTheDocument();
  });

  test('navigates to patient analysis page on button click', () => {
    const mockRouterPush = jest.fn();
    const patient = {
      firstName: 'John',
      lastName: 'Doe',
      birthDay: '1990-01-01',
      sex: 'Male',
      email: 'john@example.com',
      phoneNumber: '1234567890',
      address: '123 Main St',
    };

    jest.mock('next/router', () => ({
      useRouter: () => ({
        push: mockRouterPush,
      }),
    }));

    render(<PatientInfo patient={patient} />);

    const goToAnalysisButton = screen.getByText("Go to patient's analysis");
    expect(goToAnalysisButton).toBeInTheDocument();

    goToAnalysisButton.click();

    expect(mockRouterPush).toHaveBeenCalledWith('/analyses');
  });
});
