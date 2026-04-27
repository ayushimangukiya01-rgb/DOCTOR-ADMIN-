import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import PatientsHeader from "../components/patients/PatientsHeader";
import PatientStats from "../components/patients/PatientStats";
import PatientFilters from "../components/patients/PatientFilters";
import PatientsTable from "../components/patients/PatientsTable";

const Patients = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-[#f8fafc] min-h-screen flex">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col lg:ml-64 min-w-0">
        <Topbar setIsSidebarOpen={setIsSidebarOpen} />

        <main className="flex-1">
          <div className="w-full max-w-[1280px] mx-auto p-4 sm:p-6 lg:p-8">
  <PatientsHeader />
<PatientStats/>


<PatientFilters/>
<PatientsTable/>
</div>
          
        </main>
      </div>
    </div>
  );
};

export default Patients;