import React from "react";

const FormSelect = ({ options = [], value, onChange, className = "", ...props }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`w-full h-11 rounded-lg border border-[#c3c6d7] focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] outline-none px-3 bg-white ${className}`}
      {...props}
    >
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;