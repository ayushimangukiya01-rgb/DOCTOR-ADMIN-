import React from "react";

const DiagnosisForm = () => {
  return (
    <section className="bg-white rounded-xl border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] p-5 sm:p-6">
      <h2 className="font-manrope text-[22px] sm:text-[24px] leading-[32px] font-semibold text-slate-900 mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-[#004ac6]">
          clinical_notes
        </span>
        Diagnosis Details
      </h2>

      <div className="space-y-3">
        <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-slate-500 uppercase">
          Primary Diagnosis & Symptoms
        </label>

        <textarea
          rows="3"
          placeholder="Describe the medical condition, chief complaints, and observations..."
          className="w-full rounded-lg border border-[#c3c6d7] focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] text-[16px] leading-[24px] transition-all placeholder:text-slate-300 p-4 outline-none resize-none"
        ></textarea>
      </div>
    </section>
  );
};

export default DiagnosisForm;