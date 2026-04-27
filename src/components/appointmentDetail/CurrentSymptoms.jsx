import React from "react";

const symptoms = [
  "Chronic Migraine",
  "Nausea",
  "Light Sensitivity",
  "Dizziness",
];

const CurrentSymptoms = () => {
  return (
    <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-100">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-[#004ac6]">
          medical_services
        </span>
        <h3 className="font-manrope text-[20px] leading-[28px] font-semibold text-slate-900">
          Current Symptoms
        </h3>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {symptoms.map((item) => (
          <span
            key={item}
            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-lg border-l-4 border-[#004ac6] text-sm sm:text-base">
        "I've been experiencing intense throbbing pain on the left side of my
        head for the past 3 days. It usually gets worse in the afternoon and is
        accompanied by extreme sensitivity to bright lights. Ibuprofen hasn't
        provided much relief."
      </p>
    </div>
  );
};

export default CurrentSymptoms;