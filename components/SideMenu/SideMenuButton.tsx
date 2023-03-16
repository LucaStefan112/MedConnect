import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SideMenuButton ({path, name} : {path: string, name: string}) {
  const { pathname } = useRouter ();

  return (
    <div className={`
      flex flex-col justify-center
      w-100 h-1/4 
      text-white text-center text-side_menu_font_size
      rounded-xl
      cursor-pointer
      ${ pathname === path && 'bg-blue_5'}`}
    >
      <Link href={ path }>
        { name }
      </Link>
    </div>
  )
}