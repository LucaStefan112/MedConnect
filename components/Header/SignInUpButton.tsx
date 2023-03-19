import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';



export default function SignInUpButton ({path, name} : {path: string, name: string})
{
  const { pathname } = useRouter ();

  return (

    <button className = 'text-white bg-blue_5 h-11'>

      <Link href = {path}>
        {name}
      </Link>

    </button>
  
  )
}