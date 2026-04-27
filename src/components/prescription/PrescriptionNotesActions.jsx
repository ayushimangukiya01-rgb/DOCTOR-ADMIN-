import React from "react";

const PrescriptionNotesActions = () => {
  return (
    <>
      {/* Precautions & Notes */}
      <section className="bg-white rounded-xl border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-manrope text-[20px] leading-[28px] font-semibold text-slate-900 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#004ac6]">
              warning
            </span>
            Precautions
          </h3>

          <textarea
            rows="3"
            placeholder="Advise patient on food habits, physical activity, or warnings..."
            className="w-full rounded-lg border border-[#c3c6d7] focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] text-sm p-4 outline-none resize-none"
          ></textarea>
        </div>

        <div className="space-y-4">
          <h3 className="font-manrope text-[20px] leading-[28px] font-semibold text-slate-900 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#004ac6]">
              notes
            </span>
            Doctor Notes (Private)
          </h3>

          <textarea
            rows="3"
            placeholder="Internal clinical notes or reminders..."
            className="w-full rounded-lg border border-[#c3c6d7] focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] text-sm p-4 outline-none resize-none"
          ></textarea>
        </div>
      </section>

      {/* Form Actions */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pt-2">
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 sm:px-8 py-3 font-medium border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">print</span>
            Preview & Print
          </button>

          <button className="px-6 sm:px-8 py-3 font-medium border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">share</span>
            Share Digitally
          </button>
        </div>

        <button className="px-8 sm:px-12 py-3 font-medium bg-[#004ac6] text-white rounded-lg shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">task_alt</span>
          Submit Prescription
        </button>
      </div>
    </>
  );
};

export default PrescriptionNotesActions;