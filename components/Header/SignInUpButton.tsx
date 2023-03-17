import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';



export default function SignInUpButton ({path, name} : {path: string, name: string})
{
  const { pathname } = useRouter ();

  return (

    <div>

      <Link href = {path}>
        {name}
      </Link>

    </div>
  
  )
}