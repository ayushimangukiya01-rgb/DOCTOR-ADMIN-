import React from "react";

const ChartLegendItem = ({ colorClass, label }) => {
  return (
    <span className="flex items-center gap-1 text-xs text-slate-500">
      <span className={`w-2 h-2 rounded-full ${colorClass}`}></span>
      {label}
    </span>
  );
};

export default ChartLegendItem;