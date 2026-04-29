import React from "react";

const PillBadge = ({ children }) => {
  return (
    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
      {children}
    </span>
  );
};

export default PillBadge;