import React from "react";

const CardContainer = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white p-5 sm:p-6 lg:p-8 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-100 ${className}`}
    >
      {children}
    </div>
  );
};

export default CardContainer;