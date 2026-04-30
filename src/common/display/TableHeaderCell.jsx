// src/common/display/TableHeaderCell.jsx
import React from "react";

const TableHeaderCell = ({ children, className = "", variant = "default" }) => {
  const adminClass =
    "px-6 py-3 text-[12px] leading-4 font-medium text-on-surface-variant uppercase tracking-wider whitespace-nowrap";

  const defaultClass =
    "px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap";

  return (
    <th className={`${variant === "admin" ? adminClass : defaultClass} ${className}`}>
      {children}
    </th>
  );
};

export default TableHeaderCell;