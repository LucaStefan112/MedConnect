import DateTimeParser from '@/utils/DateTimeParser';
import React from 'react'

export interface IUserData {
  firstName: string;
  lastName: string;
  cnp: number;
  birthDate: Date;
  sex?: string;
  citizenship?: string;
  country?: string;
  county?: string;
  city?: string;
  completeAdress?: string;
  phoneNumber?: number;
  email?: string;
  maritalStatus?: string;
  children?: IUserData[];
  emergencyContact?: string;
}

export interface IProps {
  user?: IUserData
  isChild?: boolean;
}

export default function UserForm({ user, isChild }: IProps) {
  return (
    <form className='flex flex-row w-full justify-evenly h-full items-center'>
      <div className='user_form_column'>
        <label>First Name</label>
        <input type='text' className='input_field' name='firstName' value={ user?.firstName } />
        <label>Last Name</label>
        <input type='text' className='input_field' name='lastName' value={ user?.lastName } />
        <label>CNP</label>
        <input type='number' className='input_field' name='cnp' value={ user?.cnp } />
        <label>Birth Date</label>
        <input type='date' className='input_field' name='dateOfBirth' value={ user && DateTimeParser.parseDate(user.birthDate) } />
        <label>Sex</label>
        <select className='input_field' name='sex' value={ user?.sex }>
          <option>Prefer Not To Say</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      <div className='user_form_column'>
        <label>Citizenship</label>
        <input type='text' className='input_field' name='citizenship' value={ user?.citizenship } />
        <label>Country</label>
        <input type='text' className='input_field' name='country' value={ user?.country } />
        <label>County</label>
        <input type='text' className='input_field' name='county' value={ user?.county } />
        <label>City</label>
        <input type='text' className='input_field' name='city' value={ user?.city } />
        <label>Complete Adress</label>
        <input type='text' className='input_field' name='completeAdress' value={ user?.completeAdress } />
      </div>

      { !isChild && (
      <div className='user_form_column'>
        <label>Phone Number</label>
        <input type='text' className='input_field' name='phoneNumber' value={ user?.phoneNumber } />
        <label>Email</label>
        <input type='email' className='input_field' name='email' value={ user?.email } />
        <label>Marital Status</label>
        <select className='input_field' name='maritalStatus' value={ user?.maritalStatus }>
          <option value='none'>Prefer not to say</option>
          <option value='single'>Single</option>
          <option value='married'>Married</option>
        </select>
      </div>
      )}
    </form>
  )
}
