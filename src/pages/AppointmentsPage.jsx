import React from "react";
import AppointmentsHeader from "../components/appointments/AppointmentsHeader";
import AppointmentsStats from "../components/appointments/AppointmentsStats";
import AppointmentsTable from "../components/appointments/AppointmentsTable";
import AppointmentPagination from "../components/appointments/AppointmentPagination";
import DashboardPageLayout from "../common/layout/DashboardPageLayout";

const AppointmentsPage = () => {
  return (
    <DashboardPageLayout>
      <AppointmentsHeader />
      <AppointmentsStats />
      <AppointmentsTable />
      <AppointmentPagination />
    </DashboardPageLayout>
  );
};

export default AppointmentsPage;