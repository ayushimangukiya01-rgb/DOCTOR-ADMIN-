import React from "react";

const StatusBadgeOutline = ({ text, className }) => {
  return (
    <span
      className={`px-3 py-1 rounded-full text-[10px] font-bold border ${className}`}
    >
      {text}
    </span>
  );
};

export default StatusBadgeOutline;