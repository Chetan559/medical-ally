import React from "react";
import Dashboard from "../DoctorDashboard/Dashboard";
import Appointment from "../DoctorAppointment/Appointment";

function Maincontent({ content }) {
  return (
    <>
      {content === "dashboard" && <Dashboard />}
      {content === "appointments" && <Appointment />}
      {content === "patients" && (
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            We invest in the world’s potential
          </h1>
        </div>
      )}
      {/* Add more conditions for other content */}
    </>
  );
}

export default Maincontent;
