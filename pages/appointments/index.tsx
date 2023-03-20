import SearchBar from '@/components/SearchBar/SearchBar'
import VerticalList from '@/components/VerticalList/VerticalList'
import { IGetAppointmentsResponse } from '@/services/response.interfaces';
import UserService, { IAppointment } from '@/services/user.service';
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function Appointments() {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);

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
        <Button className='main_button text-lg h-14'>
          New Appointment
        </Button>
      </div>
      <p className='text-4xl mt-7 mb-7 text-blue-600 w-full'>
        My Appointments
      </p>
      <VerticalList list={ appointments } className='appointments_list_max_height' />
    </div>
  )
}
