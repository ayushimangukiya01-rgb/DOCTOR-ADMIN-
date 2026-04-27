import React from "react";

const historyItems = [
  {
    title: "Annual Physical Examination",
    subtitle: "General Checkup • Dr. Robert Chen",
    date: "Aug 12, 2023",
    active: true,
  },
  {
    title: "Type 2 Diabetes Diagnosis",
    subtitle: "Endocrinology • City General Hospital",
    date: "Jan 05, 2022",
    active: false,
  },
];

const MedicalHistory = () => {
  return (
    <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-100">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-[#004ac6]">
          history
        </span>
        <h3 className="font-manrope text-[20px] leading-[28px] font-semibold text-slate-900">
          Medical History
        </h3>
      </div>

      <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-slate-100">
        {historyItems.map((item) => (
          <div key={item.title} className="relative pl-8">
            <span
              className={`absolute left-0 top-1.5 w-[22px] h-[22px] bg-white border-2 rounded-full z-10 ${
                item.active ? "border-[#004ac6]" : "border-slate-200"
              }`}
            ></span>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <h4 className="text-[16px] leading-[24px] font-bold text-slate-900">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm">{item.subtitle}</p>
              </div>

              <span className="text-slate-400 text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase shrink-0">
                {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalHistory;