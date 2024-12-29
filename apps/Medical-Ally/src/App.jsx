import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/User/Home/Home";
import Pathology from "./Pages/Pathology/Pathology";
import Doctors from "./Pages/Doctors/Doctors";
import Admin from "./Pages/Admin/Admin";
import AnalyseForm from "./Components/AnalyseForm/AnalyseForm";
import Patients from "./Components/DoctorPatients/Patients";
import MedicineDashboard from "./Components/pathologyMedicineDashboard/MedicineDashboard.jsx";

// import Legal from "./Pages/Legal";
// import NotFound from "./Pages/NotFound";
// import Appointment from "./Pages/Appointment";
// import DoctorRegistrationForm from "./Pages/DoctorRegistration";
// import DoctorLoginForm from "./Components/DoctorLogin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Doctor" element={<Doctors />} />
          <Route path="/Pathology" element={<Pathology />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/analyse" element={<AnalyseForm />} />
          <Route path="/Doctor/patients" element={<Patients />} />
          <Route path="/Pathology/list" element={<MedicineDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/* <Route path="/legal" element={<Legal />} />
    <Route path="/appointment" element={<Appointment />} />
    <Route path="/registration" element={<DoctorRegistrationForm />} />
    <Route path="/login" element={<DoctorLoginForm />} />
    <Route path="*" element={<NotFound />} /> */
