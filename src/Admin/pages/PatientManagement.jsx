// src/Admin/pages/PatientManagement.jsx
import React from "react";
import PatientStatsGrid from "../components/patients/PatientStatsGrid";
import PatientTableControls from "../components/patients/PatientTableControls";
import PatientsTable from "../components/patients/PatientsTable";

const PatientManagement = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
        <div>
          <nav className="flex items-center gap-2 text-on-surface-variant mb-2">
            <span className="font-body-sm">Dashboard</span>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <span className="font-body-sm text-primary font-medium">
              Patients
            </span>
          </nav>

          <h2 className="font-h1 text-h1 text-on-surface">
            Patient Management
          </h2>

          <p className="font-body-md text-on-surface-variant">
            Manage medical records and patient information for 1,248 registered
            users.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-outline rounded-lg font-label-md hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-[20px]">
              file_download
            </span>
            Export List
          </button>

          {/* <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container shadow-sm active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[20px]">
              person_add
            </span>
            Add New Patient
          </button> */}
        </div>
      </div>

      <PatientStatsGrid />

      <div className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] overflow-hidden">
        <PatientTableControls />
        <PatientsTable />
      </div>
    </div>
  );
};

export default PatientManagement;