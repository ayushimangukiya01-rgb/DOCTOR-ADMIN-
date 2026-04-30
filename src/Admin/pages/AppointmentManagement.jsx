// src/Admin/pages/AppointmentManagement.jsx
import React from "react";
import AppointmentHeader from "../components/appointments/AppointmentHeader";
import AppointmentFilters from "../components/appointments/AppointmentFilters";
import AppointmentsTable from "../components/appointments/AppointmentsTable";
import AppointmentBottomCards from "../components/appointments/AppointmentBottomCards";

const AppointmentManagement = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <AppointmentHeader />
      <AppointmentFilters />
      <AppointmentsTable />
      <AppointmentBottomCards />
    </div>
  );
};

export default AppointmentManagement;