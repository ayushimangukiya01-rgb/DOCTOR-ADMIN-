import React from "react";

const TimelineList = ({ items }) => {
  return (
    <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-slate-100">
      {items.map((item) => (
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
  );
};

export default TimelineList;