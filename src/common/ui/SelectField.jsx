import React from "react";

const SelectField = ({ options }) => {
  return (
    <div className="relative">
      <select className="appearance-none bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 pr-10 text-sm focus:border-[#004ac6] focus:ring-0 outline-none w-full">
        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>

      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">
        expand_more
      </span>
    </div>
  );
};

export default SelectField;