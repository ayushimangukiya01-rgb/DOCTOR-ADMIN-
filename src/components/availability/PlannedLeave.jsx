import React, { useState } from "react";
import CardContainer from "../../common/layout/CardContainer";
import AlertInfoRow from "../../common/display/AlertInfoRow";

const PlannedLeave = ({ plannedLeaves = [], setPlannedLeaves }) => {
  const [leaveDate, setLeaveDate] = useState("");
  const [leaveType, setLeaveType] = useState("Full Day");

  // new: format date for input min/max
  const formatInputDate = (date) => date.toISOString().split("T")[0];

  // new: today and max date for 7 days validation
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 7);

  const todayDate = formatInputDate(today);
  const maxAllowedDate = formatInputDate(maxDate);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
    });

  const handleAddLeave = () => {
    // new: date required validation
    if (!leaveDate) {
      alert("Please select date");
      return;
    }

    const selectedDate = new Date(leaveDate);
    selectedDate.setHours(0, 0, 0, 0);

    // new: past date validation
    if (selectedDate < today) {
      alert("Past date not allowed");
      return;
    }

    // new: only next 7 days validation
    if (selectedDate > maxDate) {
      alert("Only next 7 days allowed");
      return;
    }

    // new: duplicate same date and same leave type validation
    const isDuplicate = plannedLeaves.some(
      (leave) => leave.date === leaveDate && leave.type === leaveType
    );

    if (isDuplicate) {
      alert("This leave is already added");
      return;
    }

    const newLeave = {
      id: Date.now(),
      date: leaveDate,
      type: leaveType,
    };

    setPlannedLeaves((prev) => [...prev, newLeave]);
    setLeaveDate("");
    setLeaveType("Full Day");
  };

  const handleRemoveLeave = (id) => {
    setPlannedLeaves((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CardContainer className="p-6">
      <h2 className="text-[20px] leading-[28px] font-semibold text-slate-900 mb-4 font-['Manrope']">
        Planned Leave
      </h2>

      <div className="space-y-4">
        <div className="flex flex-col gap-3">
          <input
            type="date"
            min={todayDate}
            max={maxAllowedDate}
            value={leaveDate}
            onChange={(e) => setLeaveDate(e.target.value)}
            className="w-full h-12 border border-slate-200 rounded-xl text-sm px-4 outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
          />

          <div className="flex gap-3">
            <select
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              className="flex-1 h-12 border border-slate-200 rounded-xl text-sm px-4 outline-none bg-white focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
            >
              <option>Full Day</option>
              <option>First Half</option>
              <option>Second Half</option>
            </select>

            <button
              type="button"
              onClick={handleAddLeave}
              className="h-12 min-w-[52px] px-4 bg-[#004ac6] hover:bg-[#0037a3] text-white rounded-xl flex items-center justify-center transition-all"
            >
              <span className="material-symbols-outlined text-[24px]">
                add
              </span>
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {plannedLeaves.map((leave) => (
            <AlertInfoRow
              key={leave.id}
              icon="event_busy"
              title={`${formatDate(leave.date)} Leave`}
              subtitle={leave.type}
            >
              <button
                type="button"
                onClick={() => handleRemoveLeave(leave.id)}
                className="material-symbols-outlined text-sm opacity-60 hover:opacity-100"
              >
                close
              </button>
            </AlertInfoRow>
          ))}
        </div>
      </div>
    </CardContainer>
  );
};

export default PlannedLeave;