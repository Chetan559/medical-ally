import React from "react";
import Dashboard from "../DoctorDashboard/Dashboard";
import Appointment from "../DoctorAppointment/Appointment";
import Patients from "../DoctorPatients/Patients";

function Maincontent({ content }) {
  return (
    <>
      {content === "dashboard" && <Dashboard />}
      {content === "appointments" && <Appointment />}
      {content === "patients" && <Patients />}
      {/* Add more conditions for other content */}
    </>
  );
}

export default Maincontent;
