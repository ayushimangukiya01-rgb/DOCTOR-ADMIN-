import React from "react";

const InfoItem = ({ label, value, small = false }) => {
  return (
    <div>
      <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-slate-400 block uppercase">
        {label}
      </span>

      <span
        className={
          small
            ? "text-[16px] leading-[24px] text-slate-900"
            : "font-manrope text-[20px] leading-[28px] font-semibold text-slate-900"
        }
      >
        {value}
      </span>
    </div>
  );
};

export default InfoItem;