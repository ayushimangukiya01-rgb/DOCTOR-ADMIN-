import React from "react";

const PaginationButton = ({
  children,
  active = false,
  icon = false,
}) => {
  const base =
    "w-8 h-8 rounded-lg flex items-center justify-center";

  const styles = active
    ? "bg-primary text-white text-sm font-bold"
    : icon
    ? "border border-slate-200 text-slate-400 hover:bg-slate-50"
    : "border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-medium";

  return (
    <button className={`${base} ${styles}`}>
      {children}
    </button>
  );
};

export default PaginationButton;