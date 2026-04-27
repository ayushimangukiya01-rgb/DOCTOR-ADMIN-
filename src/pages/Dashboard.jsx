import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import DashboardOverview from "../components/dashboard/DashboardOverview";
import MainContentSection from "../components/dashboard/MainContentSection";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-[#faf8ff] min-h-screen flex">
      
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Right Side */}
      <div className="flex-1 flex flex-col lg:ml-64">
        
        {/* Topbar */}
        <Topbar setIsSidebarOpen={setIsSidebarOpen} />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto">
          <DashboardOverview />
          <MainContentSection />
        </main>

      </div>
    </div>
  );
};

export default Dashboard;