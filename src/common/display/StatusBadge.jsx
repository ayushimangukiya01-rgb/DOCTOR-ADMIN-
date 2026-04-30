// src/common/display/StatusBadge.jsx
import React from "react";

const statusClasses = {
  Confirmed: "bg-green-50 text-green-600",
  Cancelled: "bg-red-50 text-red-500",
  Pending: "bg-orange-50 text-orange-600",
  Stable: "bg-green-50 text-green-600",
  "Follow-up": "bg-orange-50 text-orange-500",
  Critical: "bg-red-50 text-red-500",
};

const adminStatusClasses = {
  Confirmed: "bg-green-100 text-[#006947]",
  Pending: "bg-orange-100 text-orange-700",
  "Under Review": "bg-blue-100 text-blue-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Approved: "bg-green-100 text-[#006947]",
  Rejected: "bg-red-100 text-[#ba1a1a]",
  Cancelled: "bg-red-100 text-[#ba1a1a]",
};

const StatusBadge = ({ status, variant = "default" }) => {
  if (variant === "admin") {
    return (
      <span
        className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase whitespace-nowrap ${
          adminStatusClasses[status] || "bg-slate-100 text-slate-600"
        }`}
      >
        {status}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium px-3 py-1 min-w-[82px] ${
        statusClasses[status] || "bg-slate-50 text-slate-600"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;