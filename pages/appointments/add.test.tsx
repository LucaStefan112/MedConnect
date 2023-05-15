import { render } from '@testing-library/react';
import AddAppointment from './add';
import Scheduler from '../../components/Scheduler/Scheduler';

jest.mock('../../components/Scheduler/Scheduler', () => {
  return jest.fn().mockReturnValue(<div>Mocked Scheduler Component</div>);
});

describe('AddAppointment', () => {
  test('renders the Scheduler component', () => {
    const { getByText } = render(<AddAppointment />);
    const schedulerComponent = getByText('Mocked Scheduler Component');
    expect(schedulerComponent).toBeInTheDocument();
  });

  // Add more tests as needed for other scenarios or assertions
});
