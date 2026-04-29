import React from "react";

const DashboardStatCard = ({
  icon,
  iconBg,
  iconColor,
  badge,
  badgeClass,
  label,
  value,
}) => {
  return (
    <div className="bg-white p-5 sm:p-6 rounded-xl shadow border border-slate-50 hover:border-blue-200 transition">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 ${iconBg} ${iconColor} rounded-lg`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>

        <span className={`text-xs px-2 py-1 rounded ${badgeClass}`}>
          {badge}
        </span>
      </div>

      <p className="text-xs uppercase text-[#434655] font-semibold">
        {label}
      </p>

      <p className="font-manrope text-[22px] sm:text-[24px] font-semibold text-[#191b23] mt-1">
        {value}
      </p>
    </div>
  );
};

export default DashboardStatCard;