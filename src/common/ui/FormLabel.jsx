import React from "react";

const FormLabel = ({ children }) => {
  return (
    <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-slate-500 uppercase">
      {children}
    </label>
  );
};

export default FormLabel;