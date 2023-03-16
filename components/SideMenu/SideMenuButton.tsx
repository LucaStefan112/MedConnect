import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Routes } from '@/utils/Routes';



export default function SideMenuButton ({path, name} : {path: string, name: string})
{
  const { pathname } = useRouter ();

  return (

    <div className = {`
      flex flex-col justify-center
      w-100 h-1/4 
      text-white text-center text-side_menu_font_size
      ${ path === Routes.HOME ? 'rounded-t-xl' : ''}
      ${ path === Routes.ANALYSES ? 'rounded-b-xl' : ''}
      ${ pathname === path ? 'bg-side_menu_darker_blue' : 'bg-side_menu_lighter_blue' }`}>

      <Link href = {path}>
        {name}
      </Link>

    </div>
  
  )
}