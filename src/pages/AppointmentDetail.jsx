import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import AppointmentHero from "../components/appointmentDetail/AppointmentHero";
import AppointmentDetailContent from "../components/appointmentDetail/AppointmentDetailContent";

const AppointmentDetail = () => {
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
          <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
           <AppointmentDetailContent/>
            
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppointmentDetail;