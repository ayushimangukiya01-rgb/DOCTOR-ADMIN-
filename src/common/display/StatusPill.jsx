import React from "react";

const StatusPill = ({ status }) => {
  const statusClass =
    status === "Confirmed"
      ? "bg-green-50 text-green-600"
      : status === "Cancelled"
      ? "bg-red-50 text-red-500"
      : "bg-blue-50 text-blue-600";

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${statusClass}`}
    >
      <span className="w-2 h-2 rounded-full bg-current"></span>
      {status}
    </span>
  );
};

export default StatusPill;