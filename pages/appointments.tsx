import SearchBar from '@/components/SearchBar/SearchBar'
import { Button } from '@mui/material'
import React from 'react'

export default function Appointments() {
  return (
    <div className='flex flex-col items-center w-4/5 ml-16 mt-14  '>
      <div className='flex flex-row items-center justify-between w-full h-14 mt-4'>
        <SearchBar />
        <Button className='main_button'>
          New Appointment
        </Button>
      </div>
      <p className='text-4xl mt-16 text-blue-600 w-full'>
        My Appointments
      </p>
    </div>
  )
}
