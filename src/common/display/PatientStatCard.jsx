import React from "react";

const colorClasses = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  orange: "bg-orange-50 text-orange-500",
  red: "bg-red-50 text-red-500",
};

const PatientStatCard = ({ icon, title, value, note, color }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-[0px_4px_12px_rgba(15,23,42,0.05)]">
      <div className="flex items-center gap-4">
        <div
          className={`w-16 h-16 rounded-xl flex items-center justify-center ${colorClasses[color]}`}
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
};

export default PatientStatCard;