import React from "react";

const DescriptionBox = ({ children }) => {
  return (
    <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-lg border-l-4 border-[#004ac6] text-sm sm:text-base">
      {children}
    </p>
  );
};

export default DescriptionBox;