// src/Admin/pages/DoctorManagement.jsx
import React from "react";
import DoctorStatsGrid from "../components/doctors/DoctorStatsGrid";
import DoctorFilters from "../components/doctors/DoctorFilters";
import DoctorsTable from "../components/doctors/DoctorsTable";
import StaffReportCTA from "../components/doctors/StaffReportCTA";

const DoctorManagement = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-h1 text-h1 text-on-surface">
            Doctor Management
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Manage medical staff, schedules, and practitioner credentials.
          </p>
        </div>
{/* 
        <button className="bg-primary hover:bg-primary/90 text-on-primary px-6 py-2 rounded-lg flex items-center justify-center gap-2 transition-all font-label-md text-label-md shadow-sm">
          <span className="material-symbols-outlined">add</span>
          Register New Doctor
        </button> */}
      </div>

      <DoctorStatsGrid />
      <DoctorFilters />
      <DoctorsTable />
      <StaffReportCTA />
    </div>
  );
};

export default DoctorManagement;