import React from "react";
import TimeRangeInput from "../../common/display/TimeRangeInput";

const TimeSlotRow = ({ slot }) => {
  const isBreak = slot.type === "Lunch Break";

  return (
    <div className="flex items-center gap-4">
      
      <TimeRangeInput
        start={slot.start}
        end={slot.end}
        isBreak={isBreak}
      />

      {slot.type && (
        <span
          className={`text-xs ${
            isBreak
              ? "text-orange-400 font-medium"
              : "text-slate-400"
          }`}
        >
          {slot.type}
        </span>
      )}

      <button
        className={`material-symbols-outlined ml-auto ${
          isBreak
            ? "text-orange-300 hover:text-[#ba1a1a]"
            : "text-slate-300 hover:text-[#ba1a1a]"
        }`}
      >
        delete
      </button>

    </div>
  );
};

export default TimeSlotRow;