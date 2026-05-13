import React from "react";

const DayStatusLabel = ({ day, status = "Active" }) => {
  return (
    <div className="w-32 pt-2 shrink-0">
      <span className="font-bold text-slate-900">{day}</span>

     <p
  className={`text-sm font-bold uppercase tracking-wide ${
    status === "Leave"
      ? "text-red-500"
      : "text-[#006e2f]"
  }`}
>
  {status}
</p>
    </div>
  );
};

export default DayStatusLabel;