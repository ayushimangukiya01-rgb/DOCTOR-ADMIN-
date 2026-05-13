import React from "react";

const colorClasses = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  orange: "bg-orange-50 text-orange-500",
  red: "bg-red-50 text-red-500",
};

const Card = ({
  variant = "dashboard",

  icon,
  iconBg,
  iconColor,
  badge,
  badgeClass,
  label,
  value,

  title,
  note,
  color,

  metaIcon,
  metaText,

  description,
  buttonText,

  metaColor = "text-slate-500",
  backgroundIcon,
}) => {
  if (variant === "dashboard") {
    // new: fixed dashboard styles because Tailwind does not always read JSON dynamic classes
    const dashboardIconStyles = {
      "Total Appointments": "bg-blue-50 text-blue-600",
      "Today’s Patients": "bg-emerald-50 text-emerald-600",
      "Pending Consults": "bg-amber-50 text-amber-600",
      Earnings: "bg-indigo-50 text-indigo-600",
    };

    // new: fixed badge styles
    const dashboardBadgeStyles = {
      "Total Appointments": "text-[#006e2f] bg-[#6bff8f]/10",
      "Today’s Patients": "bg-slate-100 text-slate-700",
      "Pending Consults": "text-red-600 bg-red-50",
      Earnings: "text-[#006e2f] bg-[#6bff8f]/10",
    };

    const finalIconStyle =
      dashboardIconStyles[label] ||
      `${iconBg || "bg-blue-50"} ${iconColor || "text-blue-600"}`;

    const finalBadgeStyle =
      dashboardBadgeStyles[label] ||
      badgeClass ||
      "bg-slate-50 text-slate-600";

    return (
      <div className="bg-white p-5 sm:p-6 rounded-xl shadow border border-slate-50 hover:border-blue-200 transition">
        <div className="flex justify-between items-start mb-4">
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center ${finalIconStyle}`}
          >
            <span className="material-symbols-outlined text-[28px]">
              {icon}
            </span>
          </div>

          {badge && (
            <span className={`text-xs px-3 py-1 rounded ${finalBadgeStyle}`}>
              {badge}
            </span>
          )}
        </div>

        <p className="text-xs uppercase text-[#434655] font-semibold">
          {label}
        </p>

        <p className="font-manrope text-[22px] sm:text-[24px] font-semibold text-[#191b23] mt-1">
          {value}
        </p>
      </div>
    );
  }

  if (variant === "patientStat") {
    return (
      <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-[0px_4px_12px_rgba(15,23,42,0.05)]">
        <div className="flex items-center gap-4">
          <div
            className={`w-16 h-16 rounded-xl flex items-center justify-center ${
              colorClasses[color] || "bg-blue-50 text-blue-600"
            }`}
          >
            <span className="material-symbols-outlined text-[34px]">
              {icon}
            </span>
          </div>

          <div>
            <p className="text-sm font-medium text-slate-600">{title}</p>

            <h3 className="font-['Manrope'] text-[28px] leading-[36px] font-bold text-slate-900">
              {value}
            </h3>

            <p
              className={`text-xs font-medium mt-1 ${
                color === "orange" || color === "red"
                  ? "text-[#004ac6]"
                  : "text-green-600"
              }`}
            >
              {note}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "summaryMetric") {
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

        <div
          className={`mt-4 flex items-center gap-2 ${metaColor} text-sm font-medium`}
        >
          <span className="material-symbols-outlined text-sm">{metaIcon}</span>
          <span>{metaText}</span>
        </div>
      </div>
    );
  }

  if (variant === "promo") {
    return (
      <div className="bg-gradient-to-br from-[#004ac6] to-blue-700 p-6 rounded-xl text-white shadow-[0px_4px_12px_rgba(15,23,42,0.05)] relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="font-bold text-lg mb-2">{title}</h4>

          <p className="text-sm text-white/80 mb-4">{description}</p>

          <button className="bg-white text-[#004ac6] px-4 py-2 rounded-lg text-sm font-bold">
            {buttonText}
          </button>
        </div>

        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

        <div className="absolute top-2 right-2 opacity-20">
          <span
            className="material-symbols-outlined text-4xl"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            {icon}
          </span>
        </div>
      </div>
    );
  }

if (variant === "stat") {

  // new: fixed icon colors for appointment stats
  const statIconStyles = {
    "Today's Visits": "bg-blue-50 text-blue-600",
    "Video Call": "bg-green-50 text-green-600",
    "New Patients": "bg-orange-50 text-orange-600",
    Messages: "bg-blue-50 text-blue-600",
  };

  const finalStatIconStyle =
    statIconStyles[label] ||
    `${iconBg || "bg-blue-50"} ${iconColor || "text-blue-600"}`;

  return (
    <div className="bg-white p-6 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-100 flex items-center gap-4">
      
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${finalStatIconStyle}`}
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
}

  return null;
};

export default Card;