import React from "react";

const TimeRangeInput = ({
  start,
  end,
  isBreak,
}) => {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
        isBreak
          ? "bg-orange-50 border-orange-100"
          : "bg-slate-50 border-slate-100"
      }`}
    >
      <input
        type="time"
        defaultValue={start}
        className={`bg-transparent border-none p-0 text-sm focus:ring-0 ${
          isBreak ? "text-orange-700" : "text-slate-700"
        }`}
      />

      <span className={isBreak ? "text-orange-300" : "text-slate-400"}>
        —
      </span>

      <input
        type="time"
        defaultValue={end}
        className={`bg-transparent border-none p-0 text-sm focus:ring-0 ${
          isBreak ? "text-orange-700" : "text-slate-700"
        }`}
      />
    </div>
  );
};

export default TimeRangeInput;