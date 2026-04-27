import React from "react";

const PatientsHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div>
        <h1 className="font-['Manrope'] text-[32px] leading-[40px] font-bold text-slate-900">
          Patients
        </h1>

        <p className="mt-1 text-slate-500">
          Manage patient records, consultation history, and health details.
        </p>
      </div>

      <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#004ac6] text-white px-5 py-3 rounded-lg font-semibold shadow-sm hover:brightness-110 transition">
        <span className="material-symbols-outlined text-[20px]">add</span>
        Add New Patient
      </button>
    </div>
  );
};

export default PatientsHeader;