import { IGetAppointmentResponse } from '@/services/response.interfaces';
import UserService, { IAppointment } from '@/services/user.service';
import DateTimeParser from '@/utils/DateTimeParser';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function Appointment() {
  const router = useRouter();
  const { id } = router.query;
  const [appointment, setAppointment] = useState<IAppointment | null>(null);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    UserService.getAppointment(String(id)).then((res: IGetAppointmentResponse) => {
      if(res.success && res.appointment){
        setAppointment(res.appointment);
        setMessage(res.appointment.message? res.appointment.message : '');
      } else {
        console.log(res.message);
      }
    });
  }, []);

  const sendMessage = () => {
    UserService.setAppointmentMessage(String(id), message).then((res: IGetAppointmentResponse) => {
      console.log(res.message);
    });
    }

  return (
    <div className='main_page'>
      {appointment && <div className='flex flex-row justify-evenly w-full'>
        <div className='bg-blue-200 rounded-2xl p-5'>
          <p className='text-lg m-5'>Code: {appointment._id}</p>
          <p className='text-lg m-5'>
            Date and time: {
              DateTimeParser.parseDate(new Date(Date.parse(String(appointment.date)))) + ' at ' +
              DateTimeParser.parseTime(new Date(Date.parse(String(appointment.date))))
            }
          </p>
          <p className='text-lg m-5'>Specialisation: {appointment.specialisation}</p>
          <p className='text-lg m-5'>Doctor: {appointment.doctor.firstName} {appointment.doctor.lastName}</p>
          <p className='text-lg m-5'> Doctor contact: {appointment.doctor.phoneNumber}</p>
        </div>

        <div className='bg-blue-200 rounded-2xl p-5 w-1/3 h-full flex flex-col'>
          <textarea className='
            w-full h-full p-3 rounded-2xl
            focus:outline-none
            resize-none
            outline-none' 
            placeholder='Write your message here...'
            defaultValue={message}
            onChange={(e) => setMessage(e.target.value)}
            >
          </textarea>
          <button className='bg-blue-500 rounded-2xl p-5 text-white font-medium mt-4' 
            onClick={() => sendMessage()}>
            Send
          </button>
        </div>
      </div> }
    </div>
  )
}
