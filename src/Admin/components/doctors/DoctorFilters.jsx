// src/Admin/components/doctors/DoctorFilters.jsx
import React from "react";

const DoctorFilters = ({
  searchTerm,
  setSearchTerm,
  specialization,
  setSpecialization,
  status,
  setStatus,
  experience,
  setExperience,
}) => {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-5 sm:p-6">
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        {/* LEFT → Search */}
        <div className="relative w-full lg:max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
            search
          </span>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search doctors..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
          />
        </div>

        {/* RIGHT → Filters */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {/* Specialization */}
          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="w-full sm:w-[180px] px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            <option>All Specializations</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Oncology</option>
            <option>Pediatrics</option>
            <option>Dermatology</option>
          </select>

          {/* Status */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full sm:w-[150px] px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            <option>All</option>
            <option>Approve Doctor</option>
            <option>Pending Profile</option>
            <option>Reject Profile</option>
          </select>

          {/* Experience */}
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full sm:w-[150px] px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            <option>All Experience</option>
            <option>5+ Experience</option>
            <option>8+ Experience</option>
            <option>10+ Experience</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DoctorFilters;