import SearchBar from '../../components/SearchBar/SearchBar'
import VerticalList from '../../components/VerticalList/VerticalList'
import { IGetAppointmentsResponse } from '../../services/response.interfaces';
import UserService, { IAppointment } from '../../services/user.service';
import DateTimeParser from '../../utils/DateTimeParser';
import Routes from '../../utils/Routes';
import { Button } from '@mui/material'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Scheduler from '../../components/Scheduler/Scheduler'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { addDays, setHours, setMinutes } from 'date-fns';


export default function Appointments() {
  const router = useRouter();
  
  const [appointments, setAppointments] = useState<any[]>([
    { id: 1, specialisation: { name: 'Specialisation 1' }, doctor: {name: 'Doctor 1'}, date: new Date('2021-10-11') },
    { id: 2, specialisation: { name: 'Specialisation 2' }, doctor: {name: 'Doctor 2'}, date: new Date('2021-10-12') },
    { id: 3, specialisation: { name: 'Specialisation 3' }, doctor: {name: 'Doctor 3'}, date: new Date('2021-10-13') },
    { id: 4, specialisation: { name: 'Specialisation 4' }, doctor: {name: 'Doctor 4'}, date: new Date('2021-10-14') },
    { id: 5, specialisation: { name: 'Specialisation 5' }, doctor: {name: 'Doctor 5'}, date: new Date('2021-10-15') },
    { id: 6, specialisation: { name: 'Specialisation 6' }, doctor: {name: 'Doctor 6'}, date: new Date('2021-10-16') },
    { id: 7, specialisation: { name: 'Specialisation 7' }, doctor: {name: 'Doctor 7'}, date: new Date('2021-10-17') },
    { id: 8, specialisation: { name: 'Specialisation 8' }, doctor: {name: 'Doctor 8'}, date: new Date('2021-10-18') },
    { id: 9, specialisation: { name: 'Specialisation 9' }, doctor: {name: 'Doctor 9'}, date: new Date('2021-10-19') },
  ]);

  // useEffect(() => {
  //   UserService.getAppointments().then((res: IGetAppointmentsResponse) => {
  //     if(res.success && res.appointments){
  //       setAppointments(res.appointments);
  //     } else {
  //       console.log(res.message);
  //     }
  //   });
  // }, []);

  const [appointment, setAppointment] = useState<IAppointment>({} as IAppointment);
  const [availableDays, setAvailableDays] = useState<Date[]>([
    new Date(),
    addDays(new Date(), 1),
    addDays(new Date(), 2)
  ]);

  return (
    <div className='main_page'>
      {/* <div className='flex flex-row items-center justify-between w-full h-14'>
        <SearchBar placeholder='Search appointment...' />
        <Link href={ Routes.ADD_APPOINTMENT }>
          <Button className='main_button text-lg h-14'>
            New Appointment
          </Button>
        </Link>
      </div> */}
      <p className='text-4xl mt-7 mb-7 text-blue-600 w-full'>
        My Appointments
      </p>
      
    <DatePicker inline
        includeDates={ [...availableDays] }
        onChange={(date: Date) => {
          router.push(Routes.APPOINTMENTLIST);
          // setAppointment((appointment: IAppointment) => ({
          //   ...appointment,
          //   date: new Date(date)
            
          // }));

          // DoctorService.getDoctorAvailableHours(appointment.doctor, date).then((res: IGetDoctorAvailableHoursResponse) => {
          //   if(res.success && res.availableHours) {
          //     setAvailableHours(res.availableHours);
          //   } else {
          //     setAvailableHours([]);
          //   }
          // });
        }} 
      />
    </div>
  )
}
