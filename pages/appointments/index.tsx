import SearchBar from '@/components/SearchBar/SearchBar'
import VerticalList from '@/components/VerticalList/VerticalList'
import { IGetAppointmentsResponse } from '@/services/response.interfaces';
import UserService, { IAppointment } from '@/services/user.service';
import Routes from '@/utils/Routes';
import { Button } from '@mui/material'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function Appointments() {
  const router = useRouter();
  
  const [appointments, setAppointments] = useState<any[]>([
    { id: 1, title: 'Appointment 1', description: 'Description 1', date: '2021-10-10', time: '10:00' },
    { id: 2, title: 'Appointment 2', description: 'Description 2', date: '2021-10-10', time: '10:00' },
    { id: 3, title: 'Appointment 3', description: 'Description 3', date: '2021-10-10', time: '10:00' },
    { id: 4, title: 'Appointment 4', description: 'Description 4', date: '2021-10-10', time: '10:00' },
    { id: 5, title: 'Appointment 5', description: 'Description 5', date: '2021-10-10', time: '10:00' },
    { id: 6, title: 'Appointment 6', description: 'Description 6', date: '2021-10-10', time: '10:00' },
    { id: 7, title: 'Appointment 7', description: 'Description 7', date: '2021-10-10', time: '10:00' },
    { id: 8, title: 'Appointment 8', description: 'Description 8', date: '2021-10-10', time: '10:00' },
    { id: 9, title: 'Appointment 9', description: 'Description 9', date: '2021-10-10', time: '10:00' },
    { id: 10, title: 'Appointment 10', description: 'Description 10', date: '2021-10-10', time: '10:00' }
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

  return (
    <div className='main_page'>
      <div className='flex flex-row items-center justify-between w-full h-14'>
        <SearchBar />
        <Link href={ Routes.ADD_APPOINTMENT }>
          <Button className='main_button text-lg h-14'>
            New Appointment
          </Button>
        </Link>
      </div>
      <p className='text-4xl mt-7 mb-7 text-blue-600 w-full'>
        My Appointments
      </p>
      <VerticalList list={ appointments } className='appointments_list_max_height' />
    </div>
  )
}
