import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';



export default function SignInUpLogOutButton ({path, name} : {path: string, name: string})
{
  const { pathname } = useRouter ();

  return (

    <button className = 'rounded-lg w-28 text-white bg-blue_5 h-11 text-lg'>

      <Link href = {path}>
        {name}
      </Link>

    </button>
  
  )
}