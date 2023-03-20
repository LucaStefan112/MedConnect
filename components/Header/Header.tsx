import React from 'react';
import Images from './../../utils/Images';
import Image from 'next/image';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';

export default function Header () {
  return (
    <header className='
      flex flex-row items-center justify-between 
      w-screen h-36 mb-10 
      border-b-2 border-blue-100'
    >
      <div className='h-full relative w-80 ml-10'>
        <Image
          fill
          src={ Images.APPLICATION_LOGO } 
          alt={'Application Logo'} 
        />
      </div>
      <div className='flex justify-between items-center w-64 mr-10'>
        <Button className='main_button h-12 w-28 text-lg'>Log Out</Button>
        <PersonIcon className='
          h-24 w-24
          bg-blue-50
          hover:bg-blue-100
          rounded-xl
          drop-shadow-md'
          color='primary'
        />
      </div>
    </header>

  )
}