import React from "react";

const PlannedLeave = () => {
  return (
    <section className="bg-white p-6 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)]">
      <h2 className="text-[20px] leading-[28px] font-semibold text-slate-900 mb-4 font-['Manrope']">
        Planned Leave
      </h2>

      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="date"
            className="flex-1 min-w-0 border border-slate-200 rounded-lg text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
          />

          <button className="bg-[#004ac6] text-white p-2 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>

        <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg text-[#ba1a1a]">
          <span className="material-symbols-outlined text-xl">
            event_busy
          </span>

          <div className="flex-1">
            <p className="text-sm font-bold">Oct 12 - Oct 15</p>
            <p className="text-xs">Annual Conference</p>
          </div>

          <button className="material-symbols-outlined text-sm opacity-60 hover:opacity-100">
            close
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlannedLeave;