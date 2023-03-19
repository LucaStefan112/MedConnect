import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

export default function SearchBar({ className }: { className?: string }) {
  return (
    <form className={`
      flex flex-row items-center 
      shadow-md pl-4
      h-14 w-3/4 rounded-xl
      hover:cursor-pointer 
      bg-blue-50
      ${className}
    `}>
      <input className='
        w-full h-full
        bg-blue-50
        outline-none
        text-blue-900'
        placeholder='Search appointment'
      />
      <SearchIcon
        className='
        hover:bg-blue-100
        p-3 rounded-full;
        h-14 w-14
        rounded-xl        
        '
        color='primary'
      />
    </form>
  )
}
