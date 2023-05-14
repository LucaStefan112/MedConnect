import React from 'react';
import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import PatientInfoPage from './patientInfoPage';
import PatientInfo from '../components/PatientInfo/PatientInfo';

jest.mock('next/router');

describe('PatientInfoPage', () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      query: {},
    });
  });

  it('renders patient info correctly', () => {
    useRouter.mockReturnValue({
      query: { name: 'John-Doe' },
    });

    const { getByText } = render(<PatientInfoPage />);

    const patientInfoComponent = getByText('Patient Info');
    expect(patientInfoComponent).toBeInTheDocument();

    const patientName = getByText('John Doe');
    expect(patientName).toBeInTheDocument();

    // Add more assertions as needed to test other elements or properties
  });

  it('renders patient info with undefined name if query is not provided', () => {
    const { getByText } = render(<PatientInfoPage />);

    const patientInfoComponent = getByText('Patient Info');
    expect(patientInfoComponent).toBeInTheDocument();

    const patientName = getByText('undefined undefined');
    expect(patientName).toBeInTheDocument();

    // Add more assertions as needed to test other elements or properties
  });

  // Add more test cases as needed for different scenarios
});
