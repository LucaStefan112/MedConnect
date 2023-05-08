import React from "react";
import Routes from "@/utils/Routes";
import SideMenuButton from "./SideMenuButton";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HiveOutlinedIcon from "@mui/icons-material/HiveOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";


export default function CodSideMenu() {
  const links = [
    {
      key: 0,
      name: "Home",
      path: Routes.HOME,
      icon: <HomeOutlinedIcon className="h-16 w-16" />,
    },
    {
      key: 1,
      name: "Calendar",
      path: Routes.APPOINTMENTS,
      icon: <CalendarMonthOutlinedIcon className="h-16 w-16" />,
    },
    {
      key: 2,
      name: "All patients",
      path: Routes.MY_ACCOUNT,
      icon: <GroupsIcon className="h-16 w-16" />,
    },
    {
      key: 3,
      name: "My schedule",
      path: Routes.SCHEDULE,
      icon: <LocalHospitalIcon className="h-16 w-16" />,
    },
  ];

  return (
    <div
      className="
      flex flex-col justify-between 
      w-32 ml-10
      bg-blue-400
      rounded-xl"
    >
      {links.map(({ path, name, key, icon }) => (
        <SideMenuButton path={path} name={name} key={key} icon={icon} />
      ))}
    </div>
  );
}
