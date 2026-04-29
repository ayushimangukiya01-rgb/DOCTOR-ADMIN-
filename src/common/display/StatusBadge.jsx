import React from "react";

const statusClasses = {
  Confirmed: "bg-green-50 text-green-600",
  Cancelled: "bg-red-50 text-red-500",
  Pending: "bg-blue-50 text-blue-600",

  Stable: "bg-green-50 text-green-600",
  "Follow-up": "bg-orange-50 text-orange-500",
  Critical: "bg-red-50 text-red-500",
};

const StatusBadge = ({ status, variant = "default" }) => {
  return (
    <span
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium ${
        variant === "patient"
          ? "px-3 py-1 min-w-[82px]"
          : "gap-1 px-3 py-1 rounded-full"
      } ${statusClasses[status] || "bg-slate-50 text-slate-600"}`}
    >
      {variant !== "patient" && (
        <span className="w-2 h-2 rounded-full bg-current"></span>
      )}

      {status}
    </span>
  );
};

export default StatusBadge;