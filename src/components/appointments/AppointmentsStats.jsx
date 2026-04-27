import React from "react";

const stats = [
  {
    icon: "calendar_month",
    label: "Today's Visits",
    value: "12",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: "video_chat",
    label: "Video Call",
    value: "8",
    iconBg: "bg-[#6bff8f]/20",
    iconColor: "text-[#006e2f]",
  },
  {
    icon: "groups",
    label: "New Patients",
    value: "4",
    iconBg: "bg-[#ffb596]/20",
    iconColor: "text-[#943700]",
  },
  {
    icon: "pending_actions",
    label: "Messages",
    value: "3",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
];

const AppointmentsStats = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {stats.map((item) => (
        <div
          key={item.label}
          className="bg-white p-6 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-100 flex items-center gap-4"
        >
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${item.iconBg} ${item.iconColor}`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#434655]">
              {item.label}
            </p>
            <p className="font-manrope text-[20px] leading-[28px] font-semibold text-slate-900">
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AppointmentsStats;