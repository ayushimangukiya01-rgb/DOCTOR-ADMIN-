import React from "react";

const DayStatusLabel = ({ day, status = "Active" }) => {
  return (
    <div className="w-32 pt-2 shrink-0">
      <span className="font-bold text-slate-900">{day}</span>

      <div className="text-xs text-[#006e2f] mt-1 font-semibold uppercase tracking-wider">
        {status}
      </div>
    </div>
  );
};

export default DayStatusLabel;