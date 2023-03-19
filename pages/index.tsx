import { Routes } from '@/utils/Routes'
import { Button, Link } from '@mui/material'
import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-row justify-between items-center'>
      <h1 className='text-2xl font-bold'>Home</h1>
      <Link href={ Routes.SCHEDULE } className='
        text-decoration-none
        no-underline'
      >
          <Button className='
          bg-blue-500 
          text-white text-l
          h-16'>
          NEW APPOINTMENT
        </Button>
      </Link>
    </div>
  )
}