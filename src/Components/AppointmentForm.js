import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [currentSymptoms, setCurrentSymptoms] = useState("");
  const [medications, setMedications] = useState("");
  const [allergies, setAllergies] = useState("");
  const [vitalSigns, setVitalSigns] = useState("");
  const [labResults, setLabResults] = useState("");
  const [previousDiagnoses, setPreviousDiagnoses] = useState("");
  const [familyHistory, setFamilyHistory] = useState("");
  const [demographicInfo, setDemographicInfo] = useState("");
  const [lifestyleFactors, setLifestyleFactors] = useState("");
  const [environmentalFactors, setEnvironmentalFactors] = useState("");
  const [socialDeterminants, setSocialDeterminants] = useState("");
  const [doctorNotes, setDoctorNotes] = useState("");
  const [treatmentGuidelines, setTreatmentGuidelines] = useState("");
  const [medicalResearch, setMedicalResearch] = useState("");
  const [dataPrivacy, setDataPrivacy] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your form validation logic here...

    // Reset form fields and errors after successful submission
    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
    setMedicalHistory("");
    setCurrentSymptoms("");
    setMedications("");
    setAllergies("");
    setVitalSigns("");
    setLabResults("");
    setPreviousDiagnoses("");
    setFamilyHistory("");
    setDemographicInfo("");
    setLifestyleFactors("");
    setEnvironmentalFactors("");
    setSocialDeterminants("");
    setDoctorNotes("");
    setTreatmentGuidelines("");
    setMedicalResearch("");
    setDataPrivacy("");
    setFormErrors({});

    toast.success("Appointment Scheduled!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
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
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
          </label>

          <label>
            Patient Phone Number:
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
          </label>

          <label>
            Patient Gender:
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
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
              value={medicalHistory}
              onChange={(e) => setMedicalHistory(e.target.value)}
            />
          </label>

          <label>
            Current Symptoms:
            <textarea
              value={currentSymptoms}
              onChange={(e) => setCurrentSymptoms(e.target.value)}
            />
          </label>

          <label>
            Medications:
            <textarea
              value={medications}
              onChange={(e) => setMedications(e.target.value)}
            />
          </label>

          <label>
            Allergies:
            <textarea
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
            />
          </label>

          <label>
            Vital Signs:
            <textarea
              value={vitalSigns}
              onChange={(e) => setVitalSigns(e.target.value)}
            />
          </label>

          <label>
            Laboratory Test Results:
            <textarea
              value={labResults}
              onChange={(e) => setLabResults(e.target.value)}
            />
          </label>

          <label>
            Previous Diagnoses and Treatments:
            <textarea
              value={previousDiagnoses}
              onChange={(e) => setPreviousDiagnoses(e.target.value)}
            />
          </label>

          <label>
            Family Medical History:
            <textarea
              value={familyHistory}
              onChange={(e) => setFamilyHistory(e.target.value)}
            />
          </label>

          {/* Contextual Information */}
          <label>
            Demographic Information:
            <textarea
              value={demographicInfo}
              onChange={(e) => setDemographicInfo(e.target.value)}
            />
          </label>

          <label>
            Lifestyle Factors:
            <textarea
              value={lifestyleFactors}
              onChange={(e) => setLifestyleFactors(e.target.value)}
            />
          </label>

          <label>
            Environmental Factors:
            <textarea
              value={environmentalFactors}
              onChange={(e) => setEnvironmentalFactors(e.target.value)}
            />
          </label>

          <label>
            Social Determinants of Health:
            <textarea
              value={socialDeterminants}
              onChange={(e) => setSocialDeterminants(e.target.value)}
            />
          </label>

          {/* Doctor Notes and Observations */}
          <label>
            Doctor's Notes:
            <textarea
              value={doctorNotes}
              onChange={(e) => setDoctorNotes(e.target.value)}
            />
          </label>

          {/* Treatment Guidelines and Protocols */}
          <label>
            Treatment Guidelines:
            <textarea
              value={treatmentGuidelines}
              onChange={(e) => setTreatmentGuidelines(e.target.value)}
            />
          </label>

          {/* Medical Literature and Research */}
          <label>
            Medical Research:
            <textarea
              value={medicalResearch}
              onChange={(e) => setMedicalResearch(e.target.value)}
            />
          </label>

          {/* Data Privacy and Security */}
          <label>
            Data Privacy:
            <textarea
              value={dataPrivacy}
              onChange={(e) => setDataPrivacy(e.target.value)}
            />
          </label>

          <button type="submit" className="text-appointment-btn">
            Confirm Appointment
          </button>

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
