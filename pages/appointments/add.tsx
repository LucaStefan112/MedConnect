import Scheduler from '@/components/Scheduler/Scheduler'
import React from 'react'

export default function AddAppointment() {
  return (
    <div className='flex flex-row justify-between w-full'>
      <Scheduler />
      <Scheduler />
      <Scheduler />
    </div>
  )
}
