import React from 'react'
import { Button } from '@mui/material'
import Link from 'next/link'
import Routes from '@/utils/Routes'
import Appointment from '@/pages/appointments/[id]'



export default function UpcomingAppointments ()
{

  const data = [
    { id: 0, message: '15.03 (14:00) - Cardiology' },
    { id: 1, message: '29.07 (10:30) - Cardiology' }
  ]
  return (

    <div className='
      flex flex-col items-center
      bg-blue-600 w-96 h-80
      text-white text-center text-2xl
      rounded-xl padding-10 shadow-xl'
    >

      <p className='
        w-11/12 text-2xl font-bold shadow-2xl
        pb-2 pt-2 border-b-2 border-b-blue-200 mb-6
        '
      >
        Upcoming Appointments
      </p>

      {
        data.map(appointment => (
          <Button className='
            bg-blue-100 hover:bg-blue-50
            text-black text-lg
              p-4 mt-4
          '>
            {appointment.message}
          </Button>
        ))
      }

      <Link href = { Routes.APPOINTMENTS }>
        <Button className = 'bg-blue-100 hover:bg-blue-50 text-black rounded-xl pl-5 pr-5 text-lg h-14 m-4'>
          View All
        </Button>
      </Link>

    </div>

  )
}
