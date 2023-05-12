import NewsPannel from '@/components/NewsPannel/NewsPannel'
import UpcomingAppointments from '@/components/UpcomingAppointments/UpcomingAppointments'
import Images from '@/utils/Images'
import React from 'react'
import Image from 'next/image'
import { Button } from '@mui/material'
import Link from 'next/link'
import Routes from '@/utils/Routes'

export default function Home() {
  return (
    <div className='main_page justify-between'>
      <div className='flex flex-row justify-between w-full'>
        <NewsPannel />
        <UpcomingAppointments />
      </div>
      <div className='flex flex-row justify-between w-full items-center'>
        <Image src={ Images.HOME_IMAGE } alt='Home Image' width={ 500 } height={ 500 } />
        <div className='flex flex-col justify-center items-center mr-32'>
          <p className='text-3xl mb-6'>
            Want to schedule an appointment?
          </p>
          <Link href={ Routes.ADD_APPOINTMENT }>
            <Button className='main_button text-lg h-14 m-4'>
              New Appointment
            </Button>
          </Link>
        </div>
      </div>
    </div>

  )
}