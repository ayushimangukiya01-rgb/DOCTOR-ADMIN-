import React from "react";

const TableHeaderCell = ({ children, align = "left" }) => {
  return (
    <th
      className={`px-6 py-4 text-xs font-semibold uppercase tracking-[0.05em] text-[#434655] ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {children}
    </th>
  );
};

export default TableHeaderCell;