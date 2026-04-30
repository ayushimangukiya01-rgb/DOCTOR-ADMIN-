// src/common/layout/TableContainer.jsx
import React from "react";

const TableContainer = ({ children, className = "", variant = "default" }) => {
  const adminClass =
    "bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-[0_2px_10px_rgba(0,0,0,0.05)] overflow-hidden";

  const defaultClass =
    "bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden";

  return (
    <div className={`${variant === "admin" ? adminClass : defaultClass} ${className}`}>
      {children}
    </div>
  );
};

export default TableContainer;