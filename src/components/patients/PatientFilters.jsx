import React from "react";

const PatientFilters = ({
  searchTerm,
  setSearchTerm,
  gender,
  setGender,
  consultationType,
  setConsultationType,
}) => {
  const selectClass =
    "h-[46px] w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-10 text-[14px] font-medium text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition";

  return (
    <div className="bg-white rounded-t-xl border border-slate-100 border-b-0 p-4 shadow-[0px_4px_12px_rgba(15,23,42,0.05)]">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {/* SEARCH */}
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
            search
          </span>

          <input
            type="text"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-[46px] w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-[14px] font-medium text-slate-700 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
          />
        </div>

        {/* GENDER */}
        <div className="relative">
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className={selectClass}
          >
            <option>All Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
            expand_more
          </span>
        </div>

        {/* CONSULTATION TYPE */}
        <div className="relative">
          <select
            value={consultationType}
            onChange={(e) => setConsultationType(e.target.value)}
            className={selectClass}
          >
            <option>All Types</option>
            <option>Chat-Follow-up</option>
            <option>Video Call-Follow-up</option>
            <option>Video Call</option>
            <option>Message</option>
          </select>

          <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
            expand_more
          </span>
        </div>
      </div>
    </div>
  );
};

export default PatientFilters;