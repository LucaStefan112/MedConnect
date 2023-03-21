import React from 'react';
import MyAccountHeader from '@/components/MyAccount/MyAccountHeader';
import MyAccountBody from '@/components/MyAccount/MyAccountBody';
import UserForm from '@/components/UserForm/UserForm';

export default function Profile() {
  return (
    <div className = 'main_page'>
      <div className = 'w-full ml-20 mr-20'>
        <MyAccountHeader />
        <MyAccountBody />
      </div>
    </div>
  )
}
