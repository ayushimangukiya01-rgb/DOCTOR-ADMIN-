// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";

import dashboardReducer from "./admin/dashboard/dashboardSlice";
import adminDoctorReducer from "./admin/doctors/doctorSlice";
import adminPatientReducer from "./admin/patients/patientSlice";
import adminAppointmentReducer from "./admin/appointments/appointmentSlice";
import adminPaymentReducer from "./admin/payments/paymentSlice";
import adminVerificationReducer from "./admin/verification/verificationSlice";
import doctorDashboardReducer from "./doctor/dashboard/doctorDashboardSlice";
import doctorAppointmentReducer from "./doctor/appointments/doctorAppointmentSlice";
import doctorAppointmentDetailReducer from "./doctor/appointmentDetail/doctorAppointmentDetailSlice";
import doctorAvailabilityReducer from "./doctor/availability/doctorAvailabilitySlice";
import doctorEarningsReducer from "./doctor/earnings/doctorEarningsSlice";
import doctorPatientsReducer from "./doctor/patients/doctorPatientsSlice";
import doctorPrescriptionReducer from "./doctor/prescription/doctorPrescriptionSlice";




export const store = configureStore({
  reducer: {                     
    dashboard: dashboardReducer,
    adminDoctors: adminDoctorReducer,
    adminPatients: adminPatientReducer,
    adminAppointments: adminAppointmentReducer,
    adminPayments: adminPaymentReducer,
    adminVerification: adminVerificationReducer,
    

    doctorDashboard: doctorDashboardReducer,
    doctorAppointments: doctorAppointmentReducer,
    doctorAppointmentDetail: doctorAppointmentDetailReducer,
    doctorAvailability: doctorAvailabilityReducer,
    doctorEarnings: doctorEarningsReducer,
    doctorPatients: doctorPatientsReducer,
    doctorPrescription: doctorPrescriptionReducer,

    

  },
});