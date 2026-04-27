import React from "react";

const RevenueChart = () => {
  return (
    <section className="bg-white p-6 sm:p-8 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-100">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <div>
          <h3 className="font-manrope text-[20px] leading-[28px] font-semibold text-slate-900">
            Revenue Overview
          </h3>
          <p className="text-sm text-slate-500">
            Monthly performance analytics
          </p>
        </div>

        <div className="flex gap-2 bg-slate-50 p-1 rounded-lg w-fit">
          <button className="px-4 py-1.5 text-xs font-semibold bg-white text-blue-600 shadow-sm rounded-md">
            6 Months
          </button>
          <button className="px-4 py-1.5 text-xs font-semibold text-slate-500">
            1 Year
          </button>
          <button className="px-4 py-1.5 text-xs font-semibold text-slate-500">
            All Time
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-64 w-full flex items-end justify-between gap-4 px-2 sm:px-4 border-b border-slate-100">
        
        {/* Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          <div className="border-t border-slate-50"></div>
          <div className="border-t border-slate-50"></div>
          <div className="border-t border-slate-50"></div>
          <div className="border-t border-slate-50"></div>
        </div>

        {/* Bars */}
        {[
          { month: "May", height: "45%" },
          { month: "Jun", height: "60%" },
          { month: "Jul", height: "55%" },
          { month: "Aug", height: "85%" },
          { month: "Sep", height: "70%", active: true },
          { month: "Oct", height: "40%", dashed: true },
        ].map((item, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center gap-2 group"
          >
            <div
              className={`w-full rounded-t-md transition-colors relative ${
                item.active
                  ? "bg-blue-600"
                  : item.dashed
                  ? "bg-slate-100 border-t-2 border-dashed border-slate-300"
                  : "bg-blue-100 hover:bg-blue-200"
              }`}
              style={{ height: item.height }}
            >
              {item.active && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  $2,100.00
                </div>
              )}
            </div>

            <span
              className={`text-xs ${
                item.active
                  ? "font-bold text-slate-900"
                  : "text-slate-400 font-medium"
              }`}
            >
              {item.month}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RevenueChart;