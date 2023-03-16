import React from 'react';
import { Routes } from '@/utils/Routes';
import SideMenuButton from './SideMenuButton';



export default function SideMenu ()
{
  return (

    <div className = {`
    flex flex-col
    w-36 h-screen
    rounded-xl
    bg-blue_4`
    }>

      <SideMenuButton path={Routes.HOME} name='Home' />
      <SideMenuButton path={Routes.USER} name='My Account' />
      <SideMenuButton path={Routes.APPOINTMENTS} name='Appointments' />
      <SideMenuButton path={Routes.ANALYSES} name='Analyses' />
    
    </div>

  )
}