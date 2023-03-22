import React from 'react';
import Routes from '@/utils/Routes';
import SideMenuButton from './SideMenuButton';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HiveOutlinedIcon from '@mui/icons-material/HiveOutlined';

export default function SideMenu () {
  const links = [
    { 
      key: 0, 
      name: 'Home', 
      path: Routes.HOME, 
      icon: <HomeOutlinedIcon className='h-16 w-16' /> 
    },
    { 
      key: 1, 
      name: 'My account', 
      path: Routes.MY_ACCOUNT, 
      icon: <AccountBoxOutlinedIcon className='h-16 w-16' /> 
    },
    { 
      key: 2, 
      name: 'Appointments', 
      path: Routes.APPOINTMENTS, 
      icon: <CalendarMonthOutlinedIcon className='h-16 w-16' /> 
    },
    { 
      key: 3, 
      name: 'Analyses', 
      path: Routes.ANALYSES, 
      icon: <HiveOutlinedIcon className='h-16 w-16' /> 
    }
  ];  

  return (
    <div className='
      flex flex-col justify-between 
      w-32 ml-10
      bg-blue-400
      rounded-xl'
    >
      {
        links.map(({ path, name, key, icon }) => (
          <SideMenuButton path={ path } name={ name } key={ key } icon={ icon } />
        ))
      }
    </div>
  )
}