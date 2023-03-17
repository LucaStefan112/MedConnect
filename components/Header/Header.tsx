import React from 'react';
import { Routes } from '@/utils/Routes';
import SignInUpButton from './SignInUpButton';
import applicationLogo from "./../../assets/images/application_logo.png";



export default function Header ()
{
  return (

    <div className = 'flex flex-col'>

    
        <img src = {applicationLogo} alt = "Application Logo" />

        <SignInUpButton path = {Routes.SIGNUP} name = 'SIGN UP' />
        <SignInUpButton path = {Routes.SIGNIN} name = 'SIGN IN' />

    </div>

  )
}