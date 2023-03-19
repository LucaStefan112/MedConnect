import React from 'react';
import { Routes } from '@/utils/Routes';
import SideMenuButton from './SideMenuButton';

export default function SideMenu () {
  const links = [
    { name: 'Home', path: Routes.HOME },
    { name: 'My account', path: Routes.MY_ACCOUNT },
    { name: 'Appointments', path: Routes.APPOINTMENTS },
    { name: 'Analyses', path: Routes.ANALYSES }
  ];  

  return (
    <div className='
      flex flex-col justify-between 
      w-36 h-screen ml-2
      bg-blue_4
      rounded-xl'
    >
      {
        links.map(({ path, name }) => (
          <SideMenuButton path={ path } name={ name } />
        ))
      }
    </div>
  )
}