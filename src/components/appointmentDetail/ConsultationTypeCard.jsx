import React from "react";

const ConsultationTypeCard = () => {
  return (
    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-100">
      <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-slate-400 block uppercase mb-4">
        Consultation Type
      </span>

      <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
        <div className="w-12 h-12 bg-[#004ac6] flex items-center justify-center rounded-lg text-white shrink-0">
          <span className="material-symbols-outlined text-2xl">videocam</span>
        </div>

        <div>
          <h4 className="text-[16px] leading-[24px] font-semibold text-slate-900">
            Video Call
          </h4>
          <p className="text-sm text-slate-500">Scheduled for 30 mins</p>
        </div>
      </div>
    </div>
  );
};

export default ConsultationTypeCard;