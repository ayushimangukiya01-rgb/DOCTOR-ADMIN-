import React from "react";

const ActionButton = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  type = "button", // ✅ important for forms
}) => {
  const base =
    "px-6 py-3 rounded-lg text-[16px] font-medium transition-all duration-200 flex items-center justify-center gap-2";

  const variants = {
    outline:
      "border border-[#c3c6d7] text-slate-600 hover:bg-slate-50 shadow-[0px_4px_12px_rgba(15,23,42,0.05)]",

    danger:
      "border border-red-200 text-red-600 hover:bg-red-50",

    primary:
      "bg-[#004ac6] text-white hover:bg-[#003ea8] shadow-lg shadow-blue-500/20 active:scale-95",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default ActionButton;