import React from "react";

const WeeklyStats = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-50">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
        <h3 className="font-manrope text-[18px] sm:text-[20px] leading-[28px] font-semibold text-[#191b23]">
          Weekly Statistics
        </h3>

        <div className="flex gap-3 sm:gap-2 flex-wrap">
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <span className="w-2 h-2 rounded-full bg-[#004ac6]"></span>
            Consults
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            New Patients
          </span>
        </div>
      </div>

      <div className="h-48 flex items-end gap-2 sm:gap-4 px-2 sm:px-4">
        <div className="flex-1 flex flex-col gap-1 items-center">
          <div className="w-full bg-blue-100 rounded-t h-24 relative overflow-hidden">
            <div className="absolute bottom-0 w-full bg-[#004ac6] h-3/4"></div>
          </div>
          <span className="text-[10px] text-slate-400 uppercase">MON</span>
        </div>

        <div className="flex-1 flex flex-col gap-1 items-center">
          <div className="w-full bg-blue-100 rounded-t h-24 relative overflow-hidden">
            <div className="absolute bottom-0 w-full bg-[#004ac6] h-1/2"></div>
          </div>
          <span className="text-[10px] text-slate-400 uppercase">TUE</span>
        </div>

        <div className="flex-1 flex flex-col gap-1 items-center">
          <div className="w-full bg-blue-100 rounded-t h-24 relative overflow-hidden">
            <div className="absolute bottom-0 w-full bg-[#004ac6] h-full"></div>
          </div>
          <span className="text-[10px] text-slate-400 uppercase">WED</span>
        </div>

        <div className="flex-1 flex flex-col gap-1 items-center">
          <div className="w-full bg-blue-100 rounded-t h-24 relative overflow-hidden">
            <div className="absolute bottom-0 w-full bg-[#004ac6] h-2/3"></div>
          </div>
          <span className="text-[10px] text-slate-400 uppercase">THU</span>
        </div>

        <div className="flex-1 flex flex-col gap-1 items-center">
          <div className="w-full bg-blue-100 rounded-t h-24 relative overflow-hidden">
            <div className="absolute bottom-0 w-full bg-[#004ac6] h-4/5"></div>
          </div>
          <span className="text-[10px] text-slate-400 uppercase">FRI</span>
        </div>

        <div className="flex-1 flex flex-col gap-1 items-center">
          <div className="w-full bg-slate-100 rounded-t h-24"></div>
          <span className="text-[10px] text-slate-400 uppercase">SAT</span>
        </div>

        <div className="flex-1 flex flex-col gap-1 items-center">
          <div className="w-full bg-slate-100 rounded-t h-24"></div>
          <span className="text-[10px] text-slate-400 uppercase">SUN</span>
        </div>
      </div>
    </div>
  );
};

export default WeeklyStats;