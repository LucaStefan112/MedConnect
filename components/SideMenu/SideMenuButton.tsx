import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function SideMenuButton({path, name} : {path: string, name: string}) {

  const { pathname } = useRouter();
  return (
      <div className={`flex flex-col w-100 ${ pathname === path ? 'bg-blue-400' : 'bg-blue-700' }`}>
        <Link href={path}>{name}</Link>
      </div>
  )
}
