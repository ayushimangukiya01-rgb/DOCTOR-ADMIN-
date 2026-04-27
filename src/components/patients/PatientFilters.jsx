import React from "react";

const filters = ["All Patients", "New", "Follow-up", "Critical"];

const PatientFilters = () => {
  return (
    <div className="bg-white rounded-t-xl border border-slate-100 border-b-0 p-4 shadow-[0px_4px_12px_rgba(15,23,42,0.05)]">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        <div className="relative flex-1">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[22px]">
            search
          </span>

          <input
            type="text"
            placeholder="Search patients..."
            className="w-full rounded-lg border border-slate-200 pl-10 pr-4 py-3 text-sm outline-none focus:border-[#004ac6] focus:ring-2 focus:ring-[#004ac6]/10"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`px-5 py-2.5 rounded-lg border text-sm font-medium transition ${
                index === 0
                  ? "border-[#004ac6] text-[#004ac6] bg-white"
                  : "border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {filter}
            </button>
          ))}

          <button className="px-5 py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">
              filter_list
            </span>
            More Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientFilters;