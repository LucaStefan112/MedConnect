import UserService from '@/services/user.service';
import DateTimeParser from '@/utils/DateTimeParser';
import React, { useEffect, useState } from 'react'

export interface IUserData {
  firstName: string;
  lastName: string;
  cnp: number;
  dateOfBirth: string;
  sex?: string;
  citizenship?: string;
  country?: string;
  county?: string;
  city?: string;
  completeAddress?: string;
  phoneNumber?: number;
  email?: string;
}

export default function UserForm({saveData}: {saveData: (data: IUserData) => void}) {
  const [userData, setUserData] = useState<any>();
  
  useEffect(() => {
    UserService.getUserData().then((res) => {
      setUserData(res.user);
    });
  }, []);

  const sendData = (e: any) => {
    e.preventDefault();

    const newData = { ...userData, [e.target.name]: e.target.value };

    setUserData(newData);
    saveData(newData);
  }

  return (
    <form className='flex flex-row w-full justify-evenly h-full items-center' onChange={(e: any) => sendData(e)}>
      <div className='user_form_column'>
        <label>First Name</label>
        <input type='text' className='input_field' name='firstName' defaultValue={ userData?.firstName } />
        <label>Last Name</label>
        <input type='text' className='input_field' name='lastName' defaultValue={ userData?.lastName } />
        <label>CNP</label>
        <input type='number' className='input_field' name='cnp' defaultValue={ userData?.cnp } />
        <label>Birth Date</label>
        <input type='date' className='input_field' name='dateOfBirth' defaultValue={ userData && DateTimeParser.parseDate(new Date(Date.parse(userData.dateOfBirth))) } />
      </div>

      <div className='user_form_column'>
        <label>Country</label>
        <input type='text' className='input_field' name='country' defaultValue={ userData?.country } />
        <label>County</label>
        <input type='text' className='input_field' name='county' defaultValue={ userData?.county } />
        <label>City</label>
        <input type='text' className='input_field' name='city' defaultValue={ userData?.city } />
        <label>Complete Adress</label>
        <input type='text' className='input_field' name='completeAddress' defaultValue={ userData?.completeAddress } />
      </div>

      <div className='user_form_column'>
        <label>Citizenship</label>
        <input type='text' className='input_field' name='citizenship' defaultValue={ userData?.citizenship } />
        <label>Phone Number</label>
        <input type='text' className='input_field' name='phoneNumber' defaultValue={ userData?.phoneNumber } />
        <label>Email</label>
        <input type='email' className='input_field' name='email' defaultValue={ userData?.email } />
        <label>Sex</label>
        <input type='text' className='input_field' name='sex' defaultValue={ userData?.sex } />
      </div>
    </form>
  )
}
