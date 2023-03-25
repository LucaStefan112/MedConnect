import React from 'react'
import { Button } from '@mui/material'
import Link from 'next/link'
import Routes from '@/utils/Routes'



export default function UpcomingAppointments ()
{
  return (

    <div className='
      flex flex-col items-center 
      bg-blue-600 w-96 h-80
      text-white text-center text-2xl
      rounded-xl padding-10 shadow-xl'
    >

      <p className='
        w-11/12 text-2xl font-bold shadow-2xl
        pb-2 pt-2 border-b-2 border-b-blue-200
        '
      >
        Upcoming Appointments
      </p>

      <Link href = { Routes.APPOINTMENT(3) }>
        <Button className = 'bg-blue-100 hover:bg-blue-50 text-black pl-5 pr-5 text-lg h-14 m-4'>
          15.03 (14:00) - Cardiology app.
        </Button>
      </Link>

      <Link href = { Routes.APPOINTMENT(4) }>
        <Button className = 'bg-blue-100 hover:bg-blue-50 text-black pl-5 pr-5 text-lg h-14 m-4'>
          29.07 (10:30) - Cardiology app.
        </Button>
      </Link>

      <Link href = { Routes.APPOINTMENTS }>
        <Button className = 'bg-blue-100 hover:bg-blue-50 text-black pl-5 pr-5 text-lg h-14 m-4'>
          View All
        </Button>
      </Link>

    </div>

  )
}
