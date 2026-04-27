import React from "react";

const TimeSlotRow = ({ slot }) => {
  const isBreak = slot.type === "Lunch Break";

  return (
    <div className="flex items-center gap-4">
      
      {/* Time Box */}
      <div
        className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
          isBreak
            ? "bg-orange-50 border-orange-100"
            : "bg-slate-50 border-slate-100"
        }`}
      >
        <input
          type="time"
          defaultValue={slot.start}
          className={`bg-transparent border-none p-0 text-sm focus:ring-0 ${
            isBreak ? "text-orange-700" : "text-slate-700"
          }`}
        />

        <span className={isBreak ? "text-orange-300" : "text-slate-400"}>
          —
        </span>

        <input
          type="time"
          defaultValue={slot.end}
          className={`bg-transparent border-none p-0 text-sm focus:ring-0 ${
            isBreak ? "text-orange-700" : "text-slate-700"
          }`}
        />
      </div>

      {/* Label */}
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

      {/* Delete */}
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