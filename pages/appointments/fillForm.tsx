import Scheduler from '@/components/Scheduler/Scheduler'
import DateTimeParser from '@/utils/DateTimeParser';
import React from 'react'

export interface IUserData {
  Specialty?: string;
    startingDate?: Date;
    startingTime?: Date;
}

export interface IProps {
  user?: IUserData
  isChild?: boolean;
}


export default function AddAppointment({ user, isChild }: IProps) {
    return (
      <div className='main_page'>
        <header className='flex flex-row items-center justify-between w-full h-14 text-3xl text-blue-500'>
            Fill in the form
        </header>
        <form className='flex flex-col w-full h-full'>
            <div className='fill_form_column'>
                <div className='input_field'>
                <label className='p-3 text-xl'>Specialty</label>
                <select className='input_field' name='Specialty' value={ user?.Specialty }>
                <option>Heart</option>
                <option>Head</option>
                <option>Muscle</option>
                <option>Other</option>
                </select>
                </div>

                <div className='input_field'>
                <label className='p-3 text-xl'>Starting Date</label>
                <input className='input_field' type='date' value={ DateTimeParser.parseDate(new Date()) } />
                </div>

                <div className='input_field'>
                <label className='p-3 text-xl'>Starting Time</label>
                <input className='input_field' type='time' value={ DateTimeParser.parseTime(new Date()) } />
                </div>
            </div>
        </form>

      </div>
    )
  }