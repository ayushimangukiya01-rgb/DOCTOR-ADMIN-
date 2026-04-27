import React from "react";

const stats = [
  {
    icon: "groups",
    title: "Total Patients",
    value: "1,248",
    note: "+12 this month",
    color: "blue",
  },
  {
    icon: "person_add",
    title: "New Patients",
    value: "126",
    note: "+8 this month",
    color: "green",
  },
  {
    icon: "event_repeat",
    title: "Follow-up Required",
    value: "98",
    note: "View all",
    color: "orange",
  },
  {
    icon: "ecg_heart",
    title: "Critical Cases",
    value: "24",
    note: "View all",
    color: "red",
  },
];

const colorClasses = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  orange: "bg-orange-50 text-orange-500",
  red: "bg-red-50 text-red-500",
};

const PatientStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-xl border border-slate-100 p-5 shadow-[0px_4px_12px_rgba(15,23,42,0.05)]"
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-16 h-16 rounded-xl flex items-center justify-center ${colorClasses[item.color]}`}
            >
              <span className="material-symbols-outlined text-[34px]">
                {item.icon}
              </span>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-600">
                {item.title}
              </p>

              <h3 className="font-['Manrope'] text-[28px] leading-[36px] font-bold text-slate-900">
                {item.value}
              </h3>

              <p
                className={`text-xs font-medium mt-1 ${
                  item.color === "orange" || item.color === "red"
                    ? "text-[#004ac6]"
                    : "text-green-600"
                }`}
              >
                {item.note}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientStats;