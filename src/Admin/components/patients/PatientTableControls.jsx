// src/Admin/components/patients/PatientTableControls.jsx
import React from "react";

const PatientTableControls = () => {
  return (
    <div className="p-5 sm:p-6 border-b border-gray-100 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative">
          <select className="w-full sm:w-auto appearance-none pl-4 pr-10 py-2 border border-outline rounded-lg bg-white font-label-md text-on-surface focus:ring-2 focus:ring-primary/20">
            <option>All Statuses</option>
            <option>Stable</option>
            <option>Critical</option>
            <option>Recovering</option>
          </select>

          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
            expand_more
          </span>
        </div>

        <div className="relative">
          <select className="w-full sm:w-auto appearance-none pl-4 pr-10 py-2 border border-outline rounded-lg bg-white font-label-md text-on-surface focus:ring-2 focus:ring-primary/20">
            <option>Gender: All</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
            expand_more
          </span>
        </div>

        <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary font-label-md transition-colors">
          <span className="material-symbols-outlined text-[20px]">
            filter_list
          </span>
          More Filters
        </button>
      </div>

      <p className="font-body-sm text-on-surface-variant">
        Showing 1-10 of 1,248 patients
      </p>
    </div>
  );
};

export default PatientTableControls;