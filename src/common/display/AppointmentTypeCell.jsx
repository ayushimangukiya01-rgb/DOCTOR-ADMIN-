import React from "react";

const AppointmentTypeCell = ({ icon, type, typeBg, typeColor }) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center ${typeBg} ${typeColor}`}
      >
        <span className="material-symbols-outlined text-base">{icon}</span>
      </div>

      <span className="text-sm text-slate-700 whitespace-nowrap">{type}</span>
    </div>
  );
};

export default AppointmentTypeCell;