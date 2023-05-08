import AppService, { ISpecialisation } from '@/services/app.service';
import DoctorService, { IDoctor } from '@/services/doctor.service';
import { IGetDoctorAvailableDaysResponse, IGetDoctorAvailableHoursResponse, IGetDoctorsResponse, IGetSpecialisationsResponse } from '@/services/response.interfaces';
import UserService, { IAppointment } from '@/services/user.service';
import Routes from '@/utils/Routes';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { addDays, setHours, setMinutes } from 'date-fns';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Scheduler() {
  const router = useRouter();
  const [appointment, setAppointment] = useState<IAppointment>({} as IAppointment);
  const [specialisations, setSpecialisations] = useState<ISpecialisation[]>([
    {id: 0, name: 'Cardiology'},
    {id: 1, name: 'Radiology'},
    {id: 2, name: 'General Medicine'},
    {id: 3, name: 'Neurology'}
  ]);
  const [doctors, setDoctors] = useState<IDoctor[]>([
    {id: 0, name: 'Doctor 0', specialisation: specialisations[0]},
    {id: 1, name: 'Doctor 1', specialisation: specialisations[1]},
    {id: 2, name: 'Doctor 2', specialisation: specialisations[2]},
    {id: 3, name: 'Doctor 3', specialisation: specialisations[3]}
  ]);
  const [availableDays, setAvailableDays] = useState<Date[]>([
    new Date(),
    addDays(new Date(), 1),
    addDays(new Date(), 2)
  ]);
  const [availableHours, setAvailableHours] = useState<Date[]>([
    setMinutes(setHours(new Date(), 9), 0),
    setMinutes(setHours(new Date(), 9), 30),
    setMinutes(setHours(new Date(), 10), 0),
  ]);

  // useEffect(() => {
  //   AppService.getSpecialisations().then((res: IGetSpecialisationsResponse) => {
  //     if(res.success && res.specialisations) {
  //       setSpecialisations(res.specialisations);
  //     } else {
  //       setSpecialisations([]);
  //     }
  //   });
  // }, []);

  const scheduleAppointment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await UserService.addApppointment(appointment);
    
    if(response.success) {
      alert('Appointment scheduled!');
      router.push(Routes.APPOINTMENTS);
    } else {
      alert('Something went wrong!');
    }
  }

  return (
  
    <form className='flex flex-row justify-around  w-full h-full p-12 rounded-2xl bg-blue-100'
    onSubmit={(e: React.FormEvent<HTMLFormElement>) => scheduleAppointment(e)}
    >
      <div className='flex flex-col justify-around w-full '>
      <div className='flex flex-row  '>
      <div className='flex flex-col justify-evenly w-full'>
        <div className='bg-blue-200 rounded'>  
          <div className=' text-3xl font-bold  p-4 pb-8'>Select a specialisation</div>
            <FormControl variant='standard' className='flex flex-col   bg-blue-200 rounded p-2' >
              <InputLabel className='p-1'>Specialisation</InputLabel>
                <Select
                  defaultValue=''
                  onChange={(e: SelectChangeEvent<string>) => {
                    const specialisation = specialisations.find((specialisation: ISpecialisation) => 
                      specialisation.id === Number(e.target.value)) || {} as ISpecialisation;
                    
                    setAppointment((appointment: IAppointment) => ({ 
                      ...appointment, 
                      specialisation
                    }));

                    // DoctorService.getDoctors(specialisation).then((res: IGetDoctorsResponse) => {
                    //   if(res.success && res.doctors) {
                    //     setDoctors(res.doctors);
                    //   } else {
                    //     setDoctors([]);
                    //   }
                    // });
                  }}
                >
                { 
                  specialisations.map((specialisation: ISpecialisation) => (
                    <MenuItem 
                      key={ specialisation.id }
                      value={ specialisation.id }
                    >
                      { specialisation.name }
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </div>

          <div className='bg-blue-200 rounded'>
            <div className=' text-3xl font-bold  p-4 pb-8'>Select a doctor</div>
              <FormControl variant='standard' className='flex flex-col  bg-blue-200 rounded p-2'>
                <InputLabel className='p-1'>Doctor</InputLabel>
                  <Select
                    defaultValue=''
                    onChange={(e: SelectChangeEvent<string>) => {
                      const doctor = doctors.find((doctor: IDoctor) => 
                        doctor.id === Number(e.target.value)) || {} as IDoctor;
                      
                      setAppointment((appointment: IAppointment) => ({ 
                        ...appointment, 
                        doctor
                      }));

                      // DoctorService.getDoctorAvailableDays(doctor).then((res: IGetDoctorAvailableDaysResponse) => {
                      //   if(res.success && res.availableDays) {
                      //     setAvailableDays(res.availableDays);
                      //   } else {
                      //     setAvailableDays([]);
                      //   }
                      // });
                    }}
                  >
                  { 
                    doctors.map((doctor: IDoctor) => (
                      <MenuItem 
                        key={ doctor.id }
                        value={ doctor.id }
                      >
                        { doctor.name }
                      </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
      </div>
      </div>



      <div className='flex flex-col justify-evenly p-10 '>
        
      <DatePicker inline
        includeDates={ [...availableDays] }
        onChange={(date: Date) => {
          setAppointment((appointment: IAppointment) => ({
            ...appointment,
            date: new Date(date)
          }));

          // DoctorService.getDoctorAvailableHours(appointment.doctor, date).then((res: IGetDoctorAvailableHoursResponse) => {
          //   if(res.success && res.availableHours) {
          //     setAvailableHours(res.availableHours);
          //   } else {
          //     setAvailableHours([]);
          //   }
          // });
        }} 
      />

      <FormControl variant='standard' className='flex flex-col  bg-blue-200 rounded p-2 pt-5 space-y-1'>
        <InputLabel className='p-1'>Hour</InputLabel>
          <Select
            defaultValue=''
            onChange={(e: SelectChangeEvent<string>) => {
              const hour = availableHours.find((hour: Date) =>
                hour.getTime() === Number(e.target.value)) || new Date();

              setAppointment((appointment: IAppointment) => ({
                ...appointment,
                hour
              }));
            }}
          >
            {
              availableHours.map((hour: Date) => (
                <MenuItem
                  key={ hour.getTime() }
                  value={ hour.getTime() }
                >
                  { hour.getHours() + ':' + hour.getMinutes() }
                </MenuItem>
              ))
            }
          </Select>
      </FormControl>
      
      </div>
      </div>


      <Button variant='contained' className='mt-12 bg-blue-500' type='submit'>Schedule</Button>
      </div>
    </form>
  );
}