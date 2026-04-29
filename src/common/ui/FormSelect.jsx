import React from "react";

const FormSelect = ({ label, options, className = "" }) => {
  return (
    <div>
      {label && (
        <label className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-slate-500 uppercase mb-2 block">
          {label}
        </label>
      )}

  <select
  className={`w-full h-11 rounded-lg border border-[#c3c6d7] focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] outline-none px-3 ${className}`}
>
      
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;