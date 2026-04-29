import React from "react";

const AlertInfoRow = ({ icon, title, subtitle, children }) => {
  return (
    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg text-[#ba1a1a]">
      <span className="material-symbols-outlined text-xl">{icon}</span>

      <div className="flex-1">
        <p className="text-sm font-bold">{title}</p>
        <p className="text-xs">{subtitle}</p>
      </div>

      {children}
    </div>
  );
};

export default AlertInfoRow;