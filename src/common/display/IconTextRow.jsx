import React from "react";

const IconTextRow = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-1.5 text-slate-500">
      <span className="material-symbols-outlined text-sm">
        {icon}
      </span>
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default IconTextRow;