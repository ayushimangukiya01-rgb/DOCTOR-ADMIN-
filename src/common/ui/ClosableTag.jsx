import React from "react";

const ClosableTag = ({ children }) => {
  return (
    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full flex items-center gap-1">
      {children}
      <span className="material-symbols-outlined text-sm cursor-pointer">
        close
      </span>
    </span>
  );
};

export default ClosableTag;