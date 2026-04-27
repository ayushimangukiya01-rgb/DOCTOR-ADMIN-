import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import AppointmentsHeader from "../components/appointments/AppointmentsHeader";
import AppointmentsStats from "../components/appointments/AppointmentsStats";
import AppointmentsTable from "../components/appointments/AppointmentsTable";
import AppointmentPagination from "../components/appointments/AppointmentPagination";

const AppointmentsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-[#F8FAFC] min-h-screen flex">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col lg:ml-64 min-w-0">
        <Topbar setIsSidebarOpen={setIsSidebarOpen} />

        <main className="flex-1">
          <div className="w-full p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
            <AppointmentsHeader />
            <AppointmentsStats />
            <AppointmentsTable/>
            <AppointmentPagination/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppointmentsPage;