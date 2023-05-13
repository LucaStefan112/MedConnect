import React from 'react'

export default function () {
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
        <li className = 'ml-16 mr-12 list-disc text-justify m-2'>
          Our platform offers you the possibility to schedule appointments
        </li>
        <li className = 'ml-16 mr-12 list-disc text-justify m-2'>
          You cand easily schedule an appointment with a doctor of your choice
        </li>
        <li className = 'ml-16 mr-12 list-disc text-justify m-2'>
          You only need to create an account and you can start scheduling appointments 
        </li>
      </ul>
    </div>
  )
}
