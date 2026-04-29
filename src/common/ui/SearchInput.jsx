import React from "react";

const SearchInput = ({ placeholder }) => {
  return (
    <div className="relative w-full max-w-md">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
        search
      </span>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-full bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none ring-0 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-600/20"
      />
    </div>
  );
};

export default SearchInput;