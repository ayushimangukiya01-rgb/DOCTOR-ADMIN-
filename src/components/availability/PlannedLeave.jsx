import React from "react";
import CardContainer from "../../common/layout/CardContainer";
import AlertInfoRow from "../../common/display/AlertInfoRow";

const PlannedLeave = () => {
  return (
    <CardContainer className="p-6">
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

        <AlertInfoRow
          icon="event_busy"
          title="Oct 12 - Oct 15"
          subtitle="Annual Conference"
        >
          <button className="material-symbols-outlined text-sm opacity-60 hover:opacity-100">
            close
          </button>
        </AlertInfoRow>
      </div>
    </CardContainer>
  );
};

export default PlannedLeave;