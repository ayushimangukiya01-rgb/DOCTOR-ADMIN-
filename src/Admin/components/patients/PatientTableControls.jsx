// src/Admin/components/patients/PatientTableControls.jsx
import React from "react";

const PatientTableControls = ({
  searchTerm,
  setSearchTerm,
  status,
  setStatus,
  gender,
  setGender,
  visitType,
  setVisitType,
}) => {
  return (
    <div className="p-5 sm:p-6 border-b border-gray-100 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
      {/* SEARCH */}
      <div className="relative w-full xl:max-w-md">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
          search
        </span>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search patients..."
          className="w-full pl-10 pr-4 py-2 border border-outline rounded-lg bg-white font-label-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* STATUS FILTER */}
        <div className="relative">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full sm:w-auto appearance-none pl-4 pr-10 py-2 border border-outline rounded-lg bg-white font-label-md text-on-surface focus:ring-2 focus:ring-primary/20"
          >
            <option>All Statuses</option>
            <option>Stable</option>
            <option>Critical</option>
            <option>Recovering</option>
          </select>

          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
            expand_more
          </span>
        </div>

        {/* GENDER FILTER */}
        <div className="relative">
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full sm:w-auto appearance-none pl-4 pr-10 py-2 border border-outline rounded-lg bg-white font-label-md text-on-surface focus:ring-2 focus:ring-primary/20"
          >
            <option>Gender: All</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
            expand_more
          </span>
        </div>

        {/* VISIT TYPE FILTER */}
        <div className="relative">
          <select
            value={visitType}
            onChange={(e) => setVisitType(e.target.value)}
            className="w-full sm:w-auto appearance-none pl-4 pr-10 py-2 border border-outline rounded-lg bg-white font-label-md text-on-surface focus:ring-2 focus:ring-primary/20"
          >
            <option>All Visit Types</option>
            <option>General Checkup</option>
            <option>Cardiology</option>
            <option>Dermatology</option>
            <option>Pediatrics</option>
          </select>

          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
            expand_more
          </span>
        </div>
      </div>
    </div>
  );
};

export default PatientTableControls;