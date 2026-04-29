import React from "react";

const PatientTableHeaderCell = ({ children, align = "left" }) => {
  return (
    <th
      className={`px-5 py-4 text-[13px] font-semibold text-slate-500 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {children}
    </th>
  );
};

export default PatientTableHeaderCell;