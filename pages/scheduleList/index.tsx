import SearchBar from "@/components/SearchBar/SearchBar";
import VerticalList from "@/components/VerticalList/VerticalList";
import { IGetAppointmentsResponse } from "@/services/response.interfaces";
import UserService, { IAppointment } from "@/services/user.service";
import DateTimeParser from "@/utils/DateTimeParser";
import Routes from "@/utils/Routes";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Appointments() {
  const router = useRouter();

  const [appointments, setAppointments] = useState<any[]>([
    {
      id: 1,
      specialisation: { name: "-" },
      doctor: { name: "-" },
      date: new Date("2021-10-11"),
    },
    {
      id: 2,
      specialisation: { name: "Specialisation" },
      doctor: { name: "Alex Valcu" },
      date: new Date("2021-10-12"),
    },
    {
      id: 3,
      specialisation: { name: "Specialisation" },
      doctor: { name: "Mihai Crintea" },
      date: new Date("2021-10-13"),
    },
    {
      id: 4,
      specialisation: { name: "Specialisation" },
      doctor: { name: "Albert Niculescu" },
      date: new Date("2021-10-14"),
    },
    {
      id: 5,
      specialisation: { name: "-" },
      doctor: { name: "-" },
      date: new Date("2021-10-15"),
    },
    {
      id: 6,
      specialisation: { name: "Specialisation" },
      doctor: { name: "Lucian Georgescu" },
      date: new Date("2021-10-16"),
    },
    {
      id: 7,
      specialisation: { name: "Specialisation" },
      doctor: { name: "Tudor Grecu" },
      date: new Date("2021-10-17"),
    },
    {
      id: 8,
      specialisation: { name: "Specialisation" },
      doctor: { name: "Razvan Bucur" },
      date: new Date("2021-10-18"),
    },
    {
      id: 9,
      specialisation: { name: "Specialisation" },
      doctor: { name: "Cosmin Ionescu" },
      date: new Date("2021-10-19"),
    },
  ]);

  const patientName = [
    "",
    "Marian-Popescu",
    "Alex-Valcu",
    "Mihai-Crintea",
    "Albert-Niculescu",
    "Maria-Georgescu",
    "Lucian-Georgescu",
    "Tudor-Grecu",
    "Razvan-Bucur",
    "Cosmin-Ionescu"
  ];
  // useEffect(() => {
  //   UserService.getAppointments().then((res: IGetAppointmentsResponse) => {
  //     if(res.success && res.appointments){
  //       setAppointments(res.appointments);
  //     } else {
  //       console.log(res.message);
  //     }
  //   });
  // }, []);

  return (
    <div className="main_page">
      <div className="flex flex-row items-center justify-between w-full h-14">
        <Link href={Routes.ADD_SCHEDULE}>
          <Button className="main_button text-lg h-14">New Schedule</Button>
        </Link>
      </div>
      <p className="text-4xl mt-7 mb-7 text-blue-600 w-full">My Schedule</p>
      <VerticalList
        className="appointments_list_max_height"
        list={appointments.map((appointment: IAppointment) => {
          return {
            title:
              appointment.specialisation.name +
              " with " +
              appointment.doctor.name +
              " on " +
              DateTimeParser.parseDate(appointment.date) +
              " at " +
              DateTimeParser.parseTime(appointment.date),
            onClick: () =>
              appointment.id && router.push(Routes.APPOINTMENT("name=" + patientName[appointment.id])),
          };
        })}
      />
    </div>
  );
}
