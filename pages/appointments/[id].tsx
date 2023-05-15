import UserService from '../../services/user.service';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

export default function Appointment() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if(id && typeof id === 'string') {
      UserService.getAppointment(id).then((res) => {
        console.log(res);
      });
    }
  }, []);

  return (
    <div className='main_page'>
      
    </div>
  )
}
