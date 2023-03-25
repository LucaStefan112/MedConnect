import React from "react";
import PatientInfo from "@/components/PatientInfo/PatientInfo";
import { useRouter } from "next/router";
import path from "path";


class Patient {
  firstName: String;
  lastName: String;
  birthDay: String;
  sex: String;
  email: String;
  phoneNumber: String;
  address: String;
  constructor(
    firstName: String,
    lastName: String,
    birthDay: String,
    sex: String,
    email: String,
    phoneNumber: String,
    address: String
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDay = birthDay;
    this.sex = sex;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
}

export default function PatientInfoPage() {
  const router = useRouter();
  const queryString = router.query;
  console.log(queryString.name);
  // split the queryString into firstName and lastName with '-'
  let nameArray = queryString.name?.toString().split("-");
  console.log(nameArray);

  if(nameArray == undefined) {
    nameArray = ["undefined", "undefined"];
  }


  const patient = new Patient(
    nameArray[0],
    nameArray[1],
    "25-06-1995",
    "male",
    "a@gmail.com",
    "071111111",
    "B Street, NY, USA"
  );

  return (
    <div className="flex flex-col w-full rounded-xl">
      <PatientInfo patient={patient} />
    </div>
  );
}
