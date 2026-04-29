import React from "react";

const CheckboxRow = ({ label, checked, disabled }) => {
  return (
    <label
      className={`flex items-center justify-between p-3 border border-slate-100 rounded-lg cursor-pointer transition-colors ${
        disabled
          ? "opacity-50 cursor-default"
          : "hover:bg-slate-50"
      }`}
    >
      <span
        className={`font-medium ${
          disabled ? "text-slate-400" : "text-slate-700"
        }`}
      >
        {label}
      </span>

      <input
        type="checkbox"
        defaultChecked={checked}
        disabled={disabled}
        className="w-5 h-5 text-[#004ac6] border-slate-300 rounded focus:ring-[#004ac6]"
      />
    </label>
  );
};

export default CheckboxRow;