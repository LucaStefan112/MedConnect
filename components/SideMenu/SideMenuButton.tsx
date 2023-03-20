import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SideMenuButton ({ path, name, icon } : { path: string, name: string, icon: JSX.Element }) {
  const { pathname } = useRouter ();

  return (
    <div className={`
      flex flex-col justify-between
      w-full h-40
      text-white text-center text-side_menu_font_size
      rounded-xl
      ${ pathname === path ? 'bg-blue-500' : 'bg-blue-400'}`}
    >
      <Link href={ path } className='
        flex flex-col justify-center items-center
        w-full h-full'
      >
        { icon }
        { name }
      </Link>
    </div>
  )
}