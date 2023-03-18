import React from 'react'
import SideMenu from '../components/SideMenu/SideMenu'
import Calendar from '../components/Calendar/Calendar'

export default function Home() {
  return (
    <React.Fragment>
      <Calendar />
      <SideMenu />
    </React.Fragment>
  )
}
