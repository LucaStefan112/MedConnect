import { IGetUsersResponse } from '@/services/response.interfaces';
import UserService, { IUser } from '@/services/user.service';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react'

export interface IVerticalListProps {
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ placeholder, className }: IVerticalListProps) {
  const [persons, setPersons] = useState<IUser[]>([
    {id: 0, name: 'First_0 Last_0', email: 'person0@gmail.com'},
    {id: 1, name: 'First_1 Last_1', email: 'person1@gmail.com'},
    {id: 2, name: 'First_2 Last_2', email: 'person2@gmail.com'},
    {id: 3, name: 'First_3 Last_3', email: 'person3@gmail.com'}
  ]);

  // useEffect(() => {
  //   UserService.getUsers().then((res: IGetUsersResponse) => {
  //     if(res.success && res.users) {
  //       setPersons(res.users);
  //     } else {
  //       setPersons([]);
  //     }
  //   });
  // }, []);

  return (
    <form className={`
      flex flex-row items-center 
      shadow-md pl-4
      h-14 w-3/4 rounded-xl
      hover:cursor-pointer 
      bg-blue-50
      ${className}`}
    >
      <select className='
        bg-blue-50 outline-none 
        text-blue-900 text-lg 
        h-3/4 max-w-[10em]' 
        name='person'>
        {
          persons.map((person, index) => (
            <option key={ index } value={ person.id }>{ person.name }</option>
          ))
        }
      </select>

      <input className='
        text-blue-900 text-lg
        w-full h-full
        outline-none
        bg-blue-50 border-l-2 pl-4 ml-4
        '
        placeholder={ placeholder }
        name='search'
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
