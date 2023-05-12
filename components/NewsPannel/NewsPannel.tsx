import { IGetUserNewsResponse } from '@/services/response.interfaces';
import UserService, { IUserNews } from '@/services/user.service';
import React, { useEffect } from 'react'

export default function () {
  const [news, setNews] = React.useState<IUserNews[]>([]);

  // useEffect(() => {
  //   UserService.getNews().then((res: IGetUserNewsResponse) => {
  //     if(res.success && res.news){
  //       setNews(res.news);
  //     } else {
  //       console.log(res.message);
  //     }
  //   });
  // }, []);

  return (
    <div className='
      flex flex-col items-center 
      bg-blue-600 w-2/3 h-80
      text-white text-center text-2xl
      rounded-xl padding-10 shadow-xl'
    >
      <p className='
        w-11/12 font-bold text-3xl shadow-2xl
        pb-2 pt-2 border-b-2 border-b-blue-200'
      >
        News
      </p>
      <ul className='list-disc list-inside'>
        <li>
          Create a new appointment right now using the New Appointment feature!
        </li>
        <li>
          Please make sure to update your profile with the latest data and credentials!
        </li>
        <li>
          Check out the new specialized doctors joining our network. Find a specialist for your need!
        </li>
      </ul>
    </div>
  )
}
