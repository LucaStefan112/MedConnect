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

    <div className ='
      flex flex-col items-center 
      bg-blue-600 w-2/3 h-80
      text-white text-center text-2xl
      rounded-xl padding-10 mr-10 shadow-xl'
    >
      
      <p className ='
        w-11/12 font-bold text-3xl shadow-2xl
        pb-2 pt-2 border-b-2 border-b-blue-200'
      >
        News
      </p>

      <ul>
        
        <li className = 'ml-16 mr-12 list-disc text-justify'>
          Update 25.03.2023: You can now make appointments to our
          new dermatologist, Doctor Vladislav Gregory.
        </li>

        <li className = 'ml-16 mr-12 list-disc text-justify'>
          Update 21.03.2023: One year passed since your last medical
          analyses. Make an appointment right now to be on track!
        </li>

        <li className = 'ml-16 mr-12 list-disc text-justify'>
          Update 19.03.2023: It looks like you never had a heart control.
          Considering your age, it is recommended to check your heart every
          two years. Make an appointment to our cardiologist, Doctor George Michael. 
        </li>

      </ul>

    </div>

  )
}
