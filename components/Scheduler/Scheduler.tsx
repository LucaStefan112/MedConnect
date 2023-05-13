import AppService, { ISpecialisation } from '@/services/app.service';
import AuthService from '@/services/auth.service';
import DoctorService, { IDoctor } from '@/services/doctor.service';
import { 
  IGetDoctorBusyIntervalsResponse,
  IGetDoctorsResponse,
  IGetSpecialisationsResponse } from '@/services/response.interfaces';
import UserService, { IAppointment } from '@/services/user.service';
import DateTimeParser from '@/utils/DateTimeParser';
import Routes from '@/utils/Routes';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { addDays, set, setHours, setMinutes } from 'date-fns';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Scheduler() {
  const router = useRouter();
  const [appointment, setAppointment] = useState<IAppointment>({} as IAppointment);
  const [specialisations, setSpecialisations] = useState<ISpecialisation[]>([]);
  const [doctors, setDoctors] = useState<IDoctor[]>([]);
  const [availableDays, setAvailableDays] = useState<Date[]>([]);
  const [availableHours, setAvailableHours] = useState<Date[]>([]);
  const [busyIntervals, setBusyIntervals] = useState<Date[]>([]);

  const defaultDays: Date[] = [];

  for(let i = 0; i < 60; i++) {
    defaultDays.push(addDays(new Date(), i));
  }

  function getDefaultIntervalsForDate(date: Date) {
    const defaultIntervals: Date[] = [];

    for(let i = 9; i < 16; i++) {
      defaultIntervals.push(setMinutes(setHours(date, i), 0));
      defaultIntervals.push(setMinutes(setHours(date, i), 30));
    }

    return defaultIntervals;
  }

  useEffect(() => {
    setAvailableDays(defaultDays);

    AppService.getSpecialisations().then((res: IGetSpecialisationsResponse) => {
      if(res.success && res.specialisations) {
        setSpecialisations(res.specialisations);
      } else {
        setSpecialisations([]);
      }
    });
  }, []);

  const scheduleAppointment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await UserService.addApppointment(appointment);
    
    console.log(JSON.stringify(appointment));

    if(response.success) {
      alert('Appointment scheduled!');
      router.push(Routes.APPOINTMENTS);
    } else {
      alert('Something went wrong!');
    }
  }

  function sendAppointment(e: any) {
    e.preventDefault();

    UserService.addApppointment(appointment).then((res: any) => {
      if(res.success) {
        router.push(Routes.APPOINTMENTS);
      } else {
        alert('Something went wrong!');
      }
    });
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
            <FormControl variant='standard' className='flex flex-col   bg-blue-200 rounded p-2'>
              <InputLabel className='p-1'>Specialisation</InputLabel>
                <Select
                  defaultValue=''
                  onChange={(e: SelectChangeEvent<string>) => {
                    const specialisation = specialisations.find((specialisation: ISpecialisation) => 
                      specialisation._id === e.target.value) || {} as ISpecialisation;
                    
                    setAppointment((appointment: IAppointment) => ({ 
                      ...appointment, 
                      specialisation
                    }));

                    DoctorService.getDoctors(specialisation).then((res: IGetDoctorsResponse) => {
                      if(res.success && res.doctors) {
                        setDoctors(res.doctors);
                      } else {
                        setDoctors([]);
                      }
                    });
                  }}
                >
                { 
                  specialisations.map((specialisation: ISpecialisation) => (
                    <MenuItem 
                      key={ specialisation._id }
                      value={ specialisation._id }
                    >
                      { specialisation.name }
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </div>

          { appointment.specialisation && <div className='bg-blue-200 rounded'>
            <div className=' text-3xl font-bold  p-4 pb-8'>Select a doctor</div>
              { doctors.length === 0 ? <h1>No doctors available</h1> : 
              <FormControl variant='standard' className='flex flex-col  bg-blue-200 rounded p-2'>
                <InputLabel className='p-1'>Doctor</InputLabel>
                  <Select
                    defaultValue=''
                    onChange={(e: SelectChangeEvent<string>) => {
                      const doctor = doctors.find((doctor: IDoctor) => 
                        doctor._id === e.target.value) || {} as IDoctor;
                      
                      setAppointment((appointment: IAppointment) => ({ 
                        ...appointment, 
                        doctor
                      }));

                      DoctorService.getDoctorBusyIntervals(doctor).then((res: IGetDoctorBusyIntervalsResponse) => {
                        if(res.success && res.busyIntervals) {
                          const thisIntervals = res.busyIntervals.map((busyInterval: string) => 
                            new Date(Date.parse(busyInterval))
                          );

                          setAvailableDays(
                            defaultDays.filter((day: Date) => {
                              let count = 0;
                              thisIntervals.forEach((busyInterval: Date) => {
                                if(DateTimeParser.isSameDay(busyInterval, day)) {
                                  count++;
                                }
                              });

                              return count < 14;
                            })
                          );

                          setBusyIntervals(thisIntervals);
                        } else {
                          setAvailableDays([]);
                        }
                      });
                    }}
                  >
                  { 
                    doctors.map((doctor: IDoctor) => (
                      <MenuItem 
                        key={ doctor._id }
                        value={ doctor._id }
                      >
                        { doctor.firstName + ' ' + doctor.lastName }
                      </MenuItem>
                    ))
                  }
                </Select>
              </FormControl> }
            </div>
          }
      </div>

      <div className='flex flex-col justify-evenly p-10 '>
        
      { appointment.doctor && availableDays.length > 0 && <DatePicker inline
        includeDates={ [...availableDays] }
        onChange={(date: Date) => {
          setAppointment((appointment: IAppointment) => ({
            ...appointment,
            date: new Date(date)
          }));

          setAvailableHours(
            getDefaultIntervalsForDate(date).filter((interval: Date) => {
              const busyInterval = busyIntervals.find((busyInterval: Date) =>
                DateTimeParser.isSameDay(busyInterval, date) && DateTimeParser.isSameInterval(busyInterval, interval)
              );
              return !busyInterval;
            })
          );
        }} 
      /> }

      { appointment.date && <FormControl variant='standard' className='flex flex-col  bg-blue-200 rounded p-2 pt-5 space-y-1'>
        <InputLabel className='p-1'>Hour</InputLabel>
          <Select
            defaultValue=''
            onChange={(e: SelectChangeEvent<string>) => {
              const hour = availableHours.find((hour: Date) =>
                hour.getTime() === Number(e.target.value)) || new Date();

              setAppointment((appointment: IAppointment) => ({
                ...appointment,
                date: hour
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
      </FormControl> }
      
      </div>
    </div>
      <Button variant='contained' onClick={(e) => sendAppointment(e)} className='mt-12 bg-blue-500' type='submit'>Schedule</Button>
      </div>
    </form>
  );
}