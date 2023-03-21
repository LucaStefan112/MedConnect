import React from 'react';
import MyAccountHeader from '@/components/MyAccount/MyAccountHeader';
import MyAccountBody from '@/components/MyAccount/MyAccountBody';



export default function Profile ()
{
  return (

    <div className = 'w-full ml-20 mr-20'>

      <MyAccountHeader />
      <MyAccountBody />

    </div>

  )
}
