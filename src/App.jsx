import React from "react";
import { Routes, Route } from "react-router-dom";
import DoctorLogin from "./pages/DoctorLogin";
import DoctorRegister from "./pages/DoctorRegister";
import Dashboard from "./pages/Dashboard";
import VerificationPending from "./pages/VerificationPending";
import AppointmentsPage from "./pages/AppointmentsPage";
import AppointmentDetail from "./pages/AppointmentDetail";
import CreatePrescription from "./pages/CreatePrescription";
import VideoConsultation from "./pages/VideoConsultation";
import Earnings from "./pages/Earnings";
import Availability from "./pages/Availability";
import ProfileSettings from "./pages/ProfileSettings";
import Patients from "./pages/Patients";


const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<DoctorLogin />} />
      <Route path="/register" element={<DoctorRegister />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/verificationpending" element={<VerificationPending />} />
      <Route path="/appointments" element={<AppointmentsPage />} />
      <Route path="/appointment-detail" element={<AppointmentDetail />} />
      <Route path="/create-prescription" element={<CreatePrescription/>} />
      <Route path="/videoconsultation" element={<VideoConsultation/>} />
      <Route path="/earnings" element={<Earnings/>} />
      <Route path="/availability" element={<Availability/>} />
      <Route path="/profile-settings" element={<ProfileSettings/>} />
      <Route path="/patients" element={<Patients  />} />

      
    </Routes>
  );
};

export default App;