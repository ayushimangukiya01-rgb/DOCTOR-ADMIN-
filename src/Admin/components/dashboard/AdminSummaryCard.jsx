// src/Admin/components/dashboard/AdminSummaryCard.jsx
import React from "react";

const AdminSummaryCard = ({
  icon,
  title,
  value,
  trendIcon,
  trendText,
  iconClass,
  trendClass,
}) => {
  return (
    <div className="min-w-0 bg-surface-container-lowest p-5 sm:p-6 rounded-xl border border-outline-variant/30 shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow min-h-[170px] sm:min-h-[190px] flex flex-col justify-between">
      <div className="min-w-0">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 shrink-0 ${iconClass}`}
        >
          <span className="material-symbols-outlined text-[24px] leading-none">
            {icon}
          </span>
        </div>

        <p className="text-[12px] leading-4 font-medium text-on-surface-variant mb-1 truncate">
          {title}
        </p>

        <h3 className="text-[24px] leading-8 font-semibold text-on-surface truncate">
          {value}
        </h3>
      </div>

      <div
        className={`min-w-0 flex items-center gap-1 mt-3 text-[12px] leading-4 font-medium ${trendClass}`}
      >
        {trendIcon && (
          <span className="material-symbols-outlined text-[16px] leading-none shrink-0">
            {trendIcon}
          </span>
        )}

        <span className="truncate">{trendText}</span>
      </div>
    </div>
  );
};

export default AdminSummaryCard;