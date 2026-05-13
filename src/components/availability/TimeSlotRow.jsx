import React from "react";
import TimeRangeInput from "../../common/display/TimeRangeInput";

const TimeSlotRow = ({ slot }) => {
  const isBreak = slot.type === "Lunch Break";

  // new: leave slot style
  const isLeave = slot.type === "Leave";

  return (
    <div className="flex items-center gap-4">
      <TimeRangeInput start={slot.start} end={slot.end} isBreak={isBreak} />

      {slot.type && (
        <span
          className={`text-xs ${
            isLeave
              ? "text-red-500 font-semibold"
              : isBreak
              ? "text-orange-400 font-medium"
              : "text-slate-400"
          }`}
        >
          {slot.type}
        </span>
      )}

     
    </div>
  );
};

export default TimeSlotRow;