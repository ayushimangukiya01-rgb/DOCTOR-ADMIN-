// src/Admin/components/doctors/StaffReportCTA.jsx
import React from "react";

const StaffReportCTA = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1 bg-primary-container p-5 sm:p-6 rounded-xl text-on-primary-container flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Text */}
        <div className="max-w-lg">
          <h3 className="font-h3 text-h3 mb-2">
            Staff Availability Report
          </h3>

          <p className="font-body-md text-body-md opacity-90">
            Download the weekly comprehensive report of all practicing physicians and their respective surgery hours.
          </p>
        </div>

        {/* Button */}
        <button className="bg-white text-primary px-6 py-2 rounded-lg font-label-md text-label-md shadow-sm hover:bg-blue-50 transition-colors whitespace-nowrap">
          Generate Report
        </button>

      </div>
    </div>
  );
};

export default StaffReportCTA;