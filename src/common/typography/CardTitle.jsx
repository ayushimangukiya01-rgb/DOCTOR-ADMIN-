import React from "react";

const CardTitle = ({ children }) => {
  return (
    <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-slate-400 block uppercase mb-4">
      {children}
    </span>
  );
};

export default CardTitle;