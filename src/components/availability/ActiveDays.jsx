import React from "react";

const days = [
  { name: "Monday", active: true },
  { name: "Tuesday", active: true },
  { name: "Wednesday", active: true },
  { name: "Thursday", active: true },
  { name: "Friday", active: true },
  { name: "Saturday", active: false },
];

const ActiveDays = () => {
  return (
    <section className="bg-white p-6 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)]">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[20px] leading-[28px] font-semibold text-slate-900 font-['Manrope']">
          Active Days
        </h2>

        <button className="text-[#004ac6] text-sm font-semibold hover:underline">
          Reset All
        </button>
      </div>

      {/* Days List */}
      <div className="space-y-3">
        {days.map((day, index) => (
          <label
            key={index}
            className={`flex items-center justify-between p-3 border border-slate-100 rounded-lg cursor-pointer transition-colors ${
              day.active
                ? "hover:bg-slate-50"
                : "opacity-50 cursor-default"
            }`}
          >
            <span
              className={`font-medium ${
                day.active ? "text-slate-700" : "text-slate-400"
              }`}
            >
              {day.name}
            </span>

            <input
              type="checkbox"
              defaultChecked={day.active}
              className="w-5 h-5 text-[#004ac6] border-slate-300 rounded focus:ring-[#004ac6]"
            />
          </label>
        ))}
      </div>
    </section>
  );
};

export default ActiveDays;