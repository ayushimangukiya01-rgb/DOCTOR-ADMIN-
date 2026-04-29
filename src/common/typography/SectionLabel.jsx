import React from "react";

const SectionLabel = ({ children }) => {
  return (
    <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-blue-600 uppercase mb-2 block">
      {children}
    </span>
  );
};

export default SectionLabel;