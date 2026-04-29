import React from "react";

const VitalSignsBox = ({ items }) => {
  return (
    <div className="bg-[#f3f3fe] rounded-lg p-4">
      <p className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-slate-500 uppercase mb-2">
        Vital Signs
      </p>

      <div className="flex flex-wrap gap-4">
        {items.map((item) => (
          <div key={item.label}>
            <span className="text-xs text-slate-400">{item.label}</span>{" "}
            <span className="text-sm font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VitalSignsBox;