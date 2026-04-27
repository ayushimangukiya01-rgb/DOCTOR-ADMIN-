import React from "react";
import { useNavigate } from "react-router-dom";

const AppointmentHero = () => {
  const navigate = useNavigate(); // ✅ add this

  return (
    <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
      <div>
        <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-blue-600 uppercase mb-2 block">
          Upcoming Appointment
        </span>     

        <h2 className="font-manrope text-[24px] sm:text-[30px] lg:text-[36px] leading-tight tracking-[-0.02em] font-bold text-slate-900">
          Oct 24, 2023 • 10:30 AM
        </h2>

        <div className="flex flex-wrap items-center gap-3 mt-3">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#006e2f]/10 text-[#006e2f] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#006e2f]"></span>
            <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase">
              Confirmed
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-500">
            <span className="material-symbols-outlined text-sm">
              videocam
            </span>
            <span className="text-sm">Video Consultation</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <button className="px-6 py-3 border border-[#c3c6d7] text-slate-600 rounded-lg text-[16px] font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-[0px_4px_12px_rgba(15,23,42,0.05)]">
          <span className="material-symbols-outlined">event_repeat</span>
          Reschedule
        </button>

        <button className="px-6 py-3 border border-red-200 text-red-600 rounded-lg text-[16px] font-medium hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">cancel</span>
          Cancel
        </button>

        {/* ✅ ONLY CHANGE HERE */}
        <button
          onClick={() => navigate("/videoconsultation")}
          className="px-8 py-3 bg-[#004ac6] text-white rounded-lg text-[16px] font-medium hover:bg-[#003ea8] transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 active:scale-95"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            play_circle
          </span>
          Start Consultation
        </button>
      </div>
    </section>
  );
};

export default AppointmentHero;