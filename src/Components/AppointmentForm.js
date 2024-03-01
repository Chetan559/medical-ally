import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../Styles/AppointmentForm.css";
import sendToServer from "../Scripts/genAI";

function AppointmentForm() {
  const [bookAppointment, setBookAppointment] = useState({
    patientName: "",
    patientNumber: "",
    patientGender: "default",
    medicalHistory: "",
    currentSymptoms: "",
    medications: "",
    allergies: "",
    vitalSigns: "",
    labResults: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookAppointment((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to genAI.js
    const responseData = await sendToServer({
      patientGender: bookAppointment.patientGender,
      medicalHistory: bookAppointment.medicalHistory,
      currentSymptoms: bookAppointment.currentSymptoms,
      medications: bookAppointment.medications,
      allergies: bookAppointment.allergies,
      vitalSigns: bookAppointment.vitalSigns,
      labResults: bookAppointment.labResults,
    });

    // Handle response from server
    if (responseData) {
      // Append response data to form as a popup
      alert(responseData); // You can customize this as needed
    } else {
      alert("Failed to process data. Please try again later.");
    }

    // Reset form fields after successful submission
    setBookAppointment({
      patientName: "",
      patientNumber: "",
      patientGender: "default",
      medicalHistory: "",
      currentSymptoms: "",
      medications: "",
      allergies: "",
      vitalSigns: "",
      labResults: "",
    });

    setIsSubmitted(true);

    // Toast notification for success
    toast.success("Details submitted sucessfully");
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Health-<span className="legal-siteSign">App</span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Book Appointment Online</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Patient Full Name:
            <textarea
              name="patientName"
              value={bookAppointment.patientName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Patient Phone Number:
            <input
              name="patientNumber"
              value={bookAppointment.patientNumber}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Patient Gender:
            <select
              name="patientGender"
              value={bookAppointment.patientGender}
              onChange={handleChange}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="private">I will inform Doctor only</option>
            </select>
          </label>

          {/* Patient Health Data */}
          <label>
            Medical History:
            <textarea
              name="medicalHistory"
              value={bookAppointment.medicalHistory}
              onChange={handleChange}
            />
          </label>

          <label>
            Current Symptoms:
            <textarea
              name="currentSymptoms"
              value={bookAppointment.currentSymptoms}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Medications:
            <textarea
              name="medications"
              value={bookAppointment.medications}
              onChange={handleChange}
            />
          </label>

          <label>
            Allergies:
            <textarea
              name="allergies"
              value={bookAppointment.allergies}
              onChange={handleChange}
            />
          </label>

          <label>
            Vital Signs:
            <textarea
              name="vitalSigns"
              value={bookAppointment.vitalSigns}
              onChange={handleChange}
            />
          </label>

          <label>
            Laboratory Test Results:
            <textarea
              name="labResults"
              value={bookAppointment.labResults}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="text-appointment-btn">
            Confirm Appointment
          </button>

          {/* Display success message if isSubmitted is true */}
          <p
            className="success-message"
            style={{ display: isSubmitted ? "block" : "none" }}
          >
            Appointment details have been sent to the patient's phone number via
            SMS.
          </p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2024 Health-App. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
