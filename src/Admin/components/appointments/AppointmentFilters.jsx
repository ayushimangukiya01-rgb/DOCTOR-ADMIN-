// src/Admin/components/appointments/AppointmentFilters.jsx
import React from "react";

const AppointmentFilters = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl border border-outline-variant shadow-sm mb-6">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        
        {/* LEFT FILTERS */}
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          
          {/* Status */}
          <button className="flex items-center justify-between gap-2 px-4 py-2 border border-outline rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
            All Status
            <span className="material-symbols-outlined text-[18px]">
              expand_more
            </span>
          </button>

          {/* Date */}
          <button className="flex items-center justify-between gap-2 px-4 py-2 border border-outline rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
            Today
            <span className="material-symbols-outlined text-[18px]">
              expand_more
            </span>
          </button>

          {/* Doctor */}
          <button className="flex items-center justify-between gap-2 px-4 py-2 border border-outline rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
            All Doctors
            <span className="material-symbols-outlined text-[18px]">
              expand_more
            </span>
          </button>

          {/* More */}
          <button className="flex items-center gap-2 px-4 py-2 border border-outline rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-[18px]">
              tune
            </span>
            More Filters
          </button>
        </div>

        {/* RIGHT INFO */}
        <div className="text-on-surface-variant font-body-sm text-right">
          Showing 1–10 of 1,248 appointments
        </div>
      </div>
    </div>
  );
};

export default AppointmentFilters;