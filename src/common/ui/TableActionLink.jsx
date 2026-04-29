import React from "react";
import { Link } from "react-router-dom";

const TableActionLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-[#004ac6] border border-slate-200 rounded-lg hover:bg-slate-50 transition-all duration-200"
    >
      {children}
    </Link>
  );
};

export default TableActionLink;