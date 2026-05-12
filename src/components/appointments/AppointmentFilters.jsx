// src/components/appointments/AppointmentFilters.jsx

import React from "react";

const AppointmentFilters = ({
  searchTerm,
  setSearchTerm,
  type,
  setType,
  status,
  setStatus,
  dateFilter,
  setDateFilter,
}) => {
  const selectClass =
    "w-full h-[48px] appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-10 text-[14px] font-medium text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition";

  return (
    <div className="mb-6 rounded-2xl border border-slate-100 bg-white p-4 sm:p-5 shadow-[0_4px_18px_rgba(15,23,42,0.04)]">
      <div className="flex flex-col gap-4">
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          
          {/* SEARCH */}
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[22px]">
              search
            </span>

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search patient..."
              className="h-[48px] w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-[14px] font-medium text-slate-700 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
            />
          </div>

          {/* TYPE */}
          <div className="relative">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={selectClass}
            >
              <option>Any Type</option>
              <option>Video Call</option>
              <option>Message</option>
              <option>Chat Follow-up</option>
              <option>Video Follow-up</option>
            </select>

            <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
              expand_more
            </span>
          </div>

          {/* STATUS */}
          <div className="relative">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={selectClass}
            >
              <option>Any Status</option>
              <option>Pending</option>
              <option>Cancelled</option>
              <option>Confirmed</option>
            </select>

            <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
              expand_more
            </span>
          </div>

          {/* DATE */}
          <div className="relative">
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className={selectClass}
            >
              <option>All</option>
              <option>Today</option>
              <option>Tomorrow</option>
              <option>This Week</option>
            </select>

            <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
              expand_more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentFilters;