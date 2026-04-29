import React from "react";

const FilterButton = ({ children, active = false, icon }) => {
  return (
    <button
      className={`px-5 py-2.5 rounded-lg border text-sm font-medium transition flex items-center gap-2 ${
        active
          ? "border-[#004ac6] text-[#004ac6] bg-white"
          : "border-slate-200 text-slate-700 hover:bg-slate-50"
      }`}
    >
      {icon && (
        <span className="material-symbols-outlined text-[18px]">
          {icon}
        </span>
      )}
      {children}
    </button>
  );
};

export default FilterButton;