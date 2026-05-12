// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





// Doctor Side Pages
import DoctorLogin from "./pages/DoctorLogin";
import DoctorRegister from "./pages/DoctorRegister";
import Dashboard from "./pages/Dashboard";
import VerificationPending from "./pages/VerificationPending";
import AppointmentsPage from "./pages/AppointmentsPage";
import AppointmentDetail from "./pages/AppointmentDetail";
import CreatePrescription from "./pages/CreatePrescription";
import Earnings from "./pages/Earnings";
import Availability from "./pages/Availability";
import ProfileSettings from "./pages/ProfileSettings";
import Patients from "./pages/Patients";

// Admin Side
import AdminLayout from "./Admin/layout/AdminLayout";
import AdminDashboard from "./Admin/pages/AdminDashboard";
import DoctorManagement from "./Admin/pages/DoctorManagement";
import DoctorVerificationDetail from "./Admin/pages/DoctorVerificationDetail";
import PatientManagement from "./Admin/pages/PatientManagement";
import AppointmentManagement from "./Admin/pages/AppointmentManagement";
import PaymentsPage from "./Admin/pages/PaymentsPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
    <Routes>
      {/* Doctor Side */}
      <Route path="/login" element={<DoctorLogin />} />
      <Route path="/register" element={<DoctorRegister />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/verificationpending" element={<VerificationPending />} />
      <Route path="/appointments" element={<AppointmentsPage />} />
      <Route path="/appointment-detail" element={<AppointmentDetail />} />
      <Route path="/create-prescription" element={<CreatePrescription />} />
      <Route path="/earnings" element={<Earnings />} />
      <Route path="/availability" element={<Availability />} />
      <Route path="/profile-settings" element={<ProfileSettings />} />
      <Route path="/patients" element={<Patients />} />
      
    

       {/* always keep this last */}
  <Route path="*" element={<NotFound/>} />

      {/* Admin Side */}
      <Route
        path="/admin/dashboard"
        element={
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        }
      />

      <Route
        path="/admin/doctors"
        element={
          <AdminLayout>
            <DoctorManagement />
          </AdminLayout>
        }
      />

      <Route
        path="/admin/doctors/verify"
        element={
          <AdminLayout>
            <DoctorVerificationDetail />
          </AdminLayout>
        }
      />

      <Route
        path="/admin/patients"
        element={
          <AdminLayout>
            <PatientManagement/>
          </AdminLayout>
        }
      />
      <Route
  path="/admin/appointments"
  element={
    <AdminLayout>
      <AppointmentManagement/>
    </AdminLayout>
  }
/>

<Route
  path="/admin/payments"
  element={
    <AdminLayout>
      <PaymentsPage/>
    </AdminLayout>
  }
/>
    </Routes>
     < ToastContainer position="top-right" autoClose={3000} />
     </>
  );
};

export default App;
