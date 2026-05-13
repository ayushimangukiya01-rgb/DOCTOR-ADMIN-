import React from "react";

const RevenueBarItem = ({ month, amount = 0, maxAmount = 1, active, dashed }) => {
  // new: convert amount into chart bar height
  const barHeight = maxAmount ? `${Math.max((amount / maxAmount) * 100, 8)}%` : "8%";

  // new: amount tooltip text
  const tooltip = `$${amount.toLocaleString()}`;

  return (
    <div className="flex-1 h-full flex flex-col items-center justify-end gap-2 group">
      <div className="w-full h-full flex items-end">
        <div
          className={`w-full rounded-t-md transition-colors relative ${
            active
              ? "bg-blue-600"
              : dashed
              ? "bg-slate-100 border-t-2 border-dashed border-slate-300"
              : "bg-blue-100 hover:bg-blue-200"
          }`}
          style={{ height: barHeight }}
        >
          {/* new: amount tooltip */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {tooltip}
          </div>
        </div>
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