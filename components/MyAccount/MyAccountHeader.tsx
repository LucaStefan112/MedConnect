import React from 'react';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';



export default function MyAccountHeader ()
{
  return (

    <div className = 'flex flex-row items-center justify-between mb-10 border-b-8 border-blue-500' >

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

  )
}