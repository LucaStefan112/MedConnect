import { render } from '@testing-library/react';
import AddSchedule from './add';
import React from 'react';

jest.mock('../../components/DoctorScheduler/DoctorScheduler', () => {
  return jest.fn().mockReturnValue(<div>Mocked DoctorScheduler Component</div>);
});

describe('AddSchedule', () => {
  test('renders the DoctorScheduler component', () => {
    const { getByText } = render(
      <AddSchedule />
    );

    const doctorSchedulerComponent = getByText('Mocked DoctorScheduler Component');
    expect(doctorSchedulerComponent).toBeInTheDocument();
  });

  // Add more tests as needed for other scenarios or assertions
});
