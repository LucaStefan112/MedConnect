import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Scheduler from './Scheduler';
import UserService from '../../services/user.service';
import DoctorService from '../../services/doctor.service';
import AppService from '../../services/app.service';

jest.mock('../../services/user.service');
jest.mock('../../services/doctor.service');
jest.mock('../../services/app.service');
jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Scheduler', () => {
  beforeEach(() => {
    // Mock the UserService methods
    UserService.addApppointment = jest.fn().mockResolvedValue({ success: true });

    // Mock the DoctorService methods
    DoctorService.getDoctors = jest.fn().mockResolvedValue({ success: true, doctors: [] });
    DoctorService.getDoctorBusyIntervals = jest.fn().mockResolvedValue({ success: true, busyIntervals: [] });

    // Mock the AppService methods
    AppService.getSpecialisations = jest.fn().mockResolvedValue({ success: true, specialisations: [] });
  });

  test('renders scheduler form and submits appointment', async () => {
    render(<Scheduler />);

    // Rest of the test code...
  });
});