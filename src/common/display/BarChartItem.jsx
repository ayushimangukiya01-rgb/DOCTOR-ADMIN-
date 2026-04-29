import React from "react";

const BarChartItem = ({ day, height, empty = false }) => {
  return (
    <div className="flex-1 flex flex-col gap-1 items-center">
      <div
        className={`w-full rounded-t h-24 ${
          empty ? "bg-slate-100" : "bg-blue-100 relative overflow-hidden"
        }`}
      >
        {!empty && (
          <div
            className={`absolute bottom-0 w-full bg-[#004ac6] ${height}`}
          ></div>
        )}
      </div>

      <span className="text-[10px] text-slate-400 uppercase">{day}</span>
    </div>
  );
};

export default BarChartItem;