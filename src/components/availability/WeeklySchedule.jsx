import React from "react";
import DaySchedule from "./DaySchedule";

const weeklySlots = [
  {
    day: "Monday",
    slots: [
      { start: "09:00", end: "13:00", type: "Work Session" },
      { start: "13:00", end: "14:00", type: "Lunch Break" },
      { start: "14:00", end: "18:00", type: "Work Session" },
    ],
  },
  {
    day: "Tuesday",
    slots: [
      { start: "09:00", end: "13:00", type: "Work Session" },
      { start: "13:00", end: "14:00", type: "Lunch Break" },
      { start: "14:00", end: "18:00", type: "Work Session" },
    ],
  },
  {
    day: "Wednesday",
    slots: [
      { start: "09:00", end: "13:00", type: "Work Session" },
      { start: "13:00", end: "14:00", type: "Lunch Break" },
      { start: "14:00", end: "18:00", type: "Work Session" },
    ],
  },
  {
    day: "Thursday",
    slots: [
      { start: "09:00", end: "13:00", type: "Work Session" },
      { start: "13:00", end: "14:00", type: "Lunch Break" },
      { start: "14:00", end: "18:00", type: "Work Session" },
    ],
  },
  {
    day: "Friday",
    slots: [
      { start: "09:00", end: "13:00", type: "Work Session" },
      { start: "13:00", end: "14:00", type: "Lunch Break" },
      { start: "14:00", end: "18:00", type: "Work Session" },
    ],
  },
  {
    day: "Saturday",
    slots: [
      { start: "09:00", end: "13:00", type: "Work Session" },
      { start: "13:00", end: "14:00", type: "Lunch Break" },
      { start: "14:00", end: "18:00", type: "Work Session" },
    ],
  },
  {
    day: "Sunday",
    slots: [
      { start: "09:00", end: "13:00", type: "Work Session" },
      { start: "13:00", end: "14:00", type: "Lunch Break" },
      { start: "14:00", end: "18:00", type: "Work Session" },
    ],
  },
];

const WeeklySchedule = ({ plannedLeaves = [] }) => {
  const formatDateKey = (date) => date.toISOString().split("T")[0];

  // new: show next 7 days from today
  const nextSevenDays = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);

    return {
      dateKey: formatDateKey(date),
      day: date.toLocaleDateString("en-US", { weekday: "long" }),
      labelDate: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      isToday: index === 0,
    };
  });

  // new: convert leave into slot changes
 // new: convert leave into slot changes
const getSlotsWithLeave = (dayInfo) => {
  const baseDay = weeklySlots.find((item) => item.day === dayInfo.day);
  if (!baseDay) return [];

  // new: get all leaves for same date
  const dayLeaves = plannedLeaves.filter(
    (item) => item.date === dayInfo.dateKey
  );

  if (dayLeaves.length === 0) return baseDay.slots;

  // new: if full day OR both halves selected then full day leave
  const hasFullDayLeave = dayLeaves.some((leave) => leave.type === "Full Day");

  const hasFirstHalfLeave = dayLeaves.some(
    (leave) => leave.type === "First Half"
  );

  const hasSecondHalfLeave = dayLeaves.some(
    (leave) => leave.type === "Second Half"
  );

  const isFullDay = hasFullDayLeave || (hasFirstHalfLeave && hasSecondHalfLeave);

  if (isFullDay) {
    return baseDay.slots.map((slot) => ({
      ...slot,
      type: slot.type === "Lunch Break" ? "Lunch Break" : "Leave",
    }));
  }

  if (hasFirstHalfLeave) {
    return baseDay.slots.map((slot) => ({
      ...slot,
      type:
        slot.start < "13:00" && slot.type !== "Lunch Break"
          ? "Leave"
          : slot.type,
    }));
  }

  if (hasSecondHalfLeave) {
    return baseDay.slots.map((slot) => ({
      ...slot,
      type:
        slot.start >= "14:00" && slot.type !== "Lunch Break"
          ? "Leave"
          : slot.type,
    }));
  }

  return baseDay.slots;
};

// new: day status based on leave type
// new: day status based on leave type
const getDayStatus = (dayInfo) => {
  const dayLeaves = plannedLeaves.filter(
    (item) => item.date === dayInfo.dateKey
  );

  const hasFullDayLeave = dayLeaves.some((leave) => leave.type === "Full Day");
  const hasFirstHalfLeave = dayLeaves.some(
    (leave) => leave.type === "First Half"
  );
  const hasSecondHalfLeave = dayLeaves.some(
    (leave) => leave.type === "Second Half"
  );

  if (hasFullDayLeave || (hasFirstHalfLeave && hasSecondHalfLeave)) {
    return "Leave";
  }

  return "Active";
};

  return (
    <div className="bg-white rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] overflow-hidden flex flex-col">
      <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-slate-900 font-['Manrope']">
            Weekly Time Slots
          </h2>

          <p className="text-slate-500 text-sm mt-1">
            Define your working hours and breaks for each active day.
          </p>
        </div>
      </div>

      <div className="p-6 space-y-8 flex-1 overflow-y-auto">
        {nextSevenDays.map((item) => (
          <DaySchedule
  key={item.dateKey}
  day={`${item.day} ${item.labelDate}${item.isToday ? " Today" : ""}`}
  status={getDayStatus(item)}
  slots={getSlotsWithLeave(item)}
/>
        ))}
      </div>
    </div>
  );
};

export default WeeklySchedule;