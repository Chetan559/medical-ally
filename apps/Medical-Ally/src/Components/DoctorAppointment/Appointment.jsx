import React, { useState } from "react";
import appointments from "../apiValues/AppointmentApis";

function Appointment() {
  const handleDelete = (id) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };

  const handleEdit = (id) => {
    const newName = prompt("Enter new name:");
    const newEmail = prompt("Enter new email:");
    const newStatus = prompt("Enter new status:");
    const newDate = prompt("Enter new date (e.g., 1/1/2024):");

    if (newName && newEmail && newStatus && newDate) {
      setAppointments(
        appointments.map((appointment) =>
          appointment.id === id
            ? {
                ...appointment,
                name: newName,
                email: newEmail,
                status: newStatus,
                date: newDate,
              }
            : appointment
        )
      );
    }
  };

  const handleAdd = () => {
    const newName = prompt("Enter name:");
    const newEmail = prompt("Enter email:");
    const newStatus = prompt("Enter status:");
    const newDate = prompt("Enter date (e.g., 1/1/2024):");

    if (newName && newEmail && newStatus && newDate) {
      const newAppointment = {
        id: appointments.length + 1,
        name: newName,
        email: newEmail,
        status: newStatus,
        date: newDate,
      };
      setAppointments([...appointments, newAppointment]);
    }
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white bg-white text-gray-800 min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full border-collapse border border-gray-200 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.length > 0 ? (
                  appointments.map((appointment) => (
                    <tr
                      key={appointment.id}
                      className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="px-4 py-2">{appointment.name}</td>
                      <td className="px-4 py-2">{appointment.email}</td>
                      <td className="px-4 py-2">
                        <span
                          className={`px-2 py-1 rounded-full text-sm font-medium ${
                            appointment.status.toLowerCase() === "Approved"
                              ? "bg-green-100 text-green-600 dark:bg-green-700 dark:text-green-100"
                              : appointment.status.toLowerCase() === "pending"
                                ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-700 dark:text-yellow-100"
                                : "bg-red-100 text-red-600 dark:bg-red-700 dark:text-red-100"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </td>
                      <td className="px-4 py-2">{appointment.date}</td>
                      <td className="px-4 py-2 text-center">
                        <button
                          onClick={() => handleEdit(appointment.id)}
                          className="text-blue-600 hover:text-blue-800 mx-1 dark:text-blue-400"
                          aria-label="Edit"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleDelete(appointment.id)}
                          className="text-red-600 hover:text-red-800 mx-1 dark:text-red-400"
                          aria-label="Delete"
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-4 py-2 text-center text-gray-500 dark:text-gray-400"
                    >
                      No appointments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <button
            onClick={handleAdd}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
          >
            Add Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
