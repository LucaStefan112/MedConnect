import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SideMenuButton ({path, name} : {path: string, name: string}) {
  const { pathname } = useRouter ();

  return (
    <div className={`
      flex flex-col justify-between
      w-full h-1/4
      text-white text-center text-side_menu_font_size
      rounded-xl
      ${ pathname === path ? 'bg-blue_5' : 'bg-blue_4'}`}
    >
      <Link href={ path } className='
        flex flex-col justify-center
        w-full h-full'
      >
        { name }
      </Link>
    </div>
  )
}