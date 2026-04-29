import React from "react";

const TableContainer = ({ children }) => {
  return (
    <div className="bg-white rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-100 overflow-hidden">
      {children}
    </div>
  );
};

export default TableContainer;