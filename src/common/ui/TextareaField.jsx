import React from "react";

const TextareaField = ({
  placeholder,
  rows = 3,
  value,
  onChange,
  className = "",
  ...props
}) => {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full rounded-lg border border-[#c3c6d7] focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] text-[16px] leading-[24px] transition-all placeholder:text-slate-300 p-4 outline-none resize-none ${className}`}
      {...props}
    />
  );
};

export default TextareaField;