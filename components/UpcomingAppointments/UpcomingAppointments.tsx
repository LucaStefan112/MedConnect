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

      <Link href = { Routes.ADD_APPOINTMENT }>
        <Button className = 'main_button text-lg h-14 m-4'>
          View All
        </Button>
      </Link>

    </div>

  )
}
