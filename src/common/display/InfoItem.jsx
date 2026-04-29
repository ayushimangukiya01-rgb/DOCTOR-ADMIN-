import React from "react";

const InfoItem = ({ label, value, helper, italicHelper = false }) => {
  return (
    <div>
      <p className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-slate-400 uppercase mb-1">
        {label}
      </p>

      <p className="font-manrope text-[20px] leading-[28px] font-semibold text-slate-900">
        {value}
      </p>

      {helper && (
        <p className={`text-sm text-slate-500 ${italicHelper ? "italic" : ""}`}>
          {helper}
        </p>
      )}
    </div>
  );
};

export default InfoItem;