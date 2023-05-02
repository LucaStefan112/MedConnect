import React from 'react';
import UserForm from '@/components/UserForm/UserForm';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';

export default function Profile() {
  return (
    <div className='main_page'>
      <div className='
        w-89_percent flex flex-row items-center justify-between 
        mb-10 border-b-8 border-blue-500'
      >
        <PersonIcon className ='
            h-24 w-24
            bg-blue-50
            hover:bg-blue-100
            rounded-xl
            drop-shadow-md
            mb-6'
            color = 'primary'
        />
        <Button className = 'main_button h-10 w-20 text-lg'>Save</Button>
      </div>
      <UserForm />
    </div>
  )
}
