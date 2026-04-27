import React from "react";

const PrescriptionExtraDetails = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Recommended Tests */}
      <section className="bg-white rounded-xl border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] p-5 sm:p-6">
        <h3 className="font-manrope text-[20px] leading-[28px] font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#004ac6]">
            biotech
          </span>
          Recommended Tests
        </h3>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full flex items-center gap-1">
            CBC
            <span className="material-symbols-outlined text-sm cursor-pointer">
              close
            </span>
          </span>

          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full flex items-center gap-1">
            Fast Glucose
            <span className="material-symbols-outlined text-sm cursor-pointer">
              close
            </span>
          </span>

          <button className="px-3 py-1 border border-dashed border-slate-300 text-slate-400 text-xs font-semibold rounded-full hover:border-[#004ac6] hover:text-[#004ac6] transition-colors flex items-center gap-1">
            + Add Test
          </button>
        </div>
      </section>

      {/* Follow-up */}
      <section className="bg-white rounded-xl border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] p-5 sm:p-6">
        <h3 className="font-manrope text-[20px] leading-[28px] font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#004ac6]">
            event_repeat
          </span>
          Follow-up Schedule
        </h3>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="flex-1 space-y-2">
            <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-slate-500 uppercase">
              Next Visit Date
            </label>
            <input
              type="date"
              defaultValue="2023-11-12"
              className="w-full rounded-lg border border-[#c3c6d7] focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] h-11 px-3 outline-none"
            />
          </div>

          <div className="flex-1 space-y-2">
            <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-slate-500 uppercase">
              Urgency
            </label>
            <select className="w-full rounded-lg border border-[#c3c6d7] focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] h-11 px-3 bg-white outline-none">
              <option>Routine</option>
              <option>Priority</option>
              <option>Immediate</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrescriptionExtraDetails;