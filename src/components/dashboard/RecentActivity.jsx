import React from "react";

const RecentActivity = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-50">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-manrope text-[20px] leading-[28px] font-semibold text-[#191b23]">
          Recent Activity
        </h3>
        <span className="material-symbols-outlined text-slate-300">
          refresh
        </span>
      </div>

      <div className="space-y-6 relative">
        <div className="absolute left-3 top-2 bottom-2 w-px border-l-2 border-dashed border-slate-100"></div>

        <div className="relative flex gap-4">
          <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-sm z-10"></div>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Diagnosis Updated
            </p>
            <p className="text-xs text-slate-500">Sarah Jenkins • 12 mins ago</p>
          </div>
        </div>

        <div className="relative flex gap-4">
          <div className="w-6 h-6 rounded-full bg-emerald-500 border-4 border-white shadow-sm z-10"></div>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Lab Result Received
            </p>
            <p className="text-xs text-slate-500">Robert Chen • 1 hour ago</p>
          </div>
        </div>

        <div className="relative flex gap-4">
          <div className="w-6 h-6 rounded-full bg-amber-500 border-4 border-white shadow-sm z-10"></div>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Appointment Cancelled
            </p>
            <p className="text-xs text-slate-500">Emily Blunt • 3 hours ago</p>
          </div>
        </div>

        <div className="relative flex gap-4">
          <div className="w-6 h-6 rounded-full bg-slate-300 border-4 border-white shadow-sm z-10"></div>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Monthly Report Ready
            </p>
            <p className="text-xs text-slate-500">System Admin • 5 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;