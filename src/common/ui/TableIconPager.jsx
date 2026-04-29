import React from "react";

const TableIconPager = () => {
  return (
    <div className="flex gap-2">
      <button className="p-1 rounded border border-slate-200 text-slate-400 hover:bg-white transition-colors">
        <span className="material-symbols-outlined text-sm">
          chevron_left
        </span>
      </button>

      <button className="p-1 rounded border border-slate-200 text-slate-400 hover:bg-white transition-colors">
        <span className="material-symbols-outlined text-sm">
          chevron_right
        </span>
      </button>
    </div>
  );
};

export default TableIconPager;