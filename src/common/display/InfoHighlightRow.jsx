import React from "react";

const InfoHighlightRow = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
      <span className="text-sm font-medium text-slate-700">{label}</span>

      <span className="text-sm font-bold text-[#004ac6]">{value}</span>
    </div>
  );
};

export default InfoHighlightRow;