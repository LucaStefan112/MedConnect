import { TextField } from '@mui/material'
import React from 'react'

export default function UserForm() {
  return (
    <form className='flex flex-row w-full justify-evenly h-full items-center'>
      <div className='user_form_column'>
        <label>First Name</label>
        <input type='text' className='input_field' />
        <input type='text' className='input_field' />
        <input type='text' className='input_field' />
        <input type='text' className='input_field' />
        <input type='text' className='input_field' />
      </div>
      <div className='user_form_column'>
        <input type='text' className='input_field' />
        <input type='text' className='input_field' />
        <input type='text' className='input_field' />
        <input type='text' className='input_field' />
        <input type='text' className='input_field' />
      </div>
      <div className='user_form_column'>
        <input type='text' className='input_field' />
        <input type='text' className='input_field' />
        <input type='text' className='input_field' />
        <input type='text' className='input_field' />
        <input type='text' className='input_field' />
      </div>
    </form>
  )
}
