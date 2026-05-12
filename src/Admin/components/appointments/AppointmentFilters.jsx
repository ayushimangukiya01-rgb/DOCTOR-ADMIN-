// src/Admin/components/appointments/AppointmentFilters.jsx
import React from "react";

const AppointmentFilters = ({
  searchTerm,
  setSearchTerm,
  status,
  setStatus,
  type,
  setType,
  doctor,
  setDoctor,
  doctors,
  totalResults,
}) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl border border-outline-variant shadow-sm mb-6">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        {/* SEARCH */}
        <div className="relative w-full xl:max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
            search
          </span>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search appointments..."
            className="w-full pl-10 pr-4 py-2 border border-outline rounded-lg bg-white font-label-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* FILTERS */}
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 border border-outline rounded-lg bg-white font-label-md text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option>All Status</option>
            <option>Confirmed</option>
            <option>In Progress</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 border border-outline rounded-lg bg-white font-label-md text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option>All Types</option>
            <option>Chat Follow-up</option>
            <option>Video Call</option>
            <option>Message</option>
          </select>

          <select
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 border border-outline rounded-lg bg-white font-label-md text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option>All Doctors</option>
            {doctors.map((doc) => (
              <option key={doc}>{doc}</option>
            ))}
          </select>
        </div>

      
      </div>
    </div>
  );
};

export default AppointmentFilters;