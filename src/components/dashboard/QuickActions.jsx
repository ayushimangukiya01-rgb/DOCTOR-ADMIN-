import React from "react";

const QuickActions = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-50">
      <h3 className="font-manrope text-[20px] leading-[28px] font-semibold text-[#191b23] mb-6">
        Quick Actions
      </h3>

      <div className="space-y-3">
        <button className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors group">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#004ac6] transition-colors">
              personal_injury
            </span>
            <span className="text-sm font-medium">View All Patients</span>
          </div>
          <span className="material-symbols-outlined text-slate-300 text-sm">
            chevron_right
          </span>
        </button>

        <button className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors group">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#004ac6] transition-colors">
              history_edu
            </span>
            <span className="text-sm font-medium">Write Prescription</span>
          </div>
          <span className="material-symbols-outlined text-slate-300 text-sm">
            chevron_right
          </span>
        </button>

        <button className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors group">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#004ac6] transition-colors">
              lab_research
            </span>
            <span className="text-sm font-medium">Lab Reports</span>
          </div>
          <span className="material-symbols-outlined text-slate-300 text-sm">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;