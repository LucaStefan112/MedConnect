import React from 'react';
import MyAccountForm from '@/components/MyAccount/MyAccountForm';



export default function MyAccountBody ()
{
  return (

    <div className = 'flex flex-row items-center justify-between'>

      <MyAccountForm />
      <MyAccountForm />
      <MyAccountForm />
    
    </div>

  )
}
