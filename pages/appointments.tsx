import SearchBar from '@/components/SearchBar/SearchBar'
import VerticalList from '@/components/VerticalList/VerticalList'
import { Button } from '@mui/material'
import React from 'react'

export default function Appointments() {
  return (
    <div className='flex flex-col items-center w-4/5 ml-16'>
      <div className='flex flex-row items-center justify-between w-full h-14'>
        <SearchBar />
        <Button className='main_button text-lg h-14'>
          New Appointment
        </Button>
      </div>
      <p className='text-4xl mt-7 mb-7 text-blue-600 w-full'>
        My Appointments
      </p>
      <VerticalList />
    </div>
  )
}
