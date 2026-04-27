import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import SlotConfiguration from "../components/availability/SlotConfiguration";
import ActiveDays from "../components/availability/ActiveDays";
import PlannedLeave from "../components/availability/PlannedLeave";
import WeeklySchedule from "../components/availability/WeeklySchedule";

const Availability = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-[#faf8ff] min-h-screen flex">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col lg:ml-64 min-w-0">
        <Topbar setIsSidebarOpen={setIsSidebarOpen} />

        <main className="flex-1">
          <div className="w-full max-w-[1280px] mx-auto p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4 space-y-6">
                <SlotConfiguration />
                <ActiveDays />
                <PlannedLeave />
              </div>

              <div className="lg:col-span-8">
                <WeeklySchedule />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Availability;