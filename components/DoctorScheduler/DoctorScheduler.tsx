import React from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';

export default function DoctorScheduler () {
  const router = useRouter();
  const [doctorIntervals, setDoctorsInterval] = React.useState<any>(
    {
      monday: [
        { interval: new Date(2021, 10, 1, 9, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 9, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 10, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 10, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 11, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 11, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 12, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 12, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 13, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 13, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 14, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 14, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 15, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 15, 30, 0), available: true }
      ],
      tuesday: [
        { interval: new Date(2021, 10, 1, 9, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 9, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 10, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 10, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 11, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 11, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 12, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 12, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 13, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 13, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 14, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 14, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 15, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 15, 30, 0), available: true }
      ],
      wednesday: [
        { interval: new Date(2021, 10, 1, 9, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 9, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 10, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 10, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 11, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 11, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 12, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 12, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 13, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 13, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 14, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 14, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 15, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 15, 30, 0), available: true }
      ],
      thursday: [
        { interval: new Date(2021, 10, 1, 9, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 9, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 10, 0, 0), available: false },
        { interval: new Date(2021, 10, 1, 10, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 11, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 11, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 12, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 12, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 13, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 13, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 14, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 14, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 15, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 15, 30, 0), available: true }
      ],
      friday: [
        { interval: new Date(2021, 10, 1, 9, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 9, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 10, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 10, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 11, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 11, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 12, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 12, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 13, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 13, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 14, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 14, 30, 0), available: true },
        { interval: new Date(2021, 10, 1, 15, 0, 0), available: true },
        { interval: new Date(2021, 10, 1, 15, 30, 0), available: true }
      ],
    }
  );

  const selectInterval = (day: String, thisIndex: number) => {
    setDoctorsInterval((prevDoctorInterval: any) => ({
      ...prevDoctorInterval,
      [day as keyof typeof doctorIntervals]: prevDoctorInterval[day as keyof typeof doctorIntervals].map((interval: any, index: number) => {
        if (index === thisIndex) {
          return { ...interval, available: !interval.available }
        }
        return interval;
      })
    }));
  }

  const saveJson = () => {
    //put doctorInterval in json object
    const json = JSON.stringify(doctorIntervals);
    //print json object in console
    console.log(doctorIntervals);
  }

  return (
    <div className='w-full h-10 flex flex-row justify-evenly mt-6'>
      {
        // iterate trough doctorIntervals attributes and print them
        Object.keys(doctorIntervals).map((day: String) => (
          <div className='w-52 flex flex-col text-center'>
            <h1 className='text-2xl text-white border-b-2 w-52 bg-blue-300'>
              { day.charAt(0).toUpperCase() + day.slice(1) }
            </h1>
            <div className='flex flex-col justify-center w-full items-center bg-blue-300'>
            {
              doctorIntervals[day as keyof typeof doctorIntervals].map((interval: any, index: number) => (
                <div className={
                  `w-full flex justify-evenly h-10 items-center border-b-2 cursor-pointer
                  ${interval.available ? 'bg-blue-300' : 'bg-white'}
                  `}
                  onClick={() => selectInterval(day, index)}
                >
                  <p className='text-xl'>
                    { interval.interval.getHours() }:{ interval.interval.getMinutes() }
                  </p>
                </div>
              ))
            }
          </div>
          </div>

          
        ))
      }
       <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=> saveJson()}>
        Save
        </button>
    </div>
  )
}