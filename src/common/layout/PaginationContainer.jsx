import React from "react";

const PaginationContainer = ({ text, children }) => {
  return (
    <div className="px-4 sm:px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-slate-500">{text}</p>

      <div className="flex items-center gap-2">
        {children}
      </div>
    </div>
  );
};

export default PaginationContainer;