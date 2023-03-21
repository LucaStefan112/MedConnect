import React from 'react'
import Image from "next/image"
import SideMenu from '../components/SideMenu/SideMenu'
import userbox from '../public/icons-folder/User_box_duotone.png'

export default function Home() {
  return (
    <div>
      <Image src={userbox} alt="user"></Image>
    </div>
  )
}
