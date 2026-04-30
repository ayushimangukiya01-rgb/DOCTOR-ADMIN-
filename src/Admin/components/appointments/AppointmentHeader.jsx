// src/Admin/components/appointments/AppointmentHeader.jsx
import React from "react";

const stats = [
  {
    label: "Today",
    value: "42",
    icon: "calendar_today",
    iconClass: "bg-blue-50 text-primary",
  },
  {
    label: "Completed",
    value: "12",
    icon: "check_circle",
    iconClass: "bg-tertiary-fixed/30 text-tertiary",
  },
];

const AppointmentHeader = () => {
  return (
    <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between mb-8">
      <div>
        <h2 className="text-[30px] leading-[38px] tracking-[-0.02em] font-bold text-on-surface mb-1">
          Appointment Management
        </h2>

        <p className="text-[14px] leading-5 font-normal text-on-surface-variant">
          Manage and monitor all medical consultations across departments.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4 min-w-[160px]"
          >
            <div className={`p-3 rounded-lg ${item.iconClass}`}>
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>

            <div>
              <p className="font-label-sm text-on-surface-variant">
                {item.label}
              </p>
              <p className="font-h3 text-on-surface">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentHeader;