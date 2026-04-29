import React from "react";

const RevenueBarItem = ({ month, height, active, dashed, tooltip }) => {
  return (
    <div className="flex-1 flex flex-col items-center gap-2 group">
      <div
        className={`w-full rounded-t-md transition-colors relative ${
          active
            ? "bg-blue-600"
            : dashed
            ? "bg-slate-100 border-t-2 border-dashed border-slate-300"
            : "bg-blue-100 hover:bg-blue-200"
        }`}
        style={{ height }}
      >
        {active && tooltip && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {tooltip}
          </div>
        )}
      </div>

      <span
        className={`text-xs ${
          active ? "font-bold text-slate-900" : "text-slate-400 font-medium"
        }`}
      >
        {month}
      </span>
    </div>
  );
};

export default RevenueBarItem;