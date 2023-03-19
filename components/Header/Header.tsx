import React from 'react';
import { Routes } from '@/utils/Routes';
import SignInUpLogOutButton from './SignInUpLogOutButton';
import Images from './../../utils/Images';
import Image from 'next/image';



export default function Header ()
{
  return (

    <header className = 'flex justify-between bg-white'>

        <Image src = {Images.APPLICATION_LOGO} alt = {'Application Logo'} height = '120' />

        <section className = 'flex justify-evenly items-center w-80'>

          <SignInUpLogOutButton path = {Routes.LOGOUT} name = 'LOG OUT' />
          <Image src = {Images.USER_PROFILE_PICTURE} alt = {'User Profile Picture'} height = '80' width = '80' />

        </section>

    </header>

  )
}