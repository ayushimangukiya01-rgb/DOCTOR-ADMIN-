import React from "react";

const SlotConfiguration = () => {
  return (
    <section className="bg-white p-6 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)]">
      
      {/* Title */}
      <h2 className="text-[20px] leading-[28px] font-semibold text-slate-900 mb-4 font-['Manrope']">
        Slot Configuration
      </h2>

      <div className="space-y-4">
        
        {/* Label */}
        <div>
          <label className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-slate-500 uppercase mb-2 block">
            Standard Slot Duration
          </label>

          {/* Select */}
          <select className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[16px] leading-[24px] text-slate-700 outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]">
            <option>15 mins</option>
            <option defaultValue>30 mins</option>
            <option>45 mins</option>
            <option>60 mins</option>
          </select>
        </div>

        {/* Buffer */}
        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
          <span className="text-sm font-medium text-slate-700">
            Buffer between slots
          </span>

          <span className="text-sm font-bold text-[#004ac6]">
            10 mins
          </span>
        </div>

      </div>
    </section>
  );
};

export default SlotConfiguration;