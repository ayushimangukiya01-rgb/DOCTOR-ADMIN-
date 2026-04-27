import React from "react";
import TimeSlotRow from "./TimeSlotRow";

const DaySchedule = ({ day, slots }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 pb-6 border-b border-slate-50">
      
      {/* Left (Day) */}
      <div className="w-32 pt-2 shrink-0">
        <span className="font-bold text-slate-900">{day}</span>

        <div className="text-xs text-[#006e2f] mt-1 font-semibold uppercase tracking-wider">
          Active
        </div>
      </div>

      {/* Right (Slots) */}
      <div className="flex-1 space-y-4">
        
        {slots.map((slot, index) => (
          <TimeSlotRow key={index} slot={slot} />
        ))}

        {/* Add Slot Button */}
        <button className="flex items-center gap-1 text-[#004ac6] text-xs font-bold hover:bg-blue-50 px-3 py-1.5 rounded-full transition-colors w-fit">
          <span className="material-symbols-outlined text-[16px]">
            add_circle
          </span>
          Add Time Slot
        </button>

      </div>
    </div>
  );
};

export default DaySchedule;