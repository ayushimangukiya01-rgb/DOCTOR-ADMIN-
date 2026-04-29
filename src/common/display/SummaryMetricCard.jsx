import React from "react";

const SummaryMetricCard = ({
  label,
  value,
  metaIcon,
  metaText,
  metaColor = "text-slate-500",
  backgroundIcon,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-100 relative overflow-hidden group">
      {backgroundIcon && (
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <span className="material-symbols-outlined text-6xl">
            {backgroundIcon}
          </span>
        </div>
      )}

      <p className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase text-slate-500 mb-2">
        {label}
      </p>

      <h2 className="font-manrope text-[32px] sm:text-[36px] leading-[44px] tracking-[-0.02em] font-bold text-slate-900">
        {value}
      </h2>

      <div className={`mt-4 flex items-center gap-2 ${metaColor} text-sm font-medium`}>
        <span className="material-symbols-outlined text-sm">{metaIcon}</span>
        <span>{metaText}</span>
      </div>
    </div>
  );
};

export default SummaryMetricCard;