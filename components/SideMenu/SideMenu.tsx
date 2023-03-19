import React from 'react';
import { Routes } from '@/utils/Routes';
import SideMenuButton from './SideMenuButton';

export default function SideMenu () {
  const links = [
    { name: 'Home', path: Routes.HOME, key: 0 },
    { name: 'My account', path: Routes.MY_ACCOUNT, key: 1 },
    { name: 'Appointments', path: Routes.APPOINTMENTS, key: 2 },
    { name: 'Analyses', path: Routes.ANALYSES, key: 3 }
  ];  

  return (
    <div className='
      flex flex-col justify-between 
      w-32 h-screen ml-2
      bg-blue_4
      rounded-xl'
    >
      {
        links.map(({ path, name, key }) => (
          <SideMenuButton path={ path } name={ name } key={ key } />
        ))
      }
    </div>
  )
}