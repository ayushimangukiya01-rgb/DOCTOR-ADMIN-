import React from "react";

const StatCard = ({ icon, label, value, iconBg, iconColor }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-100 flex items-center gap-4">
      
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBg} ${iconColor}`}
      >
        <span className="material-symbols-outlined">
          {icon}
        </span>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#434655]">
          {label}
        </p>

        <p className="font-manrope text-[20px] leading-[28px] font-semibold text-slate-900">
          {value}
        </p>
      </div>

    </div>
  );
};

export default StatCard;