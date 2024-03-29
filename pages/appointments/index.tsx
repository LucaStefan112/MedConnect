import VerticalList from '@/components/VerticalList/VerticalList'
import { IGetAppointmentsResponse } from '@/services/response.interfaces';
import UserService, { IAppointment } from '@/services/user.service';
import DateTimeParser from '@/utils/DateTimeParser';
import Routes from '@/utils/Routes';
import { Button } from '@mui/material'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function Appointments() {
  const router = useRouter();
  
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    UserService.getAppointments().then((res: IGetAppointmentsResponse) => {
      if(res.success && res.appointments){
        setAppointments(res.appointments);
      } else {
        console.log(res.message);
      }
    });
  }, []);

  return (
    <div className='main_page'>
      <div className='flex flex-row items-center justify-between w-full h-14 mb-10'>
        <p className='text-4xl mt-7 mb-7 text-blue-600 w-full'>
          My Appointments
        </p>
        <Link href={ Routes.ADD_APPOINTMENT } className='w-32'>
          <Button className='main_button text-lg h-14'>
            New Appointment
          </Button>
        </Link>
      </div>
      
      { appointments.length && <VerticalList className='max-h-[30.5rem] hide_scroll'
        list= {
          appointments.map((appointment: IAppointment) => {
            return {
              title:  appointment.specialisation + ' with ' + 
                      appointment.doctor.lastName + ' ' + appointment.doctor.firstName + ' on ' +
                      DateTimeParser.parseDate(new Date(Date.parse(String(appointment.date)))) + ' at ' +
                      DateTimeParser.parseTime(new Date(Date.parse(String(appointment.date)))),
              onClick: () => router.push(Routes.APPOINTMENT(appointment._id)),
            }
          })
        }
      />
      }
    </div>
  )
}
