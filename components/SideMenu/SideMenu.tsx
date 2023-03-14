import { Routes } from '@/utils/Routes'
import React from 'react'
import SideMenuButton from './SideMenuButton'

export default function SideMenu() {

  return (
    <div className="flex flex-col w-36 h-10 bg-gray-800">
      <SideMenuButton path={Routes.HOME} name='Home' />
      <SideMenuButton path={Routes.USER} name='My account' />
      <SideMenuButton path={Routes.APPOINTMENTS} name='Appointments' />
      <SideMenuButton path={Routes.ANALYSES} name='Analyses' />
    </div>
  )
}
