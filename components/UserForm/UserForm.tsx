import { TextField } from '@mui/material'
import React from 'react'

export default function UserForm() {
  return (
    <form className='flex flex-row w-full justify-evenly h-full items-center'>
      <div className='user_form_column'>
        <label>First Name</label>
        <input type='text' className='input_field' />
        <label>Last Name</label>
        <input type='text' className='input_field' />
        <label>CNP</label>
        <input type='number' className='input_field' />
        <label>Birth Date</label>
        <input type='date' className='input_field' />
        <label>Sex</label>
        <select className='input_field'>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
          <option>Prefere Not To Say</option>
        </select>
      </div>
      <div className='user_form_column'>
        <label>Citizenship</label>
        <input type='text' className='input_field' />
        <label>Country</label>
        <input type='text' className='input_field' />
        <label>County</label>
        <input type='text' className='input_field' />
        <label>City</label>
        <input type='text' className='input_field' />
        <label>Complete Adress</label>
        <input type='text' className='input_field' />
      </div>
      <div className='user_form_column'>
        <label>Phone Number</label>
        <input type='number' className='input_field' />
        <label>Email</label>
        <input type='email' className='input_field' />
        <label>Marital Status</label>
        <input type='text' className='input_field' />
        <label>Children</label>
        <input type='text' className='input_field' />
        <label>Emergency Contact</label>
        <input type='text' className='input_field' />
      </div>
    </form>
  )
}
