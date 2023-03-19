import React from 'react';
import { Routes } from '@/utils/Routes';
import SignInUpButton from './SignInUpButton';
import Images from './../../utils/Images';
import Image from 'next/image';



export default function Header ()
{
  return (

    <header className = 'flex bg-blue_1'>

        <Image src = {Images.APPLICATION_LOGO} alt = {'Application Logo'} height = '120' />

        <section className = 'flex'>

          <SignInUpButton path = {Routes.SIGNUP} name = 'SIGN UP' />
          <SignInUpButton path = {Routes.SIGNIN} name = 'SIGN IN' />

        </section>

    </header>

  )
}