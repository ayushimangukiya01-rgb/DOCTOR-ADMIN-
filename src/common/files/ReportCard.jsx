import React from "react";

const ReportCard = ({ report }) => {
  return (
    <div className="group relative p-4 border border-slate-100 rounded-xl hover:border-[#004ac6] transition-all bg-slate-50/50">
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-lg shrink-0 ${report.iconBg} ${report.iconColor}`}
        >
          <span className="material-symbols-outlined">{report.icon}</span>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-[16px] leading-[24px] font-semibold text-slate-900 truncate">
            {report.title}
          </p>
          <p className="text-slate-400 text-xs">{report.detail}</p>
        </div>

        <button className="material-symbols-outlined text-slate-400 hover:text-[#004ac6]">
          visibility
        </button>
      </div>
    </div>
  );
};

export default ReportCard;