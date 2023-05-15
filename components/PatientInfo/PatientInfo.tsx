import React from "react";
import AnalysesPage from "@/pages/analyses copy";
import { AnalysisRectangle } from "@/pages/analyses copy";
import { useRouter } from "next/router";

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

function showPatientInfo(patient: Patient) {
  const patientCode = Math.random().toString(36).substring(2, 30);

  return (
    <div className="bg-blue-200 rounded-xl p-3">
      <p suppressHydrationWarning>Code: {patientCode}</p>
      <p>First Name: {patient.firstName}</p>
      <p>Last Name: {patient.lastName}</p>
      <p>Birthday: {patient.birthDay}</p>
      <p>Sex: {patient.sex}</p>
      <p>
        Contact: {patient.email} {patient.phoneNumber}
      </p>
      <p>Address: {patient.address}</p>
    </div>
  );
}

export default function PatientInfo(props: any) {
  let patient1: Patient = props.patient;
  const router = useRouter();

  return (
    <div className="ml-5 mr-5 mb-3 rounded-xl">
      <h1 className="text-blue-500 font-bold text-3xl mb-3">
        Patient's Information
      </h1>
      {showPatientInfo(patient1)}
      <h1 className="text-blue-500 font-bold text-3xl mb-3 mt-3">
        Doctor's request
      </h1>
      <div className="bg-blue-200 rounded-xl p-3">
        <p>
          Request: Provide detailed analyses.
        </p>
      </div>
      <h1 className="text-blue-500 font-bold text-3xl mb-3 mt-3">Analyses</h1>
      <button
        className="bg-blue-500 text-white rounded-xl p-2"
        onClick={() => router.push("/analyses")}
      >
        Go to patient's analysis
      </button>
    </div>
  );
}
