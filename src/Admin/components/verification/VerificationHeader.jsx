// src/Admin/components/verification/VerificationHeader.jsx
import React from "react";

const VerificationHeader = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
      <div>
        <h2 className="font-h1 text-h1 text-on-surface">
          Doctor Verification
        </h2>

        <p className="font-body-md text-outline mt-1">
          Application ID: #APP-99201-2023
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
       

        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-on-primary font-label-md rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all">
          <span className="material-symbols-outlined">print</span>
          Print Report
        </button>
      </div>
    </div>
  );
};

export default VerificationHeader;