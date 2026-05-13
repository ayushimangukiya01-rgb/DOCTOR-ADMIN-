import React from "react";
import TimeSlotRow from "./TimeSlotRow";
import DayStatusLabel from "../../common/display/DayStatusLabel";

const DaySchedule = ({ day, slots, status = "Active" }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 pb-6 border-b border-slate-50">
     <DayStatusLabel day={day} status={status} />
      <div className="flex-1 space-y-4">
        {slots.map((slot, index) => (
          <TimeSlotRow key={index} slot={slot} />
        ))}

        {/* <button className="flex items-center gap-1 text-[#004ac6] text-xs font-bold hover:bg-blue-50 px-3 py-1.5 rounded-full transition-colors w-fit">
          <span className="material-symbols-outlined text-[16px]">
            add_circle
          </span>
          Add Time Slot
        </button> */}
      </div>
    </div>
  );
};

export default DaySchedule;