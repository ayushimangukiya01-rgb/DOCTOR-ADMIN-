import React from "react";

const BarChartItem = ({ day, height = "h-1/2" }) => {
  return (
    <div className="flex-1 flex flex-col gap-2 items-center min-w-0">
      <div className="relative w-full h-28 rounded-xl bg-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-blue-100/70"></div>

        <div
          className={`absolute bottom-0 w-full rounded-t-xl bg-[#004ac6] transition-all duration-500 ${height}`}
        ></div>
      </div>

      <span className="text-[11px] font-medium tracking-wide text-slate-500 uppercase">
        {day}
      </span>
    </div>
  );
};

export default BarChartItem;