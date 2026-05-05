// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";

import dashboardReducer from "./admin/dashboard/dashboardSlice";
import adminDoctorReducer from "./admin/doctors/doctorSlice";
import adminPatientReducer from "./admin/patients/patientSlice";
import adminAppointmentReducer from "./admin/appointments/appointmentSlice";
import adminPaymentReducer from "./admin/payments/paymentSlice";
import adminVerificationReducer from "./admin/verification/verificationSlice";

// old slice temporary
// import adminReducer from "./admin/adminSlice"; 

export const store = configureStore({
  reducer: {                     
    dashboard: dashboardReducer,
    adminDoctors: adminDoctorReducer,
    adminPatients: adminPatientReducer,
    adminAppointments: adminAppointmentReducer,
    adminPayments: adminPaymentReducer,
    adminVerification: adminVerificationReducer,
    

    // admin: adminReducer,

  },
});