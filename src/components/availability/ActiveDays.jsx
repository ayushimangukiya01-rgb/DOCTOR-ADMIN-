import React from "react";
import CardContainer from "../../common/layout/CardContainer";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const ActiveDays = ({ plannedLeaves = [] }) => {
  // new: get date day name
  const getDayName = (date) =>
    new Date(date).toLocaleDateString("en-US", { weekday: "long" });

  return (
    <CardContainer className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[20px] leading-[28px] font-semibold text-slate-900 font-['Manrope']">
          Active Days
        </h2>

        <button className="text-[#004ac6] text-sm font-semibold">
          Reset All
        </button>
      </div>

      <div className="space-y-3">
        {days.map((day) => {
          // new: get all leaves for this day
const dayLeaves = plannedLeaves.filter(
  (leave) => getDayName(leave.date) === day
);

// new: check full day leave
const hasFullDayLeave = dayLeaves.some(
  (leave) => leave.type === "Full Day"
);

// new: check first half + second half = full day leave
const hasFirstHalfLeave = dayLeaves.some(
  (leave) => leave.type === "First Half"
);

const hasSecondHalfLeave = dayLeaves.some(
  (leave) => leave.type === "Second Half"
);

// new: final inactive condition
const isInactive =
  hasFullDayLeave || (hasFirstHalfLeave && hasSecondHalfLeave);
          

          return (
            <div
              key={day}
           className={`flex items-center justify-between border border-slate-100 rounded-lg px-4 py-3 ${
  isInactive ? "opacity-40" : ""

              }`}
            >
              <span className="text-sm font-medium text-slate-700">{day}</span>

              <input
                type="checkbox"
              checked={!isInactive}
                readOnly
                className="w-5 h-5 accent-purple-500"
              />
            </div>
          );
        })}
      </div>
    </CardContainer>
  );
};

export default ActiveDays;