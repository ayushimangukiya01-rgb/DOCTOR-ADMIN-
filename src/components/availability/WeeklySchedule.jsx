import React from "react";
import DaySchedule from "./DaySchedule";

const WeeklySchedule = () => {
  return (
    <div className="bg-white rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] overflow-hidden flex flex-col h-full">
      
      {/* Header */}
      <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-slate-900 font-['Manrope']">
            Weekly Time Slots
          </h2>

          <p className="text-slate-500 text-sm mt-1">
            Define your working hours and breaks for each active day.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#004ac6] text-white px-6 py-2.5 rounded-lg text-[16px] font-medium shadow-sm hover:brightness-110 transition">
          <span className="material-symbols-outlined text-[18px]">
            save
          </span>
          Save Schedule
        </button>
      </div>

      {/* Body */}
      <div className="p-6 space-y-8 max-h-[700px] overflow-y-auto">
        
        <DaySchedule
          day="Monday"
          slots={[
            { start: "09:00", end: "13:00", type: "Work Session" },
            { start: "13:00", end: "14:00", type: "Lunch Break" },
            { start: "14:00", end: "18:00", type: "Work Session" },
          ]}
        />

        <DaySchedule
          day="Tuesday"
          slots={[
            { start: "08:00", end: "12:00", type: "" },
          ]}
        />

        <DaySchedule
          day="Wednesday"
          slots={[
            { start: "09:00", end: "17:00", type: "" },
          ]}
        />

        {/* Thursday Empty */}
        <div className="flex flex-col md:flex-row gap-6 pb-6 border-b border-slate-50">
          
          <div className="w-32 pt-2">
            <span className="font-bold text-slate-900">
              Thursday
            </span>

            <div className="text-xs text-[#006e2f] mt-1 font-semibold uppercase tracking-wider">
              Active
            </div>
          </div>

          <div className="flex-1 text-center py-4 bg-slate-50/50 border border-dashed border-slate-200 rounded-xl">
            <span className="text-slate-400 text-sm">
              No time slots added for Thursday.
            </span>

            <button className="block mx-auto mt-2 text-[#004ac6] font-bold text-sm">
              Create standard 9-5 schedule?
            </button>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="p-6 bg-slate-50/50 flex items-center justify-between">
        
        <div className="flex -space-x-2">
          
          <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

        </div>

        <p className="text-xs text-slate-500 font-medium">
          Schedule also affects your assistant&apos;s view
        </p>

      </div>
    </div>
  );
};

export default WeeklySchedule;