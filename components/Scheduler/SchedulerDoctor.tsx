import AppService, { ISpecialisation } from '@/services/app.service';
import DoctorService, { IDoctor } from '@/services/doctor.service';
import { IGetDoctorAvailableDaysResponse, IGetDoctorAvailableHoursResponse, IGetDoctorsResponse, IGetSpecialisationsResponse } from '@/services/response.interfaces';
import UserService, { IAppointment } from '@/services/user.service';
import Routes from '@/utils/Routes';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { addDays, setHours, setMinutes } from 'date-fns';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Scheduler() {
  const router = useRouter();
  const [appointment, setAppointment] = useState<IAppointment>({} as IAppointment);
  const [availableDays, setAvailableDays] = useState<Date[]>([
    new Date(),
    addDays(new Date(), 1),
    addDays(new Date(), 2)
  ]);
  const [availableHours, setAvailableHours] = useState<Date[]>([
    setMinutes(setHours(new Date(), 9), 0),
    setMinutes(setHours(new Date(), 9), 30),
    setMinutes(setHours(new Date(), 10), 0),
    setMinutes(setHours(new Date(), 10), 30),
    setMinutes(setHours(new Date(), 11), 0),
    setMinutes(setHours(new Date(), 11), 30),
    setMinutes(setHours(new Date(), 12), 0),
    setMinutes(setHours(new Date(), 12), 30),
    setMinutes(setHours(new Date(), 13), 0),
    setMinutes(setHours(new Date(), 13), 30),
    setMinutes(setHours(new Date(), 14), 0),
    setMinutes(setHours(new Date(), 14), 30),

  ]);

  // useEffect(() => {
  //   AppService.getSpecialisations().then((res: IGetSpecialisationsResponse) => {
  //     if(res.success && res.specialisations) {
  //       setSpecialisations(res.specialisations);
  //     } else {
  //       setSpecialisations([]);
  //     }
  //   });
  // }, []);

  const scheduleAppointment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await UserService.addApppointment(appointment);
    
    if(response.success) {
      alert('Appointment scheduled!');
      router.push(Routes.APPOINTMENTS);
    } else {
      alert('Something went wrong!');
    }
  }

  return (
    <form className='flex flex-col items-center justify-center w-full h-auto'
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => scheduleAppointment(e)} 
    >
      <DatePicker inline
        includeDates={ [...availableDays] }
        onChange={(date: Date) => {
          setAppointment((appointment: IAppointment) => ({
            ...appointment,
            date: new Date(date)
          }));

          // DoctorService.getDoctorAvailableHours(appointment.doctor, date).then((res: IGetDoctorAvailableHoursResponse) => {
          //   if(res.success && res.availableHours) {
          //     setAvailableHours(res.availableHours);
          //   } else {
          //     setAvailableHours([]);
          //   }
          // });
        }} 
      />

      <FormControl variant='standard' className='w-60  mt-12'>
        <InputLabel>Hour</InputLabel>
          <Select
            defaultValue=''
            onChange={(e: SelectChangeEvent<string>) => {
              const hour = availableHours.find((hour: Date) =>
                hour.getTime() === Number(e.target.value)) || new Date();

              setAppointment((appointment: IAppointment) => ({
                ...appointment,
                hour
              }));
            }}
          >
            {
              availableHours.map((hour: Date) => (
                <MenuItem
                  key={ hour.getTime() }
                  value={ hour.getTime() }
                >
                  { hour.getHours() + ':' + hour.getMinutes() }
                </MenuItem>
              ))
            }
          </Select>
      </FormControl>

      <Button 
        variant='contained' className='mt-12 bg-blue-500' type='submit'>Mark as free</Button>
    </form>
  );
}