import React from "react";

const InputField = ({
  type = "text",
  placeholder = "",
  defaultValue,
  value,
  onChange,
  className = "",
  ...props
}) => {
  const inputProps = {
    type,
    placeholder,
    className: `w-full h-11 rounded-lg border border-[#c3c6d7] focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] outline-none px-3 ${className}`,
    ...props,
  };

  if (value !== undefined) {
    inputProps.value = value;
    inputProps.onChange = onChange;
  } else {
    inputProps.defaultValue = defaultValue;
  }

  return <input {...inputProps} />;
};

export default InputField;