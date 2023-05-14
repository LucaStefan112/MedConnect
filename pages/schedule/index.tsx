import SearchBar from '../../components/SearchBar/SearchBar'
import VerticalList from '../../components/VerticalList/VerticalList'
import { IGetAppointmentsResponse } from '../../services/response.interfaces';
import UserService, { IAppointment } from '../../services/user.service';
import DateTimeParser from '../../utils/DateTimeParser';
import Routes from '../../utils/Routes';
import { Button } from '@mui/material'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Scheduler from '../../components/Scheduler/Scheduler'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { addDays, setHours, setMinutes } from 'date-fns';
import DoctorScheduler from '../../components/DoctorScheduler/DoctorScheduler';


export default function Appointments() {
  const router = useRouter();

  return (
    <div className='main_page'>
      <div className='flex flex-row items-center justify-between w-full h-14'>
        <DoctorScheduler></DoctorScheduler>
      </div>
    </div>
  )
}
