import React from "react";

const InputField = ({
  type = "text",
  placeholder,
  defaultValue,
  className = "",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className={`w-full h-11 rounded-lg border border-[#c3c6d7] focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] outline-none px-3 ${className}`}
    />
  );
};

export default InputField;